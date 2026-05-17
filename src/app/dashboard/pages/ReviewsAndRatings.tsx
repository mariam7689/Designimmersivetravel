import { motion } from "motion/react";
import { Search, Star, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const REVIEWS = [
  { id: 1, user: "Sarah Jenkins", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzkxMDUwMDB8MA&ixlib=rb-4.1.0&q=80&w=100", target: "White Desert Stargazing", rating: 5, date: "2024-05-15", status: "Published", text: "Absolutely mesmerizing experience. The guides were knowledgeable and the setup was incredibly luxurious." },
  { id: 2, user: "Ahmed Hassan", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHx1c2VyJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzkxMDUwMDB8MA&ixlib=rb-4.1.0&q=80&w=100", target: "Siwa Oasis VIP Retreat", rating: 4, date: "2024-05-12", status: "Published", text: "Great retreat, beautiful scenery. Only issue was the Wi-Fi connection, but it's the desert!" },
  { id: 3, user: "Elena Rossi", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHx1c2VyJTIwcHJvZmlsZXxlbnwxfHx8fDE3NzkxMDUwMDB8MA&ixlib=rb-4.1.0&q=80&w=100", target: "Fayoum Photography Tour", rating: 5, date: "2024-05-10", status: "Pending", text: "Captured the most stunning shots of my life. Highly recommended for any photographer." },
];

export function ReviewsAndRatings() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Reviews & Ratings</h1>
          <p className="text-muted-foreground mt-1">Moderate user feedback for trips, stays, and experiences.</p>
        </div>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)] transition-colors"
            />
          </div>
          <select className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)]">
            <option>All Status</option>
            <option>Published</option>
            <option>Pending</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="grid gap-4">
          {REVIEWS.map((review, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={review.id}
              className="border border-border/50 bg-background rounded-xl p-5 hover:border-border transition-colors flex flex-col md:flex-row gap-4 md:items-center"
            >
              <div className="flex items-center gap-4 min-w-[200px]">
                <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-medium text-foreground">{review.user}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-3.5 h-3.5 ${i < review.rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'}`} />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex-1 min-w-[250px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-[var(--desert-gold)]">{review.target}</span>
                  <span className="text-xs text-muted-foreground">• {review.date}</span>
                </div>
                <p className="text-sm text-foreground/80 line-clamp-2">"{review.text}"</p>
              </div>

              <div className="flex items-center gap-3 md:border-l border-border/50 md:pl-6">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  review.status === 'Published' 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {review.status}
                </span>
                <div className="flex gap-1">
                  {review.status !== 'Published' && (
                    <button className="p-2 text-emerald-500 hover:bg-emerald-500/10 rounded-lg transition-colors" title="Approve">
                      <CheckCircle className="w-5 h-5" />
                    </button>
                  )}
                  <button className="p-2 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors" title="Reject">
                    <XCircle className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-muted-foreground hover:bg-muted rounded-lg transition-colors" title="Reply">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}