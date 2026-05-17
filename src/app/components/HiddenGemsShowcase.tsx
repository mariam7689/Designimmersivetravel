import { motion } from "motion/react";
import { Compass, Camera, Heart, MapPin } from "lucide-react";

const gems = [
  {
    title: "The Whispering Dunes",
    location: "Great Sand Sea",
    story: "Ancient dunes that sing when the wind blows through them at sunset. Local Bedouins say these are the voices of travelers who found peace in the desert.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80",
    atmosphere: "Mystical",
  },
  {
    title: "Bedouin Tea Ceremony",
    location: "Sinai Desert",
    story: "Share stories around a crackling fire with Bedouin families who've called these mountains home for generations. Learn ancient wisdom passed down through centuries.",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80",
    atmosphere: "Cultural",
  },
  {
    title: "Crystal Mountain Summit",
    location: "Western Desert",
    story: "A small mountain made entirely of sparkling calcite crystals. Climb to the top at sunrise and watch the entire landscape turn gold.",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80",
    atmosphere: "Spiritual",
  },
];

export function HiddenGemsShowcase() {
  return (
    <section className="py-32 px-4 bg-gradient-to-b from-[#4A3B2A] to-[#0B1D2A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.6, 0.2],
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
          className="text-center mb-20"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="inline-block mb-6"
          >
            <Compass className="w-16 h-16 text-[#D8B36A]" />
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white brand-text">
            Hidden Gems
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Secret places known only to locals and the travelers who seek authentic desert experiences
          </p>
        </motion.div>

        <div className="space-y-32">
          {gems.map((gem, index) => (
            <motion.div
              key={gem.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              <motion.div
                className="flex-1 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    src={gem.image}
                    alt={gem.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-6 right-6">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                    >
                      <Heart className="w-6 h-6 text-white" />
                    </motion.button>
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <span className="px-4 py-2 bg-[#D8B36A]/90 backdrop-blur-sm rounded-full text-white font-semibold text-sm">
                      {gem.atmosphere}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute -inset-2 border-2 border-[#D8B36A] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    boxShadow: "0 0 60px rgba(216, 179, 106, 0.4)",
                  }}
                />
              </motion.div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-2 text-[#D8B36A]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm tracking-wider uppercase">{gem.location}</span>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white brand-text">
                  {gem.title}
                </h3>

                <p className="text-xl text-white/80 leading-relaxed italic">
                  "{gem.story}"
                </p>

                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-full font-semibold shadow-lg"
                  >
                    Learn More
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Camera className="w-5 h-5 text-white" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
