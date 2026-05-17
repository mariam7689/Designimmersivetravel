import { motion } from "motion/react";
import { Plane, MapPin, CreditCard, Phone, Cloud, DollarSign, FileText, Map as MapIcon } from "lucide-react";

export function InternationalTravelersPage() {
  const sections = [
    {
      title: "How to Reach Egypt",
      icon: Plane,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Cairo International Airport (CAI) - Main hub for international flights",
        "Hurghada International Airport (HRG) - For Red Sea access",
        "Sharm El-Sheikh International Airport (SSH) - Sinai Peninsula gateway",
        "Direct flights available from major cities worldwide",
      ],
    },
    {
      title: "Visa Requirements",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      items: [
        "E-Visa available for most nationalities online",
        "Visa on arrival available at major airports ($25 USD)",
        "Tourist visa typically valid for 30 days",
        "Passport must be valid for at least 6 months",
      ],
    },
    {
      title: "Currency & Payments",
      icon: DollarSign,
      color: "from-green-500 to-emerald-500",
      items: [
        "Local currency: Egyptian Pound (EGP)",
        "ATMs widely available in cities",
        "Major credit cards accepted at hotels and restaurants",
        "USD and EUR can be exchanged at banks and exchange offices",
      ],
    },
    {
      title: "Local SIM Cards",
      icon: Phone,
      color: "from-orange-500 to-red-500",
      items: [
        "Available at airports and telecom shops",
        "Major providers: Vodafone, Orange, Etisalat",
        "Tourist packages starting from $10-20 USD",
        "4G/5G coverage in major cities and tourist areas",
      ],
    },
    {
      title: "Weather Guide",
      icon: Cloud,
      color: "from-yellow-500 to-amber-500",
      items: [
        "Best time: October to April (mild weather)",
        "Desert nights can be cold, bring layers",
        "Summer (May-Sep) very hot, especially in deserts",
        "Low rainfall year-round",
      ],
    },
    {
      title: "Transportation",
      icon: MapIcon,
      color: "from-teal-500 to-blue-500",
      items: [
        "Domestic flights connect major cities",
        "Private transfers included in our packages",
        "Uber and Careem available in cities",
        "Desert destinations require 4x4 vehicles",
      ],
    },
  ];

  const suggestedAirlines = [
    { name: "EgyptAir", logo: "✈️", route: "Major international carrier" },
    { name: "Emirates", logo: "🛫", route: "Via Dubai hub" },
    { name: "Turkish Airlines", logo: "🇹🇷", route: "Via Istanbul hub" },
    { name: "Qatar Airways", logo: "🛩️", route: "Via Doha hub" },
    { name: "Lufthansa", logo: "🇩🇪", route: "From European cities" },
    { name: "British Airways", logo: "🇬🇧", route: "From London" },
  ];

  const airports = [
    {
      name: "Cairo International Airport",
      code: "CAI",
      distance: "25 km from Cairo city center",
      facilities: "Duty-free, restaurants, lounges, car rental",
    },
    {
      name: "Hurghada International Airport",
      code: "HRG",
      distance: "5 km from Hurghada city",
      facilities: "Limited facilities, charter flights",
    },
    {
      name: "Sharm El-Sheikh International Airport",
      code: "SSH",
      distance: "18 km from Sharm El-Sheikh",
      facilities: "Modern terminal, seasonal flights",
    },
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
            International <span className="text-[#D4A574]">Travelers Guide</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know for your journey to Egypt's magical deserts
          </p>
        </motion.div>

        {/* Travel Information Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${section.color} p-[2px] rounded-2xl`}
              >
                <div className="bg-gradient-to-br from-black/90 to-black/80 rounded-2xl p-6 h-full">
                  <div className={`w-14 h-14 bg-gradient-to-br ${section.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#D4A574] mt-1">•</span>
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Suggested Airlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Suggested Airlines</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {suggestedAirlines.map((airline, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-xl border border-white/10 p-4 text-center hover:border-[#D4A574]/50 transition-all"
              >
                <div className="text-4xl mb-2">{airline.logo}</div>
                <h4 className="font-semibold text-white mb-1">{airline.name}</h4>
                <p className="text-xs text-gray-400">{airline.route}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Airport Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Major Airports</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {airports.map((airport, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#D4A574] rounded-xl flex items-center justify-center">
                    <Plane className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{airport.name}</h3>
                    <p className="text-[#D4A574] font-mono">{airport.code}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-[#D4A574] mt-0.5" />
                    <span>{airport.distance}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-300">
                    <span className="text-[#D4A574]">•</span>
                    <span>{airport.facilities}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Interactive Travel Assistant CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#D4A574]/20 to-[#C17D4A]/20 backdrop-blur-md rounded-3xl border border-[#D4A574]/30 p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Need More Help?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our travel assistant is available 24/7 to answer your questions about flights, visas, and travel planning
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
              Chat with Assistant
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-colors">
              Download Travel Guide (PDF)
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
