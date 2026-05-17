import { motion } from "motion/react";
import { MapPin, Star } from "lucide-react";
import { useState } from "react";

interface Location {
  id: string;
  name: string;
  x: number;
  y: number;
  type: "desert" | "oasis" | "landmark";
}

const locations: Location[] = [
  { id: "1", name: "White Desert", x: 35, y: 45, type: "desert" },
  { id: "2", name: "Siwa Oasis", x: 15, y: 30, type: "oasis" },
  { id: "3", name: "Black Desert", x: 40, y: 50, type: "desert" },
  { id: "4", name: "Bahariya", x: 42, y: 38, type: "oasis" },
  { id: "5", name: "Sinai", x: 75, y: 25, type: "landmark" },
];

export function InteractiveMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-[#F2E6C9] to-[#D8B36A] rounded-3xl overflow-hidden shadow-2xl">
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#4A3B2A" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {locations.map((location) => (
          <motion.div
            key={location.id}
            className="absolute cursor-pointer group"
            style={{ left: `${location.x}%`, top: `${location.y}%` }}
            onMouseEnter={() => setHoveredLocation(location.id)}
            onMouseLeave={() => setHoveredLocation(null)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: parseFloat(location.id) * 0.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: parseFloat(location.id) * 0.3,
              }}
            >
              <MapPin
                className={`w-8 h-8 ${
                  location.type === "desert"
                    ? "text-[#C17C54]"
                    : location.type === "oasis"
                    ? "text-[#6FA8DC]"
                    : "text-[#D8B36A]"
                }`}
                fill="currentColor"
              />
            </motion.div>

            <motion.div
              className="absolute -translate-x-1/2 top-8 whitespace-nowrap bg-[#4A3B2A] text-white px-4 py-2 rounded-lg shadow-xl"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: hoveredLocation === location.id ? 1 : 0,
                y: hoveredLocation === location.id ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-2">
                {location.type === "landmark" && <Star className="w-4 h-4 text-[#D8B36A]" />}
                <span className="text-sm font-semibold">{location.name}</span>
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-[#4A3B2A]"></div>
            </motion.div>

            <motion.div
              className="absolute -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-current opacity-0 group-hover:opacity-30"
              style={{
                borderColor:
                  location.type === "desert"
                    ? "#C17C54"
                    : location.type === "oasis"
                    ? "#6FA8DC"
                    : "#D8B36A",
              }}
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      <div className="absolute bottom-6 left-6 bg-white/90 dark:bg-[#4A3B2A]/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
        <h4 className="font-semibold mb-2 text-sm">Map Legend</h4>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#C17C54] rounded-full"></div>
            <span>Desert Locations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#6FA8DC] rounded-full"></div>
            <span>Oasis</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#D8B36A] rounded-full"></div>
            <span>Landmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
