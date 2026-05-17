import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function DesertVisualization3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const dunes: Array<{
      x: number;
      height: number;
      width: number;
      offset: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 5; i++) {
      dunes.push({
        x: (i * canvas.width) / 4,
        height: 100 + Math.random() * 100,
        width: 200 + Math.random() * 200,
        offset: 0,
        speed: 0.2 + Math.random() * 0.3,
      });
    }

    let animationFrame: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#6FA8DC");
      gradient.addColorStop(0.5, "#F2E6C9");
      gradient.addColorStop(1, "#D8B36A");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      dunes.forEach((dune, index) => {
        dune.offset += dune.speed;
        if (dune.offset > canvas.width) {
          dune.offset = -dune.width;
        }

        const duneGradient = ctx.createLinearGradient(
          dune.x + dune.offset,
          canvas.height - dune.height,
          dune.x + dune.offset + dune.width,
          canvas.height
        );

        if (index % 2 === 0) {
          duneGradient.addColorStop(0, "#D8B36A");
          duneGradient.addColorStop(0.5, "#C17C54");
          duneGradient.addColorStop(1, "#D8B36A");
        } else {
          duneGradient.addColorStop(0, "#F2E6C9");
          duneGradient.addColorStop(0.5, "#D8B36A");
          duneGradient.addColorStop(1, "#F2E6C9");
        }

        ctx.fillStyle = duneGradient;
        ctx.beginPath();
        ctx.moveTo(dune.x + dune.offset, canvas.height);
        ctx.quadraticCurveTo(
          dune.x + dune.offset + dune.width / 2,
          canvas.height - dune.height,
          dune.x + dune.offset + dune.width,
          canvas.height
        );
        ctx.closePath();
        ctx.fill();

        ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
        ctx.shadowBlur = 10;
        ctx.shadowOffsetY = 5;
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="w-full h-full"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full rounded-3xl shadow-2xl"
        style={{ minHeight: "400px" }}
      />
    </motion.div>
  );
}
