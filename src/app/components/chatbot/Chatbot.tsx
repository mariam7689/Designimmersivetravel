import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isBot: boolean }>>([
    { text: "Hello! I'm your Desertia assistant. How can I help you plan your desert adventure today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  const suggestedQuestions = [
    "What are the best desert destinations?",
    "How do I book a trip?",
    "Tell me about payment options",
    "Help me plan a 3-day trip",
    "What activities are available?",
  ];

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages([...messages, { text: userMessage, isBot: false }]);
    setInputValue("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("book") || lowerQuestion.includes("booking")) {
      return "To book a trip, simply browse our destinations, select your preferred hotel and activities, then proceed to checkout. Would you like me to guide you through the process?";
    }
    if (lowerQuestion.includes("payment")) {
      return "We accept all major credit cards, PayPal, and offer secure payment processing through Stripe. You can also use your reward points for discounts!";
    }
    if (lowerQuestion.includes("destination") || lowerQuestion.includes("desert")) {
      return "Our top destinations include the White Desert (famous for chalk formations), Siwa Oasis (tranquil palm groves), and the Sinai Desert (perfect for stargazing). Which one interests you?";
    }
    if (lowerQuestion.includes("trip") || lowerQuestion.includes("plan")) {
      return "I can help you plan the perfect trip! How many days would you like to spend? What type of experience are you looking for - adventure, relaxation, or cultural exploration?";
    }
    if (lowerQuestion.includes("activity") || lowerQuestion.includes("activities")) {
      return "We offer safari tours, stargazing experiences, camel rides, Bedouin cultural experiences, sandboarding, and more! What activities interest you most?";
    }
    if (lowerQuestion.includes("price") || lowerQuestion.includes("cost")) {
      return "Our trips range from $180 to $450 per night depending on accommodation type and activities. Would you like to see specific packages?";
    }

    return "That's a great question! Our team can provide more detailed information. Meanwhile, you can explore our destinations page or check out our trip planner for personalized recommendations.";
  };

  const handleSuggestedQuestion = (question: string) => {
    setMessages([...messages, { text: question, isBot: false }]);
    setTimeout(() => {
      const botResponse = getBotResponse(question);
      setMessages((prev) => [...prev, { text: botResponse, isBot: true }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-gradient-to-br from-[#2B2520] to-[#1a1410] backdrop-blur-xl rounded-2xl border border-[#D4A574]/30 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#D4A574] to-[#C17D4A] p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#D4A574]" />
              </div>
              <div>
                <h3 className="font-bold text-black">Desertia Assistant</h3>
                <p className="text-black/70 text-xs">Always here to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.isBot
                        ? "bg-white/10 text-white"
                        : "bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Suggested Questions */}
              {messages.length === 1 && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 px-1">Suggested questions:</p>
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="w-full text-left bg-white/5 hover:bg-white/10 text-gray-300 text-sm p-3 rounded-xl transition-colors border border-white/10"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-xl border border-white/10 focus:border-[#D4A574] focus:outline-none transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-gradient-to-r from-[#D4A574] to-[#C17D4A] text-black p-3 rounded-xl hover:scale-105 transition-transform"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
