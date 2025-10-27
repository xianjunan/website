"use client";

import { useEffect, useRef } from "react";

export function TetrisBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const tetrominoes = [
      { shape: [[1,1,1,1]], color: "#06b6d4", border: "#0e7490" }, // I
      { shape: [[1,1],[1,1]], color: "#eab308", border: "#a16207" }, // O
      { shape: [[0,1,0],[1,1,1]], color: "#a855f7", border: "#6b21a8" }, // T
      { shape: [[0,1,1],[1,1,0]], color: "#22c55e", border: "#15803d" }, // S
      { shape: [[1,1,0],[0,1,1]], color: "#ef4444", border: "#b91c1c" }, // Z
      { shape: [[1,0,0],[1,1,1]], color: "#3b82f6", border: "#1e40af" }, // J
      { shape: [[0,0,1],[1,1,1]], color: "#f97316", border: "#c2410c" }, // L
    ];

    const blocks: Array<{
      x: number;
      y: number;
      speed: number;
      shape: number[][];
      color: string;
      borderColor: string;
      blockSize: number;
    }> = [];

    for (let i = 0; i < 15; i++) {
      const tetromino = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
      blocks.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        speed: 0.5 + Math.random() * 1,
        shape: tetromino.shape,
        color: tetromino.color,
        borderColor: tetromino.border,
        blockSize: 25,
      });
    }

    function drawTetromino(block: typeof blocks[0]) {
      if (!ctx) return;
      const { x, y, shape, color, borderColor, blockSize } = block;
      
      shape.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell) {
            ctx.fillStyle = color;
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = 2;
            ctx.fillRect(x + j * blockSize, y + i * blockSize, blockSize, blockSize);
            ctx.strokeRect(x + j * blockSize, y + i * blockSize, blockSize, blockSize);
          }
        });
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocks.forEach((block) => {
        drawTetromino(block);
        block.y += block.speed;

        if (block.y > canvas.height) {
          block.y = -100;
          block.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 opacity-40"
    />
  );
}
