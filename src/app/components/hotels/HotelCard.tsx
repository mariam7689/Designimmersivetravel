import { useState } from "react";
import { motion } from "motion/react";
import { Star, MapPin, Users, Wifi, Coffee, Car, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";

interface HotelCardProps {
  hotel: {
    id: string;
    name: string;
    type: "Eco-lodge" | "Desert camp" | "Luxury hotel";
    images: string[];
    stars: number;
    pricePerNight: number;
    location: string;
    reviews: number;
    rating: number;
    amenities: string[];
    capacity: number;
    availability: boolean;
    nearbyAttractions: string[];
  };
}

export function HotelCard({ hotel }: HotelCardProps) {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSaved, setIsSaved] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % hotel.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + hotel.images.length) % hotel.images.length);
  };

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const handleBookNow = () => {
    // Navigate to booking page with hotel data
    navigate(`/booking/hotel/${hotel.id}`);
  };

  const amenityIcons: Record<string, any> = {
    "WiFi": Wifi,
    "Restaurant": Coffee,
    "Transport": Car,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4A574]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A574]/20"
    >
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          key={currentImageIndex}
          src={hotel.images[currentImageIndex]}
          alt={hotel.name}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Image Navigation */}
        {hotel.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
              {hotel.images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? "bg-[#D4A574] w-6" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Type Badge */}
        <div className="absolute top-3 left-3 bg-[#D4A574] text-black px-3 py-1 rounded-full text-sm font-semibold">
          {hotel.type}
        </div>

        {/* Save Button */}
        <button
          onClick={toggleSave}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
        >
          <Heart
            className={`w-5 h-5 ${isSaved ? "fill-red-500 text-red-500" : "text-white"}`}
          />
        </button>

        {/* Availability Status */}
        {!hotel.availability && (
          <div className="absolute bottom-3 right-3 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Fully Booked
          </div>
        )}
      </div>

      {/* Hotel Info */}
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D4A574] transition-colors">
              {hotel.name}
            </h3>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{hotel.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(hotel.stars)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
            ))}
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 bg-[#D4A574]/20 px-3 py-1 rounded-full">
            <Star className="w-4 h-4 fill-[#D4A574] text-[#D4A574]" />
            <span className="text-white font-semibold">{hotel.rating}</span>
          </div>
          <span className="text-gray-400 text-sm">({hotel.reviews} reviews)</span>
          <div className="flex items-center gap-1 text-gray-400 text-sm ml-auto">
            <Users className="w-4 h-4" />
            <span>Up to {hotel.capacity} guests</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.slice(0, 3).map((amenity, index) => {
            const Icon = amenityIcons[amenity] || Coffee;
            return (
              <div
                key={index}
                className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full text-sm text-gray-300"
              >
                <Icon className="w-4 h-4" />
                <span>{amenity}</span>
              </div>
            );
          })}
          {hotel.amenities.length > 3 && (
            <div className="flex items-center px-3 py-1 rounded-full text-sm text-[#D4A574]">
              +{hotel.amenities.length - 3} more
            </div>
          )}
        </div>

        {/* Nearby Attractions */}
        {hotel.nearbyAttractions.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Nearby attractions:</p>
            <p className="text-sm text-gray-400">{hotel.nearbyAttractions.slice(0, 2).join(", ")}</p>
          </div>
        )}

        {/* Price & Book Button */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            <div className="text-sm text-gray-400">Starting from</div>
            <div className="text-2xl font-bold text-[#D4A574]">
              ${hotel.pricePerNight}
              <span className="text-sm text-gray-400 font-normal">/night</span>
            </div>
          </div>
          <button
            onClick={handleBookNow}
            disabled={!hotel.availability}
            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
              hotel.availability
                ? "bg-[#D4A574] text-black hover:bg-[#C17D4A] hover:scale-105"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            {hotel.availability ? "Book Now" : "Not Available"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
