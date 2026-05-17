import { useState } from "react";
import { Calendar, DollarSign, Sparkles, CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const moodOptions = [
  { emoji: "🔥", label: "Adventure", description: "Thrilling experiences and exploration" },
  { emoji: "🌙", label: "Peace", description: "Relaxation and tranquility" },
  { emoji: "✨", label: "Luxury", description: "Premium comfort and service" },
  { emoji: "🧘", label: "Spiritual", description: "Inner peace and reflection" },
];

interface ItineraryDay {
  day: number;
  activities: string[];
  stay: string;
  meals: string;
}

export function TripPlannerPage() {
  const [step, setStep] = useState(1);
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState(500);
  const [selectedMood, setSelectedMood] = useState("");
  const [showItinerary, setShowItinerary] = useState(false);

  const generateItinerary = (): ItineraryDay[] => {
    const baseActivities = {
      Adventure: ["4x4 Desert Safari", "Sandboarding", "Rock climbing", "Camel trekking"],
      Peace: ["Stargazing session", "Meditation at sunrise", "Nature walk", "Hot spring visit"],
      Luxury: ["Private desert dinner", "Spa treatment", "Champagne sunset", "Gourmet cuisine"],
      Spiritual: ["Temple visit", "Sunrise meditation", "Local Bedouin experience", "Silent desert walk"],
    };

    const activities = baseActivities[selectedMood as keyof typeof baseActivities] || baseActivities.Adventure;

    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      activities: activities.slice(0, 2 + (i % 2)),
      stay: budget > 800 ? "Luxury Desert Lodge" : budget > 400 ? "Eco Camp" : "Traditional Bedouin Camp",
      meals: "Breakfast, Lunch, Dinner included",
    }));
  };

  const handleComplete = () => {
    setShowItinerary(true);
  };

  const itinerary = showItinerary ? generateItinerary() : [];
  const estimatedCost = days * budget * 0.8;

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Smart Trip Planner</h1>
          <p className="text-xl text-muted-foreground">
            Create your perfect desert adventure in 3 simple steps
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step >= s
                      ? "bg-[var(--desert-gold)] text-[var(--dark-brown)]"
                      : "bg-muted text-muted-foreground"
                  } transition-colors`}
                >
                  {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > s ? "bg-[var(--desert-gold)]" : "bg-muted"
                    } transition-colors`}
                  ></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Duration</span>
            <span>Budget</span>
            <span>Mood</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-3xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-[var(--desert-gold)]" />
                <h2 className="text-2xl font-bold">How many days?</h2>
              </div>
              <p className="text-muted-foreground mb-8">Choose the duration of your desert adventure</p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{days} days</span>
                    <span className="text-muted-foreground">{days - 1} nights</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="7"
                    value={days}
                    onChange={(e) => setDays(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-muted"
                    style={{
                      background: `linear-gradient(to right, var(--desert-gold) 0%, var(--desert-gold) ${
                        ((days - 1) / 6) * 100
                      }%, var(--muted) ${((days - 1) / 6) * 100}%, var(--muted) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1 day</span>
                    <span>7 days</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[2, 3, 5].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDays(d)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        days === d
                          ? "border-[var(--desert-gold)] bg-[var(--sand-beige)] dark:bg-[var(--muted)]"
                          : "border-border hover:border-[var(--desert-gold)]/50"
                      }`}
                    >
                      <div className="font-bold text-lg">{d} days</div>
                      <div className="text-sm text-muted-foreground">Popular</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full mt-8 px-6 py-4 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-3xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-6 h-6 text-[var(--desert-gold)]" />
                <h2 className="text-2xl font-bold">What's your budget?</h2>
              </div>
              <p className="text-muted-foreground mb-8">Budget per day (in USD)</p>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-2xl">${budget}</span>
                    <span className="text-muted-foreground">per day</span>
                  </div>
                  <input
                    type="range"
                    min="100"
                    max="1500"
                    step="50"
                    value={budget}
                    onChange={(e) => setBudget(Number(e.target.value))}
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, var(--desert-gold) 0%, var(--desert-gold) ${
                        ((budget - 100) / 1400) * 100
                      }%, var(--muted) ${((budget - 100) / 1400) * 100}%, var(--muted) 100%)`,
                    }}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$100</span>
                    <span>$1500</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <button
                    onClick={() => setBudget(200)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      budget <= 300
                        ? "border-[var(--desert-gold)] bg-[var(--sand-beige)] dark:bg-[var(--muted)]"
                        : "border-border hover:border-[var(--desert-gold)]/50"
                    }`}
                  >
                    <div className="font-bold">Budget</div>
                    <div className="text-sm text-muted-foreground">$100-300</div>
                  </button>
                  <button
                    onClick={() => setBudget(500)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      budget > 300 && budget <= 700
                        ? "border-[var(--desert-gold)] bg-[var(--sand-beige)] dark:bg-[var(--muted)]"
                        : "border-border hover:border-[var(--desert-gold)]/50"
                    }`}
                  >
                    <div className="font-bold">Moderate</div>
                    <div className="text-sm text-muted-foreground">$300-700</div>
                  </button>
                  <button
                    onClick={() => setBudget(1000)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      budget > 700
                        ? "border-[var(--desert-gold)] bg-[var(--sand-beige)] dark:bg-[var(--muted)]"
                        : "border-border hover:border-[var(--desert-gold)]/50"
                    }`}
                  >
                    <div className="font-bold">Luxury</div>
                    <div className="text-sm text-muted-foreground">$700+</div>
                  </button>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 px-6 py-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 px-6 py-4 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && !showItinerary && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-card rounded-3xl p-8 shadow-xl border border-border"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6 text-[var(--desert-gold)]" />
                <h2 className="text-2xl font-bold">Choose your mood</h2>
              </div>
              <p className="text-muted-foreground mb-8">What kind of experience are you seeking?</p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => setSelectedMood(mood.label)}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${
                      selectedMood === mood.label
                        ? "border-[var(--desert-gold)] bg-[var(--sand-beige)] dark:bg-[var(--muted)] scale-105"
                        : "border-border hover:border-[var(--desert-gold)]/50 hover:scale-102"
                    }`}
                  >
                    <div className="text-5xl mb-3">{mood.emoji}</div>
                    <div className="font-bold text-xl mb-1">{mood.label}</div>
                    <div className="text-sm text-muted-foreground">{mood.description}</div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 px-6 py-4 bg-muted rounded-xl hover:bg-muted/80 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={handleComplete}
                  disabled={!selectedMood}
                  className="flex-1 px-6 py-4 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Generate Itinerary
                  <Sparkles className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {showItinerary && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[var(--desert-gold)] to-[var(--sand-beige)] dark:from-[var(--muted)] dark:to-[var(--card)] rounded-3xl p-8 text-center shadow-xl">
              <Sparkles className="w-12 h-12 mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-2">Your Perfect {selectedMood} Adventure</h2>
              <p className="text-lg mb-6">{days} days of unforgettable experiences</p>
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full">
                <DollarSign className="w-5 h-5" />
                <span className="font-bold text-xl">Estimated: ${estimatedCost.toFixed(0)}</span>
              </div>
            </div>

            <div className="space-y-4">
              {itinerary.map((day) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: day.day * 0.1 }}
                  className="bg-card rounded-2xl p-6 shadow-lg border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--desert-gold)] text-[var(--dark-brown)] flex items-center justify-center font-bold">
                      {day.day}
                    </div>
                    <h3 className="text-xl font-bold">Day {day.day}</h3>
                  </div>

                  <div className="space-y-3 ml-15">
                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Clock className="w-4 h-4" />
                        Activities
                      </div>
                      <ul className="space-y-1">
                        {day.activities.map((activity, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-[var(--desert-gold)]" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                        <MapPin className="w-4 h-4" />
                        Accommodation
                      </div>
                      <p>{day.stay}</p>
                    </div>

                    <div className="text-sm text-muted-foreground">{day.meals}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4">
              <button className="flex-1 px-6 py-4 bg-card border border-border rounded-xl hover:bg-muted transition-colors">
                Save Trip
              </button>
              <button className="flex-1 px-6 py-4 bg-[var(--desert-gold)] text-[var(--dark-brown)] rounded-xl hover:scale-105 transition-transform">
                Share Trip
              </button>
            </div>

            <button
              onClick={() => {
                setStep(1);
                setShowItinerary(false);
                setSelectedMood("");
              }}
              className="w-full px-6 py-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              Start Over
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
