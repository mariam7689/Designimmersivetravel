import { motion } from "motion/react";
import { Trophy, Gift, Star, Sparkles, Calendar, Users, Zap, Crown } from "lucide-react";

export function RewardsPage() {
  const userPoints = 2850;
  const currentTier = "Gold Explorer";
  const nextTier = "Platinum Wanderer";
  const pointsToNextTier = 650;

  const offers = [
    {
      title: "Book 2 Trips, Get Stargazing Free",
      description: "Complete two desert adventures and unlock a complimentary stargazing experience",
      icon: Star,
      type: "Active",
      validity: "Valid until Dec 31, 2026",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Invite Friends, Earn Desert Coins",
      description: "Get 500 points for every friend who books their first trip",
      icon: Users,
      type: "Ongoing",
      validity: "No expiration",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "First Trip Bonus",
      description: "500 bonus points on your first booking",
      icon: Zap,
      type: "Claimed",
      validity: "Redeemed on Jan 15, 2026",
      color: "from-gray-500 to-gray-600",
    },
    {
      title: "Seasonal Summer Discount",
      description: "20% off all desert camps during summer months",
      icon: Gift,
      type: "Active",
      validity: "Jun 1 - Aug 31, 2026",
      color: "from-red-500 to-pink-500",
    },
  ];

  const rewardTiers = [
    { name: "Sand Explorer", min: 0, max: 999, color: "#CD7F32", icon: "🏜️" },
    { name: "Bronze Nomad", min: 1000, max: 1999, color: "#CD7F32", icon: "🥉" },
    { name: "Silver Adventurer", min: 2000, max: 2999, color: "#C0C0C0", icon: "🥈" },
    { name: "Gold Explorer", min: 3000, max: 4999, color: "#FFD700", icon: "🥇" },
    { name: "Platinum Wanderer", min: 5000, max: 9999, color: "#E5E4E2", icon: "💎" },
    { name: "Diamond Legend", min: 10000, max: Infinity, color: "#B9F2FF", icon: "👑" },
  ];

  const redeemableRewards = [
    { name: "Free Desert Tour", points: 1000, image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400" },
    { name: "$50 Hotel Discount", points: 800, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400" },
    { name: "Camel Ride Experience", points: 500, image: "https://images.unsplash.com/photo-1583219905939-b73e68f87455?w=400" },
    { name: "Bedouin Dinner", points: 600, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400" },
    { name: "Desertia Merchandise", points: 400, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400" },
    { name: "Photography Session", points: 700, image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Rewards & <span className="text-[#D4A574]">Bonuses</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Earn points, unlock exclusive experiences, and get rewarded for your adventures
          </p>
        </motion.div>

        {/* Points Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#D4A574]/20 to-[#C17D4A]/20 backdrop-blur-md rounded-3xl border border-[#D4A574]/30 p-8 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Trophy className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
              <div className="text-5xl font-bold text-white mb-2">{userPoints}</div>
              <div className="text-gray-300">Total Points</div>
            </div>

            <div className="text-center">
              <Crown className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#D4A574] mb-2">{currentTier}</div>
              <div className="text-gray-300">Current Tier</div>
            </div>

            <div className="text-center">
              <Sparkles className="w-16 h-16 text-[#D4A574] mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">{pointsToNextTier}</div>
              <div className="text-gray-300">Points to {nextTier}</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>{currentTier}</span>
              <span>{nextTier}</span>
            </div>
            <div className="h-3 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4A574] to-[#C17D4A] rounded-full transition-all duration-1000"
                style={{ width: `${(userPoints % 2000) / 20}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Active Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Active Offers & Bonuses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${offer.color} p-[1px] rounded-2xl`}
                >
                  <div className="bg-gradient-to-br from-black/90 to-black/80 rounded-2xl p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${offer.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-xl font-bold text-white">{offer.title}</h3>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              offer.type === "Active"
                                ? "bg-green-500/20 text-green-400"
                                : offer.type === "Claimed"
                                ? "bg-gray-500/20 text-gray-400"
                                : "bg-blue-500/20 text-blue-400"
                            }`}
                          >
                            {offer.type}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-3">{offer.description}</p>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{offer.validity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Redeemable Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Redeem Your Points</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {redeemableRewards.map((reward, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-[#D4A574]/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4A574]/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={reward.image}
                    alt={reward.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-[#D4A574] text-black px-3 py-1 rounded-full font-bold text-sm">
                    {reward.points} pts
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-4">{reward.name}</h3>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all ${
                      userPoints >= reward.points
                        ? "bg-[#D4A574] text-black hover:bg-[#C17D4A]"
                        : "bg-gray-600 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={userPoints < reward.points}
                  >
                    {userPoints >= reward.points ? "Redeem Now" : `Need ${reward.points - userPoints} more`}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reward Tiers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Membership Tiers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {rewardTiers.map((tier, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border-2 p-6 text-center ${
                  tier.name === currentTier
                    ? "border-[#D4A574] shadow-2xl shadow-[#D4A574]/30"
                    : "border-white/10"
                }`}
              >
                <div className="text-5xl mb-3">{tier.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-4">
                  {tier.min.toLocaleString()} - {tier.max === Infinity ? "∞" : tier.max.toLocaleString()} points
                </p>
                {tier.name === currentTier && (
                  <div className="bg-[#D4A574]/20 text-[#D4A574] px-4 py-2 rounded-full font-semibold inline-block">
                    Current Tier
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
