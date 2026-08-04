'use client';

import React, { useEffect, useRef } from 'react';

/**
 * HeroCanvas — renders an animated particle grid / neural network background
 * similar to the OpenClaw AI aesthetic: floating data nodes, connecting beams,
 * scanline sweep, and pulsing neon grid.
 */
export const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    // PARTICLE NODES
    const NODE_COUNT = 55;
    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
      color: string;
      pulse: number;
      pulseSpeed: number;
    }
    const COLORS = ['#FF3848', '#10B981', '#3B82F6', '#F59E0B', '#A78BFA'];
    let nodes: Node[] = [];

    // SCANLINE state
    let scanY = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
      // Re-init nodes on resize
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2.5 + 1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.018 + Math.random() * 0.025,
      }));
    };

    const drawGrid = (t: number) => {
      // Faint dot grid
      const spacing = 44;
      ctx.save();
      for (let gx = 0; gx < W; gx += spacing) {
        for (let gy = 0; gy < H; gy += spacing) {
          const alpha = 0.06 + 0.03 * Math.sin(t * 0.0008 + gx * 0.05 + gy * 0.05);
          ctx.beginPath();
          ctx.arc(gx, gy, 1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148, 163, 184, ${alpha})`;
          ctx.fill();
        }
      }
      ctx.restore();
    };

    const drawConnections = () => {
      const LINK_DIST = 160;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = (1 - dist / LINK_DIST) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 56, 72, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const drawNodes = (t: number) => {
      nodes.forEach(n => {
        n.pulse += n.pulseSpeed;
        const glow = 0.5 + 0.5 * Math.sin(n.pulse);
        const radius = n.r + glow * 1.8;

        // Outer glow ring
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, radius * 4);
        grad.addColorStop(0, n.color.replace(')', ', 0.5)').replace('rgb', 'rgba'));
        grad.addColorStop(1, 'transparent');
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = 0.7 + 0.3 * glow;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
    };

    const moveNodes = () => {
      nodes.forEach(n => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
      });
    };

    const drawScanline = (t: number) => {
      scanY = (t * 0.06) % (H + 20) - 10;
      const sg = ctx.createLinearGradient(0, scanY - 15, 0, scanY + 15);
      sg.addColorStop(0, 'transparent');
      sg.addColorStop(0.5, 'rgba(255, 56, 72, 0.055)');
      sg.addColorStop(1, 'transparent');
      ctx.fillStyle = sg;
      ctx.fillRect(0, scanY - 15, W, 30);
    };

    const drawNeonLines = (t: number) => {
      // Horizontal neon accent lines
      [0.28, 0.72].forEach((frac, i) => {
        const y = H * frac;
        const alpha = 0.04 + 0.02 * Math.sin(t * 0.001 + i);
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.strokeStyle = `rgba(59, 130, 246, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const render = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      drawGrid(t);
      drawNeonLines(t);
      drawConnections();
      drawNodes(t);
      drawScanline(t);
      moveNodes();
      animId = requestAnimationFrame(render);
    };

    resize();
    window.addEventListener('resize', resize);
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};
