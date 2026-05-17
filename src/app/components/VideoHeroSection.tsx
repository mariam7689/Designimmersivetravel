import { motion, AnimatePresence } from "motion/react";
import { Compass, Calendar, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMGRlc2VydCUyMHNhZmFyaXxlbnwxfHx8fDE3NzkwMzUzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1643236166660-60907b89662b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRlc2VydCUyMGVneXB0fGVufDF8fHx8MTc3OTAzNTMwNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1714159122764-9982083db2de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMGJlZG91aW4lMjBjYW1wJTIwbmlnaHR8ZW58MXx8fHwxNzc5MDM1MzA2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1661270288617-f3168c7a18be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5haSUyMG1vdW50YWlucyUyMHN1bnNldHxlbnwxfHx8fDE3NzkwMzUzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

export function VideoHeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2.5 + 0.5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    let animationFrame: number;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.fillStyle = `rgba(242, 230, 201, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.y > canvas.height) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
      });

      animationFrame = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        {/* Cinematic Ken Burns Effect Backgrounds */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${HERO_IMAGES[currentImageIndex]}')` }}
          />
        </AnimatePresence>

        {/* Overlays for depth and text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D2A]/80 via-[#1A2F3D]/50 to-[#4A3B2A]/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/40" />

        {/* Sand Particles Canvas */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-90 mix-blend-screen" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />

        {/* Floating Light Orbs */}
        <motion.div
          className="absolute inset-0"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#D8B36A] rounded-full blur-[2px]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="relative h-full flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 mt-20"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(216, 179, 106, 0.3)",
                  "0 0 40px rgba(216, 179, 106, 0.6)",
                  "0 0 20px rgba(216, 179, 106, 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full mb-6"
            >
              <div className="w-2 h-2 bg-[#D8B36A] rounded-full animate-pulse" />
              <span className="text-white/90 tracking-wider text-sm uppercase font-medium">
                Cinematic Desert Experiences
              </span>
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white tracking-tight"
            style={{ textShadow: "0 10px 40px rgba(0, 0, 0, 0.7)" }}
          >
            Discover
            <br />
            <span className="bg-gradient-to-r from-[#D8B36A] via-[#F2E6C9] to-[#D8B36A] bg-clip-text text-transparent">
              Desertia
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Immerse yourself in authentic Bedouin culture, luxury eco-camps, 
            and breathtaking safaris across Egypt's hidden sands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/explore"
                className="group relative px-10 py-5 bg-gradient-to-r from-[#D8B36A] via-[#C17C54] to-[#D8B36A] text-white rounded-full overflow-hidden shadow-[0_0_30px_rgba(216,179,106,0.3)] block"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative flex items-center gap-3 font-semibold text-lg">
                  <Compass className="w-6 h-6" />
                  Begin Expedition
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/plan"
                className="group px-10 py-5 bg-white/10 backdrop-blur-lg border-2 border-white/20 text-white rounded-full hover:bg-white/20 hover:border-white/40 transition-all shadow-xl block"
              >
                <span className="flex items-center gap-3 font-semibold text-lg">
                  <Calendar className="w-6 h-6" />
                  Design Journey
                </span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-20 flex justify-center gap-12 text-white/70 text-sm font-medium"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold text-white drop-shadow-lg">15+</div>
              <div className="uppercase tracking-widest text-xs">Deserts</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold text-white drop-shadow-lg">50+</div>
              <div className="uppercase tracking-widest text-xs">Eco-Camps</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex flex-col items-center gap-2">
              <div className="text-4xl font-bold text-white drop-shadow-lg">4.9</div>
              <div className="uppercase tracking-widest text-xs">Rating</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 cursor-pointer"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-[0.2em]">Discover</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </div>
      </motion.div>
    </section>
  );
}