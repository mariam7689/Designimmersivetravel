import { useState } from "react";
import { MapPin, Star, Filter } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const deserts = [
  {
    id: 1,
    name: "White Desert",
    region: "Western Desert",
    difficulty: "Moderate",
    mood: "Peace",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    description: "Surreal chalk rock formations resembling mushrooms and icebergs",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Black Desert",
    region: "Western Desert",
    difficulty: "Easy",
    mood: "Adventure",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    description: "Volcanic mountains covered in black powder and rocks",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Siwa Oasis",
    region: "Western Desert",
    difficulty: "Easy",
    mood: "Spiritual",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    description: "Ancient oasis with salt lakes and historic temples",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Sinai Mountains",
    region: "Sinai",
    difficulty: "Hard",
    mood: "Adventure",
    image: "https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=800&q=80",
    description: "Sacred mountains with breathtaking sunrise views",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Wadi El Rayan",
    region: "Fayoum",
    difficulty: "Easy",
    mood: "Peace",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80",
    description: "Desert waterfalls and pristine lakes",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Bahariya Oasis",
    region: "Western Desert",
    difficulty: "Moderate",
    mood: "Luxury",
    image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=800&q=80",
    description: "Hot springs and palm groves in the desert",
    rating: 4.5,
  },
];

const regions = ["All", "Western Desert", "Sinai", "Fayoum"];
const difficulties = ["All", "Easy", "Moderate", "Hard"];
const moodOptions = ["All", "Adventure", "Peace", "Luxury", "Spiritual"];

export function ExplorePage() {
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [selectedMood, setSelectedMood] = useState("All");

  const filteredDeserts = deserts.filter((desert) => {
    const regionMatch = selectedRegion === "All" || desert.region === selectedRegion;
    const difficultyMatch = selectedDifficulty === "All" || desert.difficulty === selectedDifficulty;
    const moodMatch = selectedMood === "All" || desert.mood === selectedMood;
    return regionMatch && difficultyMatch && moodMatch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Explore Egypt's Deserts</h1>
          <p className="text-xl text-muted-foreground">
            Discover hidden gems and iconic landscapes across the desert
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 mb-12 shadow-lg border border-border"
        >
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-[var(--desert-gold)]" />
            <h2 className="text-xl font-semibold">Filter Deserts</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-[var(--desert-gold)]"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-[var(--desert-gold)]"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm mb-2 text-muted-foreground">Mood</label>
              <select
                value={selectedMood}
                onChange={(e) => setSelectedMood(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-[var(--desert-gold)]"
              >
                {moodOptions.map((mood) => (
                  <option key={mood} value={mood}>
                    {mood}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            Showing {filteredDeserts.length} desert{filteredDeserts.length !== 1 ? "s" : ""}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDeserts.map((desert, index) => (
            <motion.div
              key={desert.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link to={`/desert/${desert.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-card border border-border">
                  <div className="aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={desert.image}
                      alt={desert.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{desert.rating}</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{desert.region}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{desert.name}</h3>
                    <p className="text-muted-foreground mb-4">{desert.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm px-3 py-1 bg-muted rounded-full">{desert.difficulty}</span>
                      <span className="text-sm text-[var(--desert-gold)]">{desert.mood}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
