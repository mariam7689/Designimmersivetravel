import { Calendar, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 right-0 bg-card border border-border rounded-2xl shadow-2xl p-4 w-64"
          >
            <h3 className="font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                to="/plan"
                className="block p-3 bg-[var(--sand-beige)] dark:bg-[var(--muted)] rounded-xl hover:bg-[var(--desert-gold)] dark:hover:bg-[var(--desert-gold)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Plan a Trip</span>
                </div>
              </Link>
              <Link
                to="/explore"
                className="block p-3 bg-[var(--sand-beige)] dark:bg-[var(--muted)] rounded-xl hover:bg-[var(--desert-gold)] dark:hover:bg-[var(--desert-gold)] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center gap-2">
                  <span>🔍</span>
                  <span>Explore Deserts</span>
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--desert-gold)] to-[var(--sand-beige)] shadow-xl flex items-center justify-center hover:shadow-2xl transition-shadow"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[var(--dark-brown)]" />
        ) : (
          <Calendar className="w-6 h-6 text-[var(--dark-brown)]" />
        )}
      </motion.button>
    </div>
  );
}
