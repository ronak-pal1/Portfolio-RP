import React, { useRef, useState } from "react";

const ScanReveal = ({
  children,
  boxWidth = 130,
  boxHeight = 130,
  className = "",
  style = {},
  cornerLength = 16,   
  cornerThickness = 1,
  cornerOffset = 8,   
}) => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Common styles to seamlessly synchronize both the scan box and the scope wrapper positions
  const trackingContainerStyle = {
    position: "absolute",
    left: mousePos.x,
    top: mousePos.y,
    transform: "translate(-50%, -50%)", // Perfect crosshair centering pivot point
    pointerEvents: "none",
    opacity: isHovered ? 1 : 0,
    transition: "opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "left, top, opacity",
    zIndex: 50,
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-block overflow-hidden group ${className}`}
      style={{
        cursor: "none", 
        ...style,
      }}
    >
      {/* 1. The Original Live Content Asset Layer */}
      {children}

      {/* 2. The Dynamic Inverting Scan Box (Kept purely for the background inversion layout math) */}
      <div
        style={{
    ...trackingContainerStyle,
    width: boxWidth,
    height: boxHeight,
    backgroundColor: "#efa615", 
    mixBlendMode: "difference",
  } as any}
      />

      {/* 3. The Camera Zoom Scope Layer (Kept outside 'difference' to preserve pristine white rendering colors) */}
      <div
       style={{
    ...trackingContainerStyle,
    width: boxWidth + (cornerOffset * 2),
    height: boxHeight + (cornerOffset * 2),
  } as any}
      >
        {/* Top Left Bracket */}
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: cornerLength, height: cornerLength,
          borderTop: `${cornerThickness}px solid #ffffff`,
          borderLeft: `${cornerThickness}px solid #ffffff`
        }} />

        {/* Top Right Bracket */}
        <div style={{
          position: "absolute", top: 0, right: 0,
          width: cornerLength, height: cornerLength,
          borderTop: `${cornerThickness}px solid #ffffff`,
          borderRight: `${cornerThickness}px solid #ffffff`
        }} />

        {/* Bottom Left Bracket */}
        <div style={{
          position: "absolute", bottom: 0, left: 0,
          width: cornerLength, height: cornerLength,
          borderBottom: `${cornerThickness}px solid #ffffff`,
          borderLeft: `${cornerThickness}px solid #ffffff`
        }} />

        {/* Bottom Right Bracket */}
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: cornerLength, height: cornerLength,
          borderBottom: `${cornerThickness}px solid #ffffff`,
          borderRight: `${cornerThickness}px solid #ffffff`
        }} />
      </div>
    </div>
  );
};

export default ScanReveal;