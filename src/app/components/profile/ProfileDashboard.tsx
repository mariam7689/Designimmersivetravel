import { useState } from "react";
import { motion } from "motion/react";
import { User, MapPin, Bookmark, History, Trophy, Gift, Star, Calendar, Plane, Bell, Edit, LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export function ProfileDashboard() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  // Mock user data - this would come from backend in production
  const userData = {
    name: "Sarah Anderson",
    email: "sarah@example.com",
    country: "United States",
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    memberSince: "January 2025",
    rewardsPoints: 2850,
    level: "Gold Explorer",
    savedTrips: 5,
    completedTrips: 3,
    upcomingTrips: 2,
    reviews: 8,
    badges: ["Desert Pioneer", "Safari Expert", "Stargazer"]
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: User },
    { id: "trips", label: "My Trips", icon: Calendar },
    { id: "bookings", label: "Bookings", icon: History },
    { id: "saved", label: "Saved", icon: Bookmark },
    { id: "rewards", label: "Rewards", icon: Trophy },
    { id: "reviews", label: "Reviews", icon: Star },
  ];

  const handleLogout = () => {
    // Clear session and redirect to login
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-[#D4A574]/10 to-[#C17D4A]/10 backdrop-blur-md rounded-3xl border border-[#D4A574]/20 p-8 mb-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="relative">
              <img
                src={userData.profileImage}
                alt={userData.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-[#D4A574]"
              />
              <button className="absolute bottom-0 right-0 bg-[#D4A574] p-2 rounded-full hover:bg-[#C17D4A] transition-colors">
                <Edit className="w-4 h-4 text-black" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl font-bold text-[#D4A574] mb-2">{userData.name}</h1>
              <p className="text-gray-400 mb-1">{userData.email}</p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-300 mb-4">
                <MapPin className="w-4 h-4" />
                <span>{userData.country}</span>
                <span className="mx-2">•</span>
                <span>Member since {userData.memberSince}</span>
              </div>
              <div className="inline-block bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black px-6 py-2 rounded-full font-semibold">
                {userData.level}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => navigate("/profile/edit")}
                className="flex items-center gap-2 bg-[#D4A574]/20 hover:bg-[#D4A574]/30 px-6 py-3 rounded-xl transition-colors"
              >
                <Edit className="w-5 h-5" />
                Edit Profile
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500/20 hover:bg-red-500/30 px-6 py-3 rounded-xl transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-black/30 rounded-xl p-4 text-center">
              <Trophy className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userData.rewardsPoints}</div>
              <div className="text-sm text-gray-400">Reward Points</div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 text-center">
              <Calendar className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userData.completedTrips}</div>
              <div className="text-sm text-gray-400">Completed Trips</div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 text-center">
              <Bookmark className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userData.savedTrips}</div>
              <div className="text-sm text-gray-400">Saved Trips</div>
            </div>
            <div className="bg-black/30 rounded-xl p-4 text-center">
              <Star className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{userData.reviews}</div>
              <div className="text-sm text-gray-400">Reviews</div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${
                  activeTab === tab.id
                    ? "bg-[#D4A574] text-black font-semibold"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8"
        >
          {activeTab === "overview" && <OverviewTab userData={userData} />}
          {activeTab === "trips" && <TripsTab />}
          {activeTab === "bookings" && <BookingsTab />}
          {activeTab === "saved" && <SavedTab />}
          {activeTab === "rewards" && <RewardsTab points={userData.rewardsPoints} />}
          {activeTab === "reviews" && <ReviewsTab />}
        </motion.div>
      </div>
    </div>
  );
}

function OverviewTab({ userData }: { userData: any }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">Account Overview</h2>

      {/* Upcoming Trips */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Upcoming Trips</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#C17D4A]/10 rounded-xl p-6 border border-[#D4A574]/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-white">White Desert Safari</h4>
                <p className="text-gray-400 text-sm">June 15-18, 2026</p>
              </div>
              <Calendar className="w-6 h-6 text-[#D4A574]" />
            </div>
            <p className="text-gray-300 text-sm mb-4">3 days, 2 nights • 4 activities included</p>
            <button className="w-full bg-[#D4A574] text-black py-2 rounded-lg font-semibold hover:bg-[#C17D4A] transition-colors">
              View Details
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#D4A574]/10 to-[#C17D4A]/10 rounded-xl p-6 border border-[#D4A574]/20">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-semibold text-white">Sinai Stargazing Experience</h4>
                <p className="text-gray-400 text-sm">July 22-24, 2026</p>
              </div>
              <Calendar className="w-6 h-6 text-[#D4A574]" />
            </div>
            <p className="text-gray-300 text-sm mb-4">2 days, 1 night • Bedouin camp stay</p>
            <button className="w-full bg-[#D4A574] text-black py-2 rounded-lg font-semibold hover:bg-[#C17D4A] transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Desert Badges */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Desert Badges</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {userData.badges.map((badge: string, index: number) => (
            <div key={index} className="bg-gradient-to-br from-[#D4A574]/20 to-[#C17D4A]/20 rounded-xl p-4 text-center border border-[#D4A574]/30">
              <Trophy className="w-8 h-8 text-[#D4A574] mx-auto mb-2" />
              <p className="text-xs text-gray-300">{badge}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div>
        <h3 className="text-xl font-semibold text-white mb-4">Recent Notifications</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4">
            <Bell className="w-5 h-5 text-[#D4A574] mt-1" />
            <div>
              <p className="text-white font-semibold">New Bonus Offer!</p>
              <p className="text-gray-400 text-sm">Book 2 trips and get a stargazing experience free</p>
              <p className="text-gray-500 text-xs mt-1">2 days ago</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-black/30 rounded-xl p-4">
            <Gift className="w-5 h-5 text-[#D4A574] mt-1" />
            <div>
              <p className="text-white font-semibold">Reward Points Earned</p>
              <p className="text-gray-400 text-sm">You earned 500 points for completing your recent trip</p>
              <p className="text-gray-500 text-xs mt-1">5 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TripsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">My Trips</h2>
      <p className="text-gray-400">View all your past, current, and upcoming desert adventures.</p>
    </div>
  );
}

function BookingsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">Booking History</h2>
      <p className="text-gray-400">Track all your bookings and reservations.</p>
    </div>
  );
}

function SavedTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">Saved Items</h2>
      <p className="text-gray-400">Your wishlist of trips, stays, and activities.</p>
    </div>
  );
}

function RewardsTab({ points }: { points: number }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">Rewards & Bonuses</h2>
      <div className="bg-gradient-to-br from-[#D4A574]/20 to-[#C17D4A]/20 rounded-xl p-8 mb-6">
        <Trophy className="w-16 h-16 text-[#D4A574] mb-4" />
        <div className="text-4xl font-bold text-white mb-2">{points} Points</div>
        <p className="text-gray-300">Available reward points</p>
      </div>
      <p className="text-gray-400">Redeem your points for exclusive desert experiences and discounts.</p>
    </div>
  );
}

function ReviewsTab() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-[#D4A574] mb-6">My Reviews</h2>
      <p className="text-gray-400">Share your experiences and help other travelers.</p>
    </div>
  );
}
