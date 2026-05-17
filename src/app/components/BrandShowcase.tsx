import { motion } from "motion/react";
import { Compass, Globe, Map, Star, Wind, Sparkles } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Smart Navigation",
    description: "AI-powered trip planning tailored to your preferences",
    color: "#D8B36A",
  },
  {
    icon: Globe,
    title: "Interactive Maps",
    description: "Explore desert locations with immersive 3D visualization",
    color: "#6FA8DC",
  },
  {
    icon: Star,
    title: "Premium Experiences",
    description: "Curated eco-tourism and luxury desert adventures",
    color: "#C17C54",
  },
  {
    icon: Wind,
    title: "Real-time Updates",
    description: "Weather, conditions, and local guide availability",
    color: "#D8B36A",
  },
  {
    icon: Map,
    title: "Hidden Gems",
    description: "Discover secret locations known only to locals",
    color: "#6FA8DC",
  },
  {
    icon: Sparkles,
    title: "Stargazing Tours",
    description: "Experience the desert night sky like never before",
    color: "#C17C54",
  },
];

export function BrandShowcase() {
  return (
    <section className="py-32 px-4 bg-gradient-to-br from-[#0B1D2A] to-[#1A2F3D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D8B36A 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
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
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#D8B36A] to-[#C17C54] flex items-center justify-center shadow-2xl animate-pulse-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white brand-text">
            Why Choose Desertia?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            The most advanced desert exploration platform combining technology, local expertise, and premium experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300">
                <motion.div
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                </motion.div>

                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>

                <motion.div
                  className="mt-6 h-1 rounded-full"
                  style={{ backgroundColor: feature.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                />
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
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D8B36A] via-[#C17C54] to-[#D8B36A] rounded-full text-white font-semibold shadow-2xl">
            <Star className="w-5 h-5" />
            <span>Trusted by 10,000+ Desert Explorers</span>
            <Star className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
