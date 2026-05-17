import { useState } from "react";
import { motion } from "motion/react";
import { Search, Filter, SlidersHorizontal, MapPin } from "lucide-react";
import { HotelCard } from "./HotelCard";

export function HotelsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  // Mock hotel data - would come from backend
  const hotels = [
    {
      id: "1",
      name: "White Desert Eco-Lodge",
      type: "Eco-lodge" as const,
      images: [
        "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800",
      ],
      stars: 5,
      pricePerNight: 320,
      location: "White Desert, Farafra Oasis",
      reviews: 127,
      rating: 4.9,
      amenities: ["WiFi", "Restaurant", "Transport", "Desert Tours", "Star Gazing"],
      capacity: 4,
      availability: true,
      nearbyAttractions: ["Crystal Mountain", "Black Desert", "Mushroom Rock Formation"],
    },
    {
      id: "2",
      name: "Bedouin Luxury Camp",
      type: "Desert camp" as const,
      images: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
        "https://images.unsplash.com/photo-1537726235470-8504e3beef77?w=800",
      ],
      stars: 4,
      pricePerNight: 180,
      location: "Sinai Desert",
      reviews: 89,
      rating: 4.7,
      amenities: ["Traditional Meals", "Campfire", "Transport", "Bedouin Experience"],
      capacity: 6,
      availability: true,
      nearbyAttractions: ["Mount Sinai", "Saint Catherine Monastery"],
    },
    {
      id: "3",
      name: "Siwa Oasis Resort",
      type: "Luxury hotel" as const,
      images: [
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
      ],
      stars: 5,
      pricePerNight: 450,
      location: "Siwa Oasis",
      reviews: 203,
      rating: 4.8,
      amenities: ["WiFi", "Restaurant", "Pool", "Spa", "Transport", "Tours"],
      capacity: 8,
      availability: true,
      nearbyAttractions: ["Cleopatra's Spring", "Shali Fortress", "Great Sand Sea"],
    },
    {
      id: "4",
      name: "Bahariya Desert Lodge",
      type: "Eco-lodge" as const,
      images: [
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=800",
      ],
      stars: 4,
      pricePerNight: 210,
      location: "Bahariya Oasis",
      reviews: 64,
      rating: 4.6,
      amenities: ["Restaurant", "Transport", "Desert Safari", "Hot Springs"],
      capacity: 4,
      availability: false,
      nearbyAttractions: ["Black Desert", "White Desert", "Crystal Mountain"],
    },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType === "all" || hotel.type === selectedType;
    const matchesPrice =
      hotel.pricePerNight >= priceRange[0] && hotel.pricePerNight <= priceRange[1];
    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black">
      {/* Hero Section */}
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"
          alt="Desert Hotels"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            Desert <span className="text-[#D4A574]">Stays</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl"
          >
            Discover unique accommodations from luxury eco-lodges to authentic Bedouin camps
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search hotels or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/30 text-white pl-12 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors appearance-none cursor-pointer"
            >
              <option value="all">All Types</option>
              <option value="Eco-lodge">Eco-lodge</option>
              <option value="Desert camp">Desert camp</option>
              <option value="Luxury hotel">Luxury hotel</option>
            </select>

            {/* Price Range */}
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="w-5 h-5 text-gray-400" />
              <div className="flex-1">
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[#D4A574]"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-1">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}+</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-4 text-gray-400 text-sm">
            <Filter className="w-4 h-4" />
            <span>Showing {filteredHotels.length} of {hotels.length} properties</span>
          </div>
        </motion.div>

        {/* Hotels Grid */}
        {filteredHotels.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">No hotels found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Map View Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <button className="bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform inline-flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            View on Interactive Map
          </button>
        </motion.div>
      </div>
    </div>
  );
}
