import { motion } from "motion/react";
import { MapPin, TrendingUp, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

const deserts = [
  {
    id: "siwa-oasis",
    name: "Siwa Oasis",
    region: "Western Desert",
    tagline: "Ancient oasis lost in time",
    description: "Salt lakes, palm groves, and Oracle Temple where Alexander the Great once walked",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80",
    highlights: ["Cleopatra's Spring", "Salt Lakes", "Shali Fortress", "Date Palm Groves"],
    bestTime: "Oct - Apr",
    rating: 4.9,
  },
  {
    id: "white-desert",
    name: "White Desert",
    region: "Western Desert",
    tagline: "Surreal chalk formations",
    description: "Otherworldly white rock sculptures shaped by wind into mushrooms and icebergs",
    difficulty: "Moderate",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80",
    highlights: ["Mushroom Rock", "Crystal Mountain", "Chalk Formations", "Desert Foxes"],
    bestTime: "Oct - Apr",
    rating: 5.0,
  },
  {
    id: "sinai",
    name: "Sinai Mountains",
    region: "Sinai Peninsula",
    tagline: "Sacred peaks and sunrise",
    description: "Climb ancient mountains where prophets walked, witness breathtaking sunrises",
    difficulty: "Hard",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
    highlights: ["Mount Sinai", "St. Catherine", "Colored Canyon", "Bedouin Trails"],
    bestTime: "Sep - May",
    rating: 4.8,
  },
  {
    id: "black-desert",
    name: "Black Desert",
    region: "Western Desert",
    tagline: "Volcanic wonder",
    description: "Dark volcanic mountains and powder create stunning contrast against golden sands",
    difficulty: "Easy",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80",
    highlights: ["Volcanic Hills", "Black Powder", "Panoramic Views", "Unique Geology"],
    bestTime: "Oct - May",
    rating: 4.7,
  },
];

export function FeaturedDesertsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 bg-gradient-to-b from-background to-[#F2E6C9] dark:from-background dark:to-[#1A2F3D] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(216, 179, 106, 0.1) 50px, rgba(216, 179, 106, 0.1) 51px),
              repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(216, 179, 106, 0.1) 50px, rgba(216, 179, 106, 0.1) 51px)
            `,
          }}
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
            <MapPin className="w-5 h-5 text-[#D8B36A]" />
            <span className="text-sm font-semibold tracking-wider uppercase">Featured Destinations</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 brand-text bg-gradient-to-r from-[#4A3B2A] via-[#D8B36A] to-[#4A3B2A] bg-clip-text text-transparent">
            Egypt's Desert Wonders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the diverse landscapes that define Egypt's desert identity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {deserts.map((desert, index) => (
            <motion.div
              key={desert.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onMouseEnter={() => setHoveredCard(desert.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Link to={`/desert/${desert.id}`}>
                <div className="group relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      scale: hoveredCard === desert.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <img
                      src={desert.image}
                      alt={desert.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                  <motion.div
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                    animate={{
                      y: hoveredCard === desert.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm">
                        {desert.region}
                      </span>
                      <span className="px-4 py-1.5 bg-[#D8B36A]/20 backdrop-blur-md border border-[#D8B36A]/30 rounded-full text-white text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" />
                        {desert.difficulty}
                      </span>
                      <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {desert.rating}
                      </span>
                    </div>

                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 brand-text">
                      {desert.name}
                    </h3>

                    <p className="text-xl text-[#D8B36A] mb-4 italic">
                      {desert.tagline}
                    </p>

                    <p className="text-white/80 text-lg mb-6 leading-relaxed">
                      {desert.description}
                    </p>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: hoveredCard === desert.id ? 1 : 0,
                        height: hoveredCard === desert.id ? "auto" : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        {desert.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-2 text-white/70 text-sm"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D8B36A]" />
                            {highlight}
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white/60 text-sm">
                          Best: {desert.bestTime}
                        </span>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-2 text-[#D8B36A] font-semibold"
                        >
                          Explore
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 border-2 border-[#D8B36A] rounded-3xl"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredCard === desert.id ? 1 : 0,
                    }}
                    style={{
                      boxShadow: "0 0 40px rgba(216, 179, 106, 0.4)",
                    }}
                  />
                </div>
              </Link>
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
            to="/explore"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#D8B36A] to-[#C17C54] text-white rounded-full hover:scale-105 transition-transform shadow-xl font-semibold text-lg"
          >
            View All Desert Locations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
