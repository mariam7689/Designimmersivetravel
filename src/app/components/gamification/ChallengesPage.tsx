import { motion } from "motion/react";
import { Trophy, Target, Zap, Map, Star, Camera, Footprints, Award, CheckCircle, Lock } from "lucide-react";
import { useState } from "react";

export function ChallengesPage() {
  const [activeTab, setActiveTab] = useState("active");

  const challenges = [
    {
      id: 1,
      title: "Discover Hidden Gem",
      description: "Visit and explore 3 hidden desert locations",
      icon: Map,
      xp: 500,
      progress: 2,
      total: 3,
      status: "active",
      color: "from-blue-500 to-cyan-500",
      reward: "Hidden Explorer Badge",
    },
    {
      id: 2,
      title: "Visit 3 Deserts Challenge",
      description: "Complete trips to White Desert, Sinai, and Siwa Oasis",
      icon: Footprints,
      xp: 1000,
      progress: 1,
      total: 3,
      status: "active",
      color: "from-purple-500 to-pink-500",
      reward: "Desert Wanderer Badge",
    },
    {
      id: 3,
      title: "Complete Safari Mission",
      description: "Book and complete a desert safari adventure",
      icon: Target,
      xp: 300,
      progress: 1,
      total: 1,
      status: "completed",
      color: "from-green-500 to-emerald-500",
      reward: "Safari Expert Badge",
    },
    {
      id: 4,
      title: "Stargazing Explorer",
      description: "Attend a stargazing experience in the desert",
      icon: Star,
      xp: 400,
      progress: 0,
      total: 1,
      status: "active",
      color: "from-yellow-500 to-orange-500",
      reward: "Stargazer Badge",
    },
    {
      id: 5,
      title: "Desert Photographer",
      description: "Share 10 photos from your desert adventures",
      icon: Camera,
      xp: 250,
      progress: 6,
      total: 10,
      status: "active",
      color: "from-pink-500 to-red-500",
      reward: "Photo Master Badge",
    },
    {
      id: 6,
      title: "Ultimate Explorer",
      description: "Complete all other challenges to unlock this legendary achievement",
      icon: Trophy,
      xp: 2000,
      progress: 0,
      total: 1,
      status: "locked",
      color: "from-amber-500 to-yellow-600",
      reward: "Legend of the Sands Badge",
    },
  ];

  const userStats = {
    totalXP: 2850,
    level: 14,
    nextLevelXP: 3000,
    completedChallenges: 8,
    activeChallenges: 4,
    badges: 12,
  };

  const badges = [
    { name: "Desert Pioneer", icon: "🏜️", earned: true },
    { name: "Safari Expert", icon: "🦁", earned: true },
    { name: "Stargazer", icon: "⭐", earned: true },
    { name: "Photo Master", icon: "📸", earned: false },
    { name: "Hidden Explorer", icon: "🗺️", earned: false },
    { name: "Desert Wanderer", icon: "🚶", earned: false },
    { name: "Camel Rider", icon: "🐪", earned: true },
    { name: "Oasis Finder", icon: "💧", earned: true },
  ];

  const filteredChallenges = challenges.filter((c) => {
    if (activeTab === "active") return c.status === "active";
    if (activeTab === "completed") return c.status === "completed";
    if (activeTab === "locked") return c.status === "locked";
    return true;
  });

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
            Challenges & <span className="text-[#D4A574]">Achievements</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete missions, earn XP, unlock badges, and become a legend of the desert
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#D4A574]/20 to-[#C17D4A]/20 backdrop-blur-md rounded-3xl border border-[#D4A574]/30 p-8 mb-12"
        >
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-[#D4A574] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{userStats.totalXP}</div>
              <div className="text-gray-300">Total XP</div>
            </div>

            <div className="text-center">
              <Trophy className="w-12 h-12 text-[#D4A574] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">Level {userStats.level}</div>
              <div className="text-gray-300">Current Level</div>
            </div>

            <div className="text-center">
              <Target className="w-12 h-12 text-[#D4A574] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{userStats.completedChallenges}</div>
              <div className="text-gray-300">Completed</div>
            </div>

            <div className="text-center">
              <Award className="w-12 h-12 text-[#D4A574] mx-auto mb-3" />
              <div className="text-4xl font-bold text-white mb-2">{userStats.badges}</div>
              <div className="text-gray-300">Badges Earned</div>
            </div>
          </div>

          {/* Level Progress */}
          <div>
            <div className="flex justify-between text-sm text-gray-300 mb-2">
              <span>Level {userStats.level}</span>
              <span>Level {userStats.level + 1}</span>
            </div>
            <div className="h-4 bg-black/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#D4A574] to-[#C17D4A] rounded-full transition-all duration-1000"
                style={{ width: `${(userStats.totalXP / userStats.nextLevelXP) * 100}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-400 mt-1">
              {userStats.totalXP} / {userStats.nextLevelXP} XP
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {["all", "active", "completed", "locked"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-all ${
                activeTab === tab
                  ? "bg-[#D4A574] text-black"
                  : "bg-white/5 text-gray-300 hover:bg-white/10"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Challenges Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          {filteredChallenges.map((challenge, index) => {
            const Icon = challenge.icon;
            const progressPercent = (challenge.progress / challenge.total) * 100;
            const isLocked = challenge.status === "locked";
            const isCompleted = challenge.status === "completed";

            return (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`bg-gradient-to-br ${challenge.color} p-[2px] rounded-2xl ${
                  isLocked ? "opacity-60" : ""
                }`}
              >
                <div className="bg-gradient-to-br from-black/90 to-black/80 rounded-2xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${challenge.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {isLocked ? (
                        <Lock className="w-8 h-8 text-white" />
                      ) : (
                        <Icon className="w-8 h-8 text-white" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{challenge.title}</h3>
                      <p className="text-gray-300 text-sm">{challenge.description}</p>
                    </div>
                    {isCompleted && (
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    )}
                  </div>

                  {/* Progress Bar */}
                  {!isLocked && (
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-400 mb-2">
                        <span>Progress</span>
                        <span>
                          {challenge.progress} / {challenge.total}
                        </span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${challenge.color} rounded-full transition-all duration-500`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Rewards */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-[#D4A574]" />
                      <span className="text-white font-semibold">+{challenge.xp} XP</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Award className="w-4 h-4" />
                      <span>{challenge.reward}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Badges Collection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Badge Collection</h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {badges.map((badge, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border ${
                  badge.earned ? "border-[#D4A574]" : "border-white/10 opacity-40"
                } p-4 text-center transition-all hover:scale-105`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <div className="text-xs text-gray-300">{badge.name}</div>
                {badge.earned && (
                  <CheckCircle className="w-4 h-4 text-green-500 mx-auto mt-2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
