import { Star, MapPin, Wifi, Coffee, Wind, CheckCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stays = [
  {
    id: 1,
    name: "White Desert Luxury Camp",
    type: "Luxury Camp",
    location: "White Desert",
    price: 250,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1518602164578-cd0074062767?w=800&q=80",
    amenities: ["Gourmet meals", "Private tents", "Hot showers", "Wifi"],
    verified: true,
    eco: true,
  },
  {
    id: 2,
    name: "Siwa Oasis Eco Lodge",
    type: "Eco Lodge",
    location: "Siwa Oasis",
    price: 120,
    rating: 4.8,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    amenities: ["Organic food", "Natural springs", "Yoga classes", "Local guides"],
    verified: true,
    eco: true,
  },
  {
    id: 3,
    name: "Bedouin Desert Experience",
    type: "Traditional Camp",
    location: "Sinai Desert",
    price: 60,
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80",
    amenities: ["Traditional meals", "Bedouin tent", "Campfire", "Stargazing"],
    verified: true,
    eco: false,
  },
  {
    id: 4,
    name: "Black Desert Boutique Hotel",
    type: "Hotel",
    location: "Black Desert",
    price: 180,
    rating: 4.6,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    amenities: ["AC rooms", "Restaurant", "Pool", "Spa"],
    verified: true,
    eco: false,
  },
  {
    id: 5,
    name: "Bahariya Oasis Retreat",
    type: "Eco Lodge",
    location: "Bahariya Oasis",
    price: 95,
    rating: 4.5,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    amenities: ["Hot springs", "Garden", "Local cuisine", "Bicycle rental"],
    verified: false,
    eco: true,
  },
  {
    id: 6,
    name: "Fayoum Desert Glamping",
    type: "Luxury Camp",
    location: "Wadi El Rayan",
    price: 210,
    rating: 4.8,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    amenities: ["King beds", "Private bathroom", "Chef service", "Adventure tours"],
    verified: true,
    eco: true,
  },
];

const typeFilters = ["All", "Luxury Camp", "Eco Lodge", "Traditional Camp", "Hotel"];

export function StaysPage() {
  const [selectedType, setSelectedType] = useState("All");

  const filteredStays = selectedType === "All"
    ? stays
    : stays.filter(stay => stay.type === selectedType);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Desert Stays</h1>
          <p className="text-xl text-muted-foreground">
            From luxury camps to traditional Bedouin experiences
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {typeFilters.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedType === type
                  ? "bg-[var(--desert-gold)] text-[var(--dark-brown)]"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {type}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStays.map((stay, index) => (
            <motion.div
              key={stay.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={stay.image}
                  alt={stay.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {stay.verified && (
                    <span className="px-3 py-1 bg-green-500 text-white text-xs rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Verified
                    </span>
                  )}
                  {stay.eco && (
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs rounded-full">
                      Eco-Friendly
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-bold text-[var(--dark-brown)] dark:text-[var(--desert-gold)]">
                    ${stay.price}
                  </span>
                  <span className="text-xs text-muted-foreground">/night</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{stay.location}</span>
                </div>

                <h3 className="text-xl font-bold mb-1">{stay.name}</h3>
                <p className="text-sm text-[var(--desert-gold)] mb-3">{stay.type}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{stay.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({stay.reviews} reviews)
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {stay.amenities.slice(0, 3).map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--desert-gold)]"></div>
                      {amenity}
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
