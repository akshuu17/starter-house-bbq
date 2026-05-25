import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  alpha: number;
  life: number;
  maxLife: number;
}

export const CustomCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, px: 0, py: 0, speed: 0, isHovered: false });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Track buttons and links hover
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive-hover')
      ) {
        mouseRef.current.isHovered = true;
      } else {
        mouseRef.current.isHovered = false;
      }
    };
    window.addEventListener('mouseover', handleMouseOver);

    // Particle generator
    const createParticle = (x: number, y: number) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 1.5 + 0.3;
      const life = 0;
      const maxLife = 80 + Math.random() * 70; // Lingers much longer (approx 1.5s - 2.5s)

      // Randomize color between red, orange, yellow
      const colorRand = Math.random();
      let color = '#ff5500'; // Orange
      if (colorRand < 0.28) color = '#d31c00'; // Deep fire red
      else if (colorRand > 0.72) color = '#ffaa00'; // Bright ember gold

      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed + (mouseRef.current.x - mouseRef.current.px) * 0.08,
        vy: Math.sin(angle) * speed - (Math.random() * 1.2 + 0.3), // Float slowly upwards
        size: Math.random() * 4.5 + 1.5, // Rich varied sizes
        color,
        alpha: 1,
        life,
        maxLife,
      });
    };

    // Main animation loop
    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const m = mouseRef.current;
      
      // Interpolate mouse coordinates for smooth lag-glow
      m.px += (m.x - m.px) * 0.18;
      m.py += (m.y - m.py) * 0.18;

      // Create ember particles when mouse moves significantly
      const dx = m.x - m.px;
      const dy = m.y - m.py;
      m.speed = Math.sqrt(dx * dx + dy * dy);

      if (m.speed > 0.5 && particlesRef.current.length < 280) {
        const steps = Math.min(Math.floor(m.speed / 2.0) + 2, 7);
        for (let i = 0; i < steps; i++) {
          createParticle(m.px + (dx / steps) * i, m.py + (dy / steps) * i);
        }
      } else if (particlesRef.current.length < 220) {
        // CONTINUOUS BURNING EMBER EFFECT WHEN IDLE:
        // Emit 1 to 2 active sparks every single frame to keep the cursor burning like a live sparkler!
        const spawns = Math.random() < 0.65 ? 2 : 1;
        for (let i = 0; i < spawns; i++) {
          createParticle(m.px, m.py);
        }
      }

      // Draw mouse outer ring glow
      ctx.save();
      ctx.beginPath();
      const radius = m.isHovered ? 40 : 20;
      ctx.arc(m.px, m.py, radius, 0, Math.PI * 2);
      ctx.strokeStyle = m.isHovered ? 'rgba(255, 170, 0, 0.6)' : 'rgba(255, 85, 0, 0.4)';
      ctx.lineWidth = m.isHovered ? 3 : 1.5;
      
      // Shadow glow
      ctx.shadowBlur = m.isHovered ? 25 : 12;
      ctx.shadowColor = m.isHovered ? '#ffaa00' : '#ff5500';
      ctx.stroke();
      ctx.restore();

      // Draw mouse inner core dot
      ctx.beginPath();
      ctx.arc(m.px, m.py, m.isHovered ? 8 : 4, 0, Math.PI * 2);
      ctx.fillStyle = m.isHovered ? '#ffaa00' : '#ff5500';
      ctx.fill();

      // Draw and update ember trail particles
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        
        // Update positions with organic draft sways
        p.x += p.vx + Math.sin(p.life * 0.04) * 0.15;
        p.y += p.vy;
        p.alpha = 1 - p.life / p.maxLife;

        // Render particle
        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();

        // Kill old particles
        if (p.life >= p.maxLife) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup listeners
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[999] w-full h-full mix-blend-screen hidden md:block"
    />
  );
};
