import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Compass } from "lucide-react";

export function FeaturePage({ title, description, imageId = "f2dddff10fce8c5cc0468d3c13d16d6eeadcbdb7" }: { title: string, description: string, imageId?: string }) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0 h-[60vh]">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img 
          src={`figma:asset/${imageId}.png`}
          alt={title}
          className="w-full h-full object-cover opacity-60"
        />
        {/* Floating Particles Simulation */}
        <div className="absolute inset-0 z-10 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC45IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIi8+PC9zdmc+')] mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 flex-1 flex flex-col items-center justify-center pt-32 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm mb-4">
            <Sparkles className="w-4 h-4 text-[var(--desert-gold)]" />
            <span>Premium Experience</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Link
              to="/plan"
              className="px-8 py-4 bg-gradient-to-r from-[var(--desert-gold)] to-[var(--warm-terracotta)] text-white rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 shadow-xl shadow-[var(--desert-gold)]/20"
            >
              <Compass className="w-5 h-5" />
              Plan This Experience
            </Link>
            
            <Link
              to="/"
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-5xl mx-auto mt-24 grid md:grid-cols-3 gap-6"
        >
          {/* Mock Feature Cards */}
          <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🏜️</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Authentic Journey</h3>
            <p className="text-muted-foreground text-sm">Experience the real Egyptian desert with certified local Bedouin guides.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Luxury Amenities</h3>
            <p className="text-muted-foreground text-sm">Premium comfort in the heart of nature without compromising on authenticity.</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm border border-border p-6 rounded-2xl">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📸</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Cinematic Memories</h3>
            <p className="text-muted-foreground text-sm">Every moment is curated to look and feel like a breathtaking documentary.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}