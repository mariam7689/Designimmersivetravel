import { MapPin, Calendar, TrendingUp, Star, Camera, Sunrise, Moon, Package } from "lucide-react";
import { motion } from "motion/react";
import { useParams } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const desertData: Record<string, any> = {
  "white-desert": {
    name: "White Desert",
    region: "Western Desert",
    difficulty: "Moderate",
    rating: 4.9,
    description: "The White Desert is a national park featuring otherworldly white chalk rock formations that have been sculpted by wind and sand over millennia. These surreal structures resemble mushrooms, icebergs, and abstract sculptures.",
    bestTime: ["October - April"],
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=1920&q=80",
    highlights: [
      "Mushroom Rock Formation",
      "Chicken and Mushroom Rocks",
      "Crystal Mountain",
      "Chalk formations",
    ],
    activities: [
      { name: "4x4 Safari", price: 80, duration: "4-6 hours" },
      { name: "Camping", price: 120, duration: "Overnight" },
      { name: "Stargazing", price: 45, duration: "3 hours" },
    ],
    stays: [
      { name: "White Desert Luxury Camp", type: "Luxury Camp", price: 250 },
      { name: "Desert Explorer Camp", type: "Standard Camp", price: 120 },
    ],
    whatToPack: [
      "Warm layers for cold nights",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Comfortable walking shoes",
      "Camera equipment",
      "Flashlight",
      "Reusable water bottle",
    ],
  },
  "black-desert": {
    name: "Black Desert",
    region: "Western Desert",
    difficulty: "Easy",
    rating: 4.7,
    description: "The Black Desert is named for the volcanic-like black rocks and powder that cover its mountains and dunes. It offers a stark contrast to the surrounding golden sands.",
    bestTime: ["October - May"],
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=1920&q=80",
    highlights: [
      "Black volcanic hills",
      "Panoramic viewpoints",
      "Ancient petrified forests",
      "Unique rock formations",
    ],
    activities: [
      { name: "Hiking", price: 60, duration: "3-4 hours" },
      { name: "Photography Tour", price: 100, duration: "Half day" },
      { name: "Sandboarding", price: 35, duration: "2 hours" },
    ],
    stays: [
      { name: "Black Desert Boutique Hotel", type: "Hotel", price: 180 },
      { name: "Desert View Camp", type: "Camp", price: 90 },
    ],
    whatToPack: [
      "Hiking boots",
      "Sun protection",
      "Light jacket",
      "Camera with extra batteries",
      "Snacks and water",
      "Backpack",
    ],
  },
};

export function DesertDetailsPage() {
  const { id } = useParams();
  const desert = id ? desertData[id] : null;

  if (!desert) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Desert Not Found</h1>
          <p className="text-muted-foreground">The desert you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-[70vh] overflow-hidden">
        <ImageWithFallback
          src={desert.image}
          alt={desert.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-0 right-0 p-8 md:p-16 text-white"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{desert.region}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">{desert.name}</h1>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-xl">{desert.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>{desert.difficulty}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold mb-4">About</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{desert.description}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold mb-6">Highlights</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {desert.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-[var(--desert-gold)]"></div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-6">Activities</h2>
              <div className="space-y-4">
                {desert.activities.map((activity: any, index: number) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold">{activity.name}</h3>
                      <span className="text-xl font-bold text-[var(--desert-gold)]">${activity.price}</span>
                    </div>
                    <p className="text-muted-foreground">{activity.duration}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold mb-6">Nearby Stays</h2>
              <div className="space-y-4">
                {desert.stays.map((stay: any, index: number) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold">{stay.name}</h3>
                        <p className="text-sm text-muted-foreground">{stay.type}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-[var(--desert-gold)]">${stay.price}</div>
                        <div className="text-xs text-muted-foreground">per night</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[var(--sand-beige)] to-[var(--desert-gold)] dark:from-[var(--muted)] dark:to-[var(--card)] rounded-2xl p-6 sticky top-24"
            >
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-5 h-5 text-[var(--dark-brown)] dark:text-[var(--desert-gold)]" />
                    <h3 className="font-semibold">Best Time to Visit</h3>
                  </div>
                  {desert.bestTime.map((time: string, index: number) => (
                    <p key={index} className="text-sm">{time}</p>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Camera className="w-5 h-5 text-[var(--dark-brown)] dark:text-[var(--desert-gold)]" />
                    <h3 className="font-semibold">Photo Spots</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Sunrise className="w-4 h-4" />
                      <span>Sunrise: 6:00 AM</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Moon className="w-4 h-4" />
                      <span>Sunset: 6:30 PM</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="w-5 h-5 text-[var(--dark-brown)] dark:text-[var(--desert-gold)]" />
                    <h3 className="font-semibold">What to Pack</h3>
                  </div>
                  <ul className="space-y-2 text-sm">
                    {desert.whatToPack.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--dark-brown)] dark:bg-[var(--desert-gold)] mt-1.5"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full py-3 bg-[var(--dark-brown)] text-white rounded-xl hover:scale-105 transition-transform">
                  Add to Trip Planner
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
