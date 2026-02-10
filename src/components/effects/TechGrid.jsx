import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * TechGrid Component
 * Animated tech grid background with glowing lines
 */
const TechGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let animationFrameId;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const lineWidth = 1;
      
      // Draw vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        const alpha = 0.05 + Math.sin(time * 0.001 + x * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Draw horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        const alpha = 0.05 + Math.sin(time * 0.001 + y * 0.01) * 0.03;
        ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw glowing intersections
      for (let x = 0; x < canvas.width; x += gridSize) {
        for (let y = 0; y < canvas.height; y += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + 
            Math.pow(y - canvas.height / 2, 2)
          );
          const alpha = 0.1 + Math.sin(time * 0.002 + distance * 0.01) * 0.1;
          
          const gradient = ctx.createRadialGradient(x, y, 0, x, y, 3);
          gradient.addColorStop(0, `rgba(14, 165, 233, ${alpha})`);
          gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x - 3, y - 3, 6, 6);
        }
      }
      
      time++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default TechGrid;
