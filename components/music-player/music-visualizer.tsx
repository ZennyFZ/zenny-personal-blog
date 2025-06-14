"use client";

import { useRef, useEffect, useCallback } from "react";

interface MusicVisualizerProps {
  isPlaying: boolean;
  analyser: AnalyserNode | null;
  dataArray: Uint8Array | null;
}

export function MusicVisualizer({
  isPlaying,
  analyser,
  dataArray,
}: MusicVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);

  const drawVisualizer = useCallback(() => {
    if (!canvasRef.current || !analyser || !dataArray) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "rgba(255, 182, 193, 0.1)";
    ctx.fillRect(0, 0, width, height);

    const barWidth = (width / dataArray.length) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < dataArray.length; i++) {
      barHeight = (dataArray[i] / 255) * height * 0.8;

      const gradient = ctx.createLinearGradient(
        0,
        height - barHeight,
        0,
        height
      );
      gradient.addColorStop(0, "#ff69b4");
      gradient.addColorStop(0.5, "#da70d6");
      gradient.addColorStop(1, "#9370db");

      ctx.fillStyle = gradient;
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);

      // Add cute sparkle effect on top of bars
      if (barHeight > height * 0.6) {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(x + barWidth / 2, height - barHeight - 5, 2, 0, 2 * Math.PI);
        ctx.fill();
      }

      x += barWidth + 1;
    }

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(drawVisualizer);
    }
  }, [analyser, dataArray, isPlaying]);

  useEffect(() => {
    if (isPlaying) {
      drawVisualizer();
    } else if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, analyser, dataArray, drawVisualizer]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={300}
        height={120}
        className="rounded-lg border-2 border-pink-300 bg-gradient-to-r from-pink-50 to-purple-50"
      />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center">
          <div className="text-2xl mb-1">🎵</div>
          <div className="pixelated-font text-xs text-purple-600">
            {isPlaying ? "Now Playing ♡" : "Music Paused ✨"}
          </div>
        </div>
      </div>
    </div>
  );
}
