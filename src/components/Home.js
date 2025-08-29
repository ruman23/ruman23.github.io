import React, { useEffect, useRef } from 'react';
import './Home.css';

export default function Home() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.max(1, window.devicePixelRatio || 1);

    // --- sizing ---
    const resize = () => {
      const parent = canvas.parentElement;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // --- particles ---
    const mouse = { x: null, y: null };
    const rand = (a, b) => a + Math.random() * (b - a);
    const count = 50;
    const COLORS = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#C77DFF'];
    const particles = Array.from({ length: count }, () => ({
      x: rand(0, canvas.width / dpr),
      y: rand(0, canvas.height / dpr),
      vx: rand(-0.4, 0.4),
      vy: rand(-0.4, 0.4),
      r: rand(1.5, 3.0),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      mouse.y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
    };
    const onLeave = () => { mouse.x = mouse.y = null; };
    canvas.addEventListener('mousemove', onMove);
    canvas.addEventListener('touchmove', onMove, { passive: true });
    canvas.addEventListener('mouseleave', onLeave);
    canvas.addEventListener('touchend', onLeave);

    const MAX_LINK = 120;
    const ATTRACT_R2 = 200 * 200;

    const tick = () => {
      const W = canvas.width / dpr, H = canvas.height / dpr;
      ctx.clearRect(0, 0, W, H);

      // update
      for (const p of particles) {
        if (mouse.x != null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < ATTRACT_R2) {
            p.vx += dx * 0.0005;
            p.vy += dy * 0.0005;
          }
        }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < MAX_LINK) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / MAX_LINK) * 0.25})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // points
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMove);
      canvas.removeEventListener('touchmove', onMove);
      canvas.removeEventListener('mouseleave', onLeave);
      canvas.removeEventListener('touchend', onLeave);
    };
  }, []);

  return (
    <section id="home" className="section-container">
      <canvas ref={canvasRef} className="home-canvas" aria-label="Interactive particle field" />
    </section>
  );
}
