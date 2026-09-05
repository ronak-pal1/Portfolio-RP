import { useMemo, useRef, useState, useEffect } from "react";
import { useAnimationFrame } from "framer-motion";
import ScanReveal from "./ScanReveal";

export default function ImageGridWave({
  src,
  alt = "Animated grid image",
  width, // Can be a number (490) or a string ("100%", "50vw")
  height, // Can be a number (560) or a string ("auto", "400px")
  rows = 22,
  cols = 22,
  speed = 7,
  waveWidth = 2.2,
  maxScale = 1.7,
  className = "",
}) {
  const refs = useRef([]);
  const containerRef = useRef(null);
  const [finished, setFinished] = useState(false);
  const [autoDimensions, setAutoDimensions] = useState({ width: 0, height: 0 });

  // Fallback to image natural dimensions only if explicit width/height aren't provided
  useEffect(() => {
    if (!src || (width && height)) return;

    const img = new Image();
    img.src = src;
    img.onload = () => {
      setAutoDimensions({
        width: img.naturalWidth || 490,
        height: img.naturalHeight || 560,
      });
    };
    
    setFinished(false);
  }, [src, width, height]);

  // Reset animation state if key configurations change
  useEffect(() => {
    setFinished(false);
  }, [src, rows, cols]);

  // Generate grid tiles
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
    if (finished || !src) return;

    const progress = (time / 1000) * speed;
    const maxPosition = rows + cols - 2;

    if (progress > maxPosition + waveWidth * 3) {
      setFinished(true);
      return;
    }

    refs.current.forEach((el, i) => {
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

      const bump = Math.exp(
        -(delta * delta) / (3 * waveWidth * waveWidth)
      );

      const scale = 1 + bump * (maxScale - 1);
      el.style.transform = `scale(${scale})`;

      el.style.filter = `
        brightness(${1 + bump * 0.1})
        saturate(${1 + bump})
      `;

      el.style.boxShadow = `
        0 0 ${20 * bump}px rgba(37,99,235,${0.9 * bump}),
        0 0 ${40 * bump}px rgba(59,130,246,${0.85 * bump})
      `;
    });
  });

  // Helper to format dimensions safely (converting numbers to 'px')
  const formatDimension = (val, fallback) => {
    if (val === undefined || val === null) return fallback;
    return typeof val === "number" ? `${val}px` : val;
  };

  const finalWidth = formatDimension(width, autoDimensions.width || "100%");
  const finalHeight = formatDimension(height, autoDimensions.height || "auto");

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: finalWidth,
        height: finalHeight,
      }}
    >
      {/* Final Solid Image */}
      <ScanReveal style={{ width: finalWidth, height: finalHeight }}> 
        <img
        src={src}
        alt={alt}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: finished ? 1 : 0,
          transition: "opacity .45s ease",
        }}
      />

      </ScanReveal>
     

      {/* Animated Splitted Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: finished ? "none": "grid",
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          transition: "opacity .45s ease",
          pointerEvents: finished ? "auto" : "none",
          width:"100%",
          height:"100%",
        }}
      >
        {tiles.map((tile, i) => (
          <div
            key={`${tile.row}-${tile.col}`}
            ref={(el) => (refs.current[i] = el)}
            style={{
              opacity: 0,
              transform: "scale(0.1)",
              transformOrigin: "bottom right",
              willChange: "transform, opacity, filter",
              transition: "opacity .3s linear",
              margin: "-0.6px", 

              backgroundImage: `url(${src})`,
              backgroundSize: `${cols * 100}% ${rows * 100}%`,
              backgroundPosition: `${
                cols > 1 ? (tile.col / (cols - 1)) * 100 : 0
              }% ${
                rows > 1 ? (tile.row / (rows - 1)) * 100 : 0
              }%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}