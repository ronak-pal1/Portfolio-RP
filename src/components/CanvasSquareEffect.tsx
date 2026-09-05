import { useEffect, useRef } from "react";

const CanvasSquareEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const squareSize = 20; // Size of each square
    let grid = []; // Holds the state of each box
    let currentCols = 0;
    let currentRows = 0;

    // Initialize or re-initialize grid data structures
    const initGrid = (cols, rows) => {
      const newGrid = [];
      for (let r = 0; r < rows; r++) {
        const rowArray = [];
        for (let c = 0; c < cols; c++) {
          // Start each box at a random brightness baseline
          const initialLight = Math.floor(215 + Math.random() * 40);
          rowArray.push({
            current: initialLight,
            target: initialLight,
            // Unique interpolation speed per block for asynchronous blending
            speed: 0.02 + Math.random() * 0.05,
          });
        }
        newGrid.push(rowArray);
      }
      grid = newGrid;
      currentCols = cols;
      currentRows = rows;
    };

    const resizeCanvas = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

      const cols = Math.ceil(width / squareSize);
      const rows = Math.ceil(height / squareSize);

      initGrid(cols, rows);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const animate = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      ctx.clearRect(0, 0, width, height);

      for (let r = 0; r < currentRows; r++) {
        for (let c = 0; c < currentCols; c++) {
          const box = grid[r]?.[c];
          if (!box) continue;

          // Randomly assign a new target brightness to any box at any arbitrary frame
          // Lowering this threshold (e.g., 0.005) makes it calmer; increasing it makes it busier
          if (Math.random() < 0.1) {
            box.target = Math.floor(215 + Math.random() * 40); // Between 215 and 255
            box.speed = 0.01 + Math.random() * 0.1; // Randomize animation speed per shift
          }

          // Linear interpolation (lerp) toward the target color for flawless transitions
          box.current += (box.target - box.current) * box.speed;

          const lightness = Math.floor(box.current);
          ctx.fillStyle = `rgb(${lightness}, ${lightness}, ${lightness})`;

          ctx.fillRect(
            c * squareSize,
            r * squareSize,
            squareSize - 1,
            squareSize - 1,
          );
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      />
  );
};

export default CanvasSquareEffect;
