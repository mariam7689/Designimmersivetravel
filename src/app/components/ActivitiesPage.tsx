import { Link } from "react-router";
import { Clock, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const activities = [
  {
    id: 1,
    name: "4x4 Desert Safari",
    duration: "4-6 hours",
    price: 80,
    difficulty: "Easy",
    description: "Experience the thrill of dune bashing and explore remote desert landscapes",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    category: "Adventure",
  },
  {
    id: 2,
    name: "Overnight Camping",
    duration: "Overnight",
    price: 120,
    difficulty: "Easy",
    description: "Sleep under a blanket of stars with traditional Bedouin hospitality",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    category: "Experience",
  },
  {
    id: 3,
    name: "Stargazing Tour",
    duration: "3 hours",
    price: 45,
    difficulty: "Easy",
    description: "Witness the Milky Way and learn about desert constellations",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    category: "Experience",
  },
  {
    id: 4,
    name: "Mountain Hiking",
    duration: "5-7 hours",
    price: 60,
    difficulty: "Hard",
    description: "Summit sacred peaks and enjoy panoramic desert views",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    category: "Adventure",
  },
  {
    id: 5,
    name: "Sandboarding",
    duration: "2 hours",
    price: 35,
    difficulty: "Moderate",
    description: "Surf down massive sand dunes for an adrenaline rush",
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&q=80",
    category: "Adventure",
  },
  {
    id: 6,
    name: "Camel Trekking",
    duration: "3-4 hours",
    price: 50,
    difficulty: "Easy",
    description: "Journey through the desert the traditional way",
    image: "https://images.unsplash.com/photo-1580837119756-563d608dd119?w=800&q=80",
    category: "Cultural",
  },
  {
    id: 7,
    name: "Hot Air Balloon",
    duration: "2 hours",
    price: 200,
    difficulty: "Easy",
    description: "Soar above the desert at sunrise for breathtaking views",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    category: "Luxury",
  },
  {
    id: 8,
    name: "Bedouin Cultural Experience",
    duration: "Half day",
    price: 70,
    difficulty: "Easy",
    description: "Learn traditional crafts, cooking, and desert survival skills",
    image: "https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=800&q=80",
    category: "Cultural",
  },
  {
    id: 9,
    name: "Photography Workshop",
    duration: "Full day",
    price: 150,
    difficulty: "Moderate",
    description: "Capture stunning desert landscapes with professional guidance",
    image: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=800&q=80",
    category: "Experience",
  },
];

const difficultyColors = {
  Easy: "bg-green-500",
  Moderate: "bg-yellow-500",
  Hard: "bg-red-500",
};

export function ActivitiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Desert Activities</h1>
          <p className="text-xl text-muted-foreground">
            Adventure, culture, and unforgettable experiences await
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <ImageWithFallback
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/70 backdrop-blur-sm text-xs rounded-full">
                    {activity.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{activity.name}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{activity.description}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[var(--desert-gold)]" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-[var(--desert-gold)]" />
                      <span className="font-semibold">${activity.price}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-[var(--desert-gold)]" />
                      <span>Difficulty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${difficultyColors[activity.difficulty as keyof typeof difficultyColors]}`}></div>
                      <span className="text-sm font-semibold">{activity.difficulty}</span>
                    </div>
                  </div>
                </div>

                <Link to="/checkout" className="block text-center w-full py-3 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform font-medium shadow-md">
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-[var(--sand-beige)] to-[var(--desert-gold)] dark:from-[var(--muted)] dark:to-[var(--card)] rounded-3xl p-12 text-center shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-4">Create Your Custom Adventure</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Combine multiple activities and create a personalized desert experience tailored to your interests
          </p>
          <button className="px-8 py-4 bg-[var(--dark-brown)] text-white rounded-full hover:scale-105 transition-transform">
            Build Custom Package
          </button>
        </motion.div>
      </div>
    </div>
  );
}
