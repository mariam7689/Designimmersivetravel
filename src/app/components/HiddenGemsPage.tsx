import { motion } from "motion/react";
import { MapPin, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const gems = [
  {
    id: 1,
    title: "The Crystal Mountain",
    location: "Farafra, Western Desert",
    story: "A small mountain made entirely of calcite crystals that sparkle in the desert sun. Local Bedouins consider it sacred and believe it brings good fortune to travelers who touch its surface.",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1200&q=80",
    quote: "The desert shows you beauty in the smallest details",
  },
  {
    id: 2,
    title: "The Silent Monastery",
    location: "Wadi El Natrun",
    story: "An ancient Coptic monastery hidden among salt lakes, where monks have lived in solitude for over 1,500 years. The silence here is profound, broken only by the wind and evening prayers.",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1200&q=80",
    quote: "In silence, the desert speaks",
  },
  {
    id: 3,
    title: "Star Dunes of the Great Sand Sea",
    location: "Western Desert",
    story: "Massive star-shaped dunes that can reach 100 meters high. Bedouin guides say these dunes have been standing in the same place for thousands of years, shaped by winds from all directions.",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1200&q=80",
    quote: "Time moves differently in the dunes",
  },
  {
    id: 4,
    title: "The Whispering Valley",
    location: "Sinai Peninsula",
    story: "A narrow canyon where the wind creates haunting melodies through eroded rock formations. Ancient travelers believed spirits lived here, but it's simply nature's perfect acoustics.",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=1200&q=80",
    quote: "Listen closely, the rocks have stories",
  },
  {
    id: 5,
    title: "Cleopatra's Spring",
    location: "Siwa Oasis",
    story: "A natural spring where legend says Cleopatra herself once bathed. The water bubbles up from deep underground, crystal clear and pleasantly warm year-round.",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&q=80",
    quote: "Ancient waters, timeless beauty",
  },
];

export function HiddenGemsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Hidden Gems</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the secret treasures of Egypt's deserts, each with its own story waiting to be told
          </p>
        </motion.div>

        <div className="space-y-24">
          {gems.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
            >
              <div className="flex-1 relative group">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3]">
                    <ImageWithFallback
                      src={gem.image}
                      alt={gem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg italic font-light">"{gem.quote}"</p>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-2 text-[var(--desert-gold)]">
                  <MapPin className="w-5 h-5" />
                  <span className="text-sm">{gem.location}</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold">{gem.title}</h2>

                <p className="text-lg text-muted-foreground leading-relaxed">{gem.story}</p>

                <button className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-[var(--desert-gold)] text-[var(--desert-gold)] rounded-full hover:bg-[var(--desert-gold)] hover:text-[var(--dark-brown)] transition-all">
                  <Heart className="w-5 h-5 group-hover:fill-current transition-all" />
                  Add to Wishlist
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-[var(--sand-beige)] to-[var(--desert-gold)] dark:from-[var(--muted)] dark:to-[var(--card)] rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Know a hidden gem?</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Share your secret desert spot and help other travelers discover the magic
            </p>
            <button className="px-8 py-4 bg-[var(--dark-brown)] text-white rounded-full hover:scale-105 transition-transform">
              Submit Your Discovery
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
