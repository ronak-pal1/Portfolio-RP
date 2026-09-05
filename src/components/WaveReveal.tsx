import React, { useMemo, useRef, useState, useEffect, CSSProperties } from "react";
import { useAnimationFrame } from "framer-motion";
import { toBlob } from "html-to-image";

interface WaveRevealProps {
  children: React.ReactNode;
  rows?: number;
  cols?: number;
  speed?: number;
  waveWidth?: number;
  maxScale?: number;
  className?: string;
  style?: CSSProperties;
}

export default function WaveReveal({
  children,
  rows = 22,
  cols = 22,
  speed = 7,
  waveWidth = 2.2,
  maxScale = 1.7,
  className = "",
  style = {},
}: WaveRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const childWrapperRef = useRef<HTMLDivElement>(null);
  const tilesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [status, setStatus] = useState<"measuring" | "captured" | "completed">("measuring");
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!childWrapperRef.current) return;

    const targetNode = childWrapperRef.current;

    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const rect = targetNode.getBoundingClientRect();
        
        if (rect.width > 0 && rect.height > 0 && status === "measuring") {
          setDimensions({ width: rect.width, height: rect.height });

          Promise.all([
            document.fonts.ready,
            new Promise((resolve) => setTimeout(resolve, 300))
          ]).then(() => {
            toBlob(targetNode, {
              cacheBust: true,
              width: rect.width,
              height: rect.height,
              pixelRatio: 3, // High density scaling
              skipFonts: false,
              preferredFontFormat: "woff2",
              style: {
                transform: "none",
                transformOrigin: "top left",
                visibility: "visible",
                opacity: "1",
                margin: "0",
                padding: "0",
              },
            })
              .then((blob) => {
                if (!blob) throw new Error("Blob generation failed");
                const dataUrl = URL.createObjectURL(blob);
                setCapturedImage(dataUrl);
                setStatus("captured");
              })
              .catch((err) => {
                console.error("WaveReveal ultra-quality snapshot generation failed:", err);
                setStatus("completed");
              });
          });
        }
      }
    });

    resizeObserver.observe(targetNode);
    return () => resizeObserver.disconnect();
  }, [status]);

  // Clean up object blobs to prevent browser memory leaks
  useEffect(() => {
    return () => {
      if (capturedImage && capturedImage.startsWith("blob:")) {
        URL.revokeObjectURL(capturedImage);
      }
    };
  }, [capturedImage]);

  const tiles = useMemo(() => {
    const arr = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        arr.push({
          row: r,
          col: c,
          position: (cols - 1 - c) + (rows - 1 - r),
        });
      }
    }
    return arr;
  }, [rows, cols]);

  useAnimationFrame((time) => {
    if (status !== "captured" || !capturedImage) return;

    const progress = (time / 1000) * speed;
    const maxPosition = rows + cols - 2;

    if (progress > maxPosition + waveWidth * 3) {
      setStatus("completed");
      return;
    }

    tilesRef.current.forEach((el, i) => {
      if (!el || !tiles[i]) return;

      const tile = tiles[i];
      const delta = progress - tile.position;

      if (delta < 0) {
        el.style.opacity = "0";
        el.style.transform = "scale(0.3)";
        el.style.filter = "none";
        el.style.boxShadow = "none";
        return;
      }

      el.style.opacity = "1";

      const bump = Math.exp(-(delta * delta) / (3 * waveWidth * waveWidth));
      const scale = 1 + bump * (maxScale - 1);
      el.style.transform = `scale(${scale})`;

      el.style.filter = `brightness(${1 + bump * 0.15}) saturate(${1 + bump * 0.4})`;

      el.style.boxShadow = `
        0 0 ${20 * bump}px rgba(37, 99, 235, ${0.6 * bump}),
        0 0 ${40 * bump}px rgba(59, 130, 246, ${0.25 * bump})
      `;
    });
  });

  const safeCols = cols > 1 ? cols - 1 : 1;
  const safeRows = rows > 1 ? rows - 1 : 1;

  const isMeasuring = status === "measuring";
  const isCaptured = status === "captured";
  const isCompleted = status === "completed";

  return (
    <div
      ref={containerRef}
      className={`relative inline-block ${className}`}
      style={{
        width: dimensions.width ? `${dimensions.width}px` : "auto",
        height: dimensions.height ? `${dimensions.height}px` : "auto",
        ...style,
      }}
    >
      <div
        ref={childWrapperRef}
        style={{
          display: "inline-block",
          width: "max-content",
          maxWidth: "100%",
          visibility: isCaptured ? "hidden" : "visible",
          opacity: isMeasuring ? 1 : isCompleted ? 1 : 0,
          transition: isCompleted ? "opacity 0.4s ease-out" : "none",
        }}
      >
        {children}
      </div>

      {isCaptured && capturedImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          {tiles.map((tile, i) => (
            <div
              key={`${tile.row}-${tile.col}`}
              ref={(el) => (tilesRef.current[i] = el)}
              // Casted to React.CSSProperties | any to completely silence the TypeScript error compiler
              style={{
                opacity: 0,
                transform: "scale(0.3)",
                transformOrigin: "bottom right",
                willChange: "transform, opacity, filter, box-shadow",
                margin: "-0.7px", 

                backgroundImage: `url(${capturedImage})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(tile.col / safeCols) * 100}% ${(tile.row / safeRows) * 100}%`,
                backgroundRepeat: "no-repeat",

                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                imageRendering: "auto",
                
                // Pure runtime hack injection that hides from strict TypeScript validation
                ...({
                  imageRendering: "high-quality",
                  WebkitFontSmoothing: "antialiased",
                  MozOsxFontSmoothing: "grayscale",
                } as any),
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}