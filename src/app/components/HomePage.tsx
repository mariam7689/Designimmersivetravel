import { VideoHeroSection } from "./VideoHeroSection";
import { FeaturedDesertsSection } from "./FeaturedDesertsSection";
import { HiddenGemsShowcase } from "./HiddenGemsShowcase";
import { DesertNightsSection } from "./DesertNightsSection";
import { BrandShowcase } from "./BrandShowcase";
import { InteractiveMap } from "./InteractiveMap";
import { motion } from "motion/react";
import { Calendar, ArrowRight, Sparkles, Wind, Compass } from "lucide-react";
import { Link } from "react-router";

const experiences = [
  {
    icon: "🚙",
    name: "4x4 Safari",
    description: "Conquer towering dunes in premium 4x4 vehicles",
    duration: "Half Day",
  },
  {
    icon: "⛺",
    name: "Luxury Camping",
    description: "Sleep under stars in eco-friendly desert camps",
    duration: "Overnight",
  },
  {
    icon: "🌟",
    name: "Stargazing",
    description: "Witness the Milky Way with Bedouin astronomers",
    duration: "Evening",
  },
  {
    icon: "🥾",
    name: "Desert Hiking",
    description: "Trek through ancient valleys and mountains",
    duration: "Full Day",
  },
  {
    icon: "🏂",
    name: "Sandboarding",
    description: "Surf down massive sand dunes",
    duration: "2-3 Hours",
  },
  {
    icon: "📸",
    name: "Photography",
    description: "Capture stunning desert landscapes",
    duration: "Flexible",
  },
];

const moods = [
  {
    emoji: "🔥",
    label: "Adventure",
    description: "Adrenaline-fueled experiences",
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    emoji: "🌙",
    label: "Peace",
    description: "Tranquil desert escapes",
    gradient: "from-blue-400/20 to-purple-400/20",
  },
  {
    emoji: "✨",
    label: "Luxury",
    description: "Premium comfort meets nature",
    gradient: "from-yellow-400/20 to-amber-500/20",
  },
  {
    emoji: "🧘",
    label: "Spiritual",
    description: "Inner peace and reflection",
    gradient: "from-teal-400/20 to-cyan-500/20",
  },
];

export function HomePage() {
  return (
    <div className="min-h-screen">
      <VideoHeroSection />

      <section className="py-32 px-4 bg-gradient-to-b from-background to-[#F2E6C9]/30 dark:from-background dark:to-[#1A2F3D]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "48px 48px",
            }}
            className="absolute inset-0 text-[#D8B36A]"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D8B36A]/20 to-[#C17C54]/20 backdrop-blur-sm rounded-full mb-6 border border-[#D8B36A]/30"
            >
              <Sparkles className="w-5 h-5 text-[#D8B36A]" />
              <span className="text-sm font-semibold tracking-wider uppercase">Choose Your Journey</span>
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-text bg-gradient-to-r from-[#4A3B2A] via-[#D8B36A] to-[#4A3B2A] bg-clip-text text-transparent">
              Find Your Desert Mood
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every traveler seeks something different. What calls to you?
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {moods.map((mood, index) => (
              <motion.div
                key={mood.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative rounded-3xl p-8 bg-gradient-to-br ${mood.gradient} backdrop-blur-sm border border-white/10 dark:border-white/5 hover:scale-105 transition-all duration-500 shadow-xl`}>
                  <motion.div
                    className="text-7xl mb-6"
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  >
                    {mood.emoji}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2 brand-text">{mood.label}</h3>
                  <p className="text-muted-foreground">{mood.description}</p>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D8B36A]/0 to-[#D8B36A]/0 group-hover:from-[#D8B36A]/10 group-hover:to-[#C17C54]/10 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedDesertsSection />

      <section className="py-32 px-4 bg-gradient-to-b from-white to-[#F2E6C9] dark:from-[#0B1D2A] dark:to-[#1A2F3D]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Compass className="w-16 h-16 text-[#D8B36A]" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-text bg-gradient-to-r from-[#4A3B2A] via-[#D8B36A] to-[#4A3B2A] bg-clip-text text-transparent">
              Desert Experiences
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From adrenaline-pumping adventures to peaceful spiritual journeys
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-white dark:bg-[#1A2F3D] rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-xl border border-border">
                  <div className="text-6xl mb-6">{exp.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{exp.name}</h3>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#D8B36A] font-semibold">{exp.duration}</span>
                    <ArrowRight className="w-5 h-5 text-[#D8B36A] group-hover:translate-x-2 transition-transform" />
                  </div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D8B36A]/0 to-[#D8B36A]/0 group-hover:from-[#D8B36A]/5 group-hover:to-[#C17C54]/5 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link
              to="/activities"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-full hover:scale-105 transition-transform shadow-xl font-semibold text-lg"
            >
              Explore All Experiences
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <HiddenGemsShowcase />

      <DesertNightsSection />

      <section className="py-32 px-4 bg-gradient-to-b from-[#0B1D2A] to-[#1A2F3D] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white brand-text">
              Interactive Desert Map
            </h2>
            <p className="text-xl text-white/70">
              Explore Egypt's most iconic desert locations
            </p>
          </motion.div>
          <InteractiveMap />
        </div>
      </section>

      <BrandShowcase />

      <section className="py-32 px-4 bg-gradient-to-br from-[#F2E6C9] to-[#D8B36A] dark:from-[#1A2F3D] dark:to-[#4A3B2A] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Wind className="absolute top-10 right-10 w-64 h-64 text-white" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", duration: 0.8 }}
          >
            <Sparkles className="w-20 h-20 mx-auto mb-8 text-[#4A3B2A] dark:text-[#D8B36A] animate-pulse-glow" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 brand-text text-[#4A3B2A] dark:text-white">
            Ready for Your Desert Journey?
          </h2>
          <p className="text-xl text-[#4A3B2A]/80 dark:text-white/80 mb-12 max-w-2xl mx-auto">
            Let our intelligent trip planner create the perfect itinerary tailored to your dreams, budget, and travel style
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/plan"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#4A3B2A] via-[#C17C54] to-[#4A3B2A] text-white rounded-full shadow-2xl font-bold text-lg"
            >
              <Calendar className="w-6 h-6" />
              Start Planning Your Adventure
              <ArrowRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
