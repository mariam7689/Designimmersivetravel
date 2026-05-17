import { motion } from "motion/react";
import { CheckCircle, Calendar, Download, Mail, Home } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import confetti from "canvas-confetti";

export function PaymentSuccessPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4A574", "#C17D4A", "#FFD700"],
    });
  }, []);

  const bookingDetails = {
    confirmationNumber: "DSR-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    tripName: "White Desert Safari Adventure",
    hotelName: "White Desert Eco-Lodge",
    dates: "June 15-18, 2026",
    travelers: 2,
    totalPaid: 1330,
    rewardsEarned: 500,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/50"
          >
            <CheckCircle className="w-16 h-16 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Booking <span className="text-[#D4A574]">Confirmed!</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300"
          >
            Your desert adventure awaits!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8 mb-6"
        >
          {/* Confirmation Number */}
          <div className="text-center mb-8 pb-8 border-b border-white/10">
            <div className="text-gray-400 mb-2">Confirmation Number</div>
            <div className="text-3xl font-bold text-[#D4A574] tracking-wider">
              {bookingDetails.confirmationNumber}
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm text-gray-400 mb-1">Trip</h3>
              <p className="text-xl font-semibold text-white">{bookingDetails.tripName}</p>
            </div>

            <div>
              <h3 className="text-sm text-gray-400 mb-1">Accommodation</h3>
              <p className="text-lg text-white">{bookingDetails.hotelName}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Dates</h3>
                <div className="flex items-center gap-2 text-white">
                  <Calendar className="w-5 h-5 text-[#D4A574]" />
                  <span>{bookingDetails.dates}</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-1">Travelers</h3>
                <p className="text-white">{bookingDetails.travelers} people</p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Total Paid</span>
                <span className="text-2xl font-bold text-[#D4A574]">
                  ${bookingDetails.totalPaid}
                </span>
              </div>

              <div className="bg-gradient-to-r from-[#D4A574]/20 to-[#C17D4A]/20 rounded-xl p-4 border border-[#D4A574]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold mb-1">Rewards Earned!</p>
                    <p className="text-gray-300 text-sm">Added to your account</p>
                  </div>
                  <div className="text-2xl font-bold text-[#D4A574]">
                    +{bookingDetails.rewardsEarned} pts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          <button className="flex items-center justify-center gap-2 bg-[#D4A574]/20 hover:bg-[#D4A574]/30 text-[#D4A574] py-4 rounded-xl font-semibold transition-colors">
            <Download className="w-5 h-5" />
            Download Receipt
          </button>

          <button className="flex items-center justify-center gap-2 bg-[#D4A574]/20 hover:bg-[#D4A574]/30 text-[#D4A574] py-4 rounded-xl font-semibold transition-colors">
            <Mail className="w-5 h-5" />
            Email Confirmation
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="flex items-center justify-center gap-2 bg-[#D4A574]/20 hover:bg-[#D4A574]/30 text-[#D4A574] py-4 rounded-xl font-semibold transition-colors"
          >
            <Calendar className="w-5 h-5" />
            View My Trips
          </button>
        </motion.div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
        >
          <h2 className="text-xl font-bold text-white mb-4">What's Next?</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span>A confirmation email has been sent to your inbox</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span>Your booking details are saved in your profile</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span>We'll send you trip reminders and updates</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
              <span>You can view and modify your booking anytime</span>
            </li>
          </ul>
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </button>
        </motion.div>
      </div>
    </div>
  );
}
