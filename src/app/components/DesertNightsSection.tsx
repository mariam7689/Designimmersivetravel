import { motion } from "motion/react";
import { Star, Wind, Tent } from "lucide-react";
import { useEffect, useRef } from "react";

export function DesertNightsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinklePhase: number;
    }> = [];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.7,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random(),
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
      });
    }

    const milkyWayStars: Array<{ x: number; y: number; opacity: number }> = [];
    for (let i = 0; i < 500; i++) {
      const angle = Math.random() * Math.PI / 3 - Math.PI / 6;
      const distance = Math.random() * canvas.width * 0.8;
      milkyWayStars.push({
        x: canvas.width / 2 + Math.cos(angle) * distance,
        y: canvas.height * 0.3 + Math.sin(angle) * distance * 0.3,
        opacity: Math.random() * 0.3,
      });
    }

    let frame = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "#0B1D2A");
      gradient.addColorStop(0.5, "#1A2F3D");
      gradient.addColorStop(1, "#4A3B2A");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      milkyWayStars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fillRect(star.x, star.y, 1, 1);
      });

      stars.forEach((star) => {
        star.twinklePhase += star.twinkleSpeed;
        const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
        const opacity = star.opacity * twinkle;

        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        if (star.size > 1.5) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(star.x - star.size * 2, star.y);
          ctx.lineTo(star.x + star.size * 2, star.y);
          ctx.moveTo(star.x, star.y - star.size * 2);
          ctx.lineTo(star.x, star.y + star.size * 2);
          ctx.stroke();
        }
      });

      const campfireX = canvas.width / 2;
      const campfireY = canvas.height * 0.85;
      const glowRadius = 80 + Math.sin(frame * 0.05) * 20;

      const fireGradient = ctx.createRadialGradient(
        campfireX,
        campfireY,
        0,
        campfireX,
        campfireY,
        glowRadius
      );
      fireGradient.addColorStop(0, "rgba(255, 150, 50, 0.4)");
      fireGradient.addColorStop(0.5, "rgba(255, 100, 30, 0.2)");
      fireGradient.addColorStop(1, "rgba(255, 80, 20, 0)");
      ctx.fillStyle = fireGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < 3; i++) {
        const flameX = campfireX + (Math.random() - 0.5) * 20;
        const flameY = campfireY - Math.random() * 40;
        const flameSize = Math.random() * 15 + 10;

        const flameGradient = ctx.createRadialGradient(flameX, flameY, 0, flameX, flameY, flameSize);
        flameGradient.addColorStop(0, `rgba(255, ${150 + Math.random() * 50}, 0, 0.8)`);
        flameGradient.addColorStop(1, "rgba(255, 100, 0, 0)");
        ctx.fillStyle = flameGradient;
        ctx.beginPath();
        ctx.arc(flameX, flameY, flameSize, 0, Math.PI * 2);
        ctx.fill();
      }

      frame++;
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="inline-block mb-6"
          >
            <Star className="w-16 h-16 text-[#D8B36A] fill-[#D8B36A]" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white brand-text">
            Desert Nights
          </h2>
          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Experience the magic of Egypt's night sky, where the Milky Way stretches across the horizon
            and ancient stories come alive around the campfire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Star,
              title: "Stargazing",
              description: "Witness constellations invisible from cities, guided by Bedouin astronomers",
            },
            {
              icon: Tent,
              title: "Desert Camping",
              description: "Sleep under billions of stars in luxury eco-camps or traditional Bedouin tents",
            },
            {
              icon: Wind,
              title: "Night Safari",
              description: "Experience the desert's nocturnal life and the peaceful silence of endless dunes",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 bg-gradient-to-br from-[#D8B36A] to-[#C17C54] rounded-2xl flex items-center justify-center mb-6"
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>

                <motion.div
                  className="absolute inset-0 rounded-3xl border-2 border-[#D8B36A] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: "0 0 30px rgba(216, 179, 106, 0.3)",
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl italic text-white/80 max-w-4xl mx-auto mb-6">
            "In the desert, the night sky becomes a cathedral of stars, and the silence speaks louder than words"
          </blockquote>
          <p className="text-white/50">— Bedouin Proverb</p>
        </motion.div>
      </div>
    </section>
  );
}
