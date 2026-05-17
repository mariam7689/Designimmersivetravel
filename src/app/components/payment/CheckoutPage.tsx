import { useState } from "react";
import { motion } from "motion/react";
import { CreditCard, Lock, Calendar, MapPin, Users, Tag, Gift, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router";

export function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const [promoCode, setPromoCode] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  // Mock booking data - would come from state/context in production
  const bookingData = {
    tripName: "White Desert Safari Adventure",
    hotelName: "White Desert Eco-Lodge",
    dates: "June 15-18, 2026",
    travelers: 2,
    nights: 3,
    basePrice: 960,
    activitiesPrice: 240,
    taxes: 180,
    discount: 0,
    rewardsDiscount: 50,
  };

  const total =
    bookingData.basePrice +
    bookingData.activitiesPrice +
    bookingData.taxes -
    bookingData.discount -
    bookingData.rewardsDiscount;

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      navigate("/payment/success");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2B2520] via-[#1a1410] to-black pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-white mb-2">
            Secure <span className="text-[#D4A574]">Checkout</span>
          </h1>
          <p className="text-gray-400">Complete your booking in just a few steps</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Payment Method</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "card"
                      ? "border-[#D4A574] bg-[#D4A574]/10"
                      : "border-white/10 bg-black/20"
                  }`}
                >
                  <CreditCard className="w-8 h-8 text-[#D4A574] mb-2" />
                  <div className="text-white font-semibold">Credit / Debit Card</div>
                  <div className="text-gray-400 text-sm">Visa, Mastercard</div>
                </button>

                <button
                  onClick={() => setPaymentMethod("paypal")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "paypal"
                      ? "border-[#D4A574] bg-[#D4A574]/10"
                      : "border-white/10 bg-black/20"
                  }`}
                >
                  <div className="w-8 h-8 bg-[#0070BA] rounded mb-2 flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div className="text-white font-semibold">PayPal</div>
                  <div className="text-gray-400 text-sm">Fast & Secure</div>
                </button>
              </div>
            </motion.div>

            {/* Card Details */}
            {paymentMethod === "card" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
              >
                <h2 className="text-2xl font-bold text-white mb-4">Card Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Card Number</label>
                    <div className="relative">
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full bg-black/30 text-white pl-12 pr-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 mb-2">Expiry Date</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">Cardholder Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Billing Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-bold text-white mb-4">Billing Address</h2>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Country"
                    className="bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  className="w-full bg-black/30 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                />
              </div>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>

              {/* Trip Details */}
              <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-semibold text-white mb-1">{bookingData.tripName}</h3>
                  <p className="text-sm text-gray-400">{bookingData.hotelName}</p>
                </div>

                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{bookingData.dates}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Users className="w-4 h-4" />
                  <span>{bookingData.travelers} travelers</span>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex justify-between text-gray-300">
                  <span>Accommodation ({bookingData.nights} nights)</span>
                  <span>${bookingData.basePrice}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Activities & Experiences</span>
                  <span>${bookingData.activitiesPrice}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Taxes & Fees</span>
                  <span>${bookingData.taxes}</span>
                </div>
                {bookingData.rewardsDiscount > 0 && (
                  <div className="flex justify-between text-[#D4A574]">
                    <span className="flex items-center gap-1">
                      <Gift className="w-4 h-4" />
                      Rewards Discount
                    </span>
                    <span>-${bookingData.rewardsDiscount}</span>
                  </div>
                )}
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-gray-300 mb-2">Promo Code</label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full bg-black/30 text-white pl-10 pr-4 py-2 rounded-lg border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <button className="bg-[#D4A574]/20 hover:bg-[#D4A574]/30 text-[#D4A574] px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Apply
                  </button>
                </div>
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-6 text-2xl font-bold">
                <span className="text-white">Total</span>
                <span className="text-[#D4A574]">${total}</span>
              </div>

              {/* Pay Button */}
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    Complete Payment
                  </>
                )}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 mt-4 text-gray-400 text-xs">
                <Lock className="w-3 h-3" />
                <span>Secure payment powered by Stripe</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
