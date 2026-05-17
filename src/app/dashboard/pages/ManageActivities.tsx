import { useState } from "react";
import { Plus, Search, Map, Tent, Mountain, Flame, Activity } from "lucide-react";
import { motion } from "motion/react";

const ACTIVITIES = [
  { id: 1, name: "Sunset Safari", duration: "4 hours", price: "$45", difficulty: "Easy", icon: Map },
  { id: 2, name: "Overnight Camping", duration: "12 hours", price: "$120", difficulty: "Moderate", icon: Tent },
  { id: 3, name: "Mountain Hiking", duration: "6 hours", price: "$65", difficulty: "Hard", icon: Mountain },
  { id: 4, name: "Sandboarding", duration: "2 hours", price: "$30", difficulty: "Moderate", icon: Activity },
  { id: 5, name: "Stargazing & Fire", duration: "3 hours", price: "$40", difficulty: "Easy", icon: Flame },
];

export function ManageActivities() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Manage Activities</h2>
          <p className="text-muted-foreground mt-1 text-sm">Configure activities, pricing, and safety notes</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
          <Plus className="w-5 h-5" />
          Add Activity
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col">
        <div className="p-4 border-b border-border">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-secondary/50 text-muted-foreground text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Activity</th>
                <th className="px-6 py-4 font-medium">Duration</th>
                <th className="px-6 py-4 font-medium">Price</th>
                <th className="px-6 py-4 font-medium">Difficulty</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {ACTIVITIES.map((activity, i) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
                  key={activity.id} className="hover:bg-secondary/20 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <activity.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground">{activity.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{activity.duration}</td>
                  <td className="px-6 py-4 text-foreground font-medium">{activity.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      activity.difficulty === 'Easy' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                      activity.difficulty === 'Moderate' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                      'bg-destructive/10 text-destructive border-destructive/20'
                    }`}>
                      {activity.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-sm text-primary font-medium hover:underline">Edit</button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
