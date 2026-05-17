import { motion } from "motion/react";
import { Plus, Search, Edit2, Trash2, Calendar, Users } from "lucide-react";
import { useState } from "react";

const TRIP_PLANS = [
  { id: 1, title: "White Desert Stargazing", duration: "2 Days, 1 Night", bookings: 45, maxCapacity: 50, price: "$299", status: "Active" },
  { id: 2, title: "Sinai Safari Expedition", duration: "4 Days, 3 Nights", bookings: 12, maxCapacity: 20, price: "$599", status: "Active" },
  { id: 3, title: "Siwa Oasis VIP Retreat", duration: "5 Days, 4 Nights", bookings: 8, maxCapacity: 10, price: "$1299", status: "Draft" },
  { id: 4, title: "Fayoum Photography Tour", duration: "1 Day", bookings: 30, maxCapacity: 30, price: "$149", status: "Full" },
];

export function ManageTripPlans() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Trip Plans</h1>
          <p className="text-muted-foreground mt-1">Manage safari packages, tours, and expeditions.</p>
        </div>
        <button className="bg-[var(--desert-gold)] text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-[#c49a50] transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
          Create Plan
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search plans..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)] transition-colors"
            />
          </div>
          <select className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)]">
            <option>All Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Full</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 font-medium text-muted-foreground">Plan Title</th>
                <th className="pb-4 font-medium text-muted-foreground">Duration</th>
                <th className="pb-4 font-medium text-muted-foreground">Capacity</th>
                <th className="pb-4 font-medium text-muted-foreground">Price</th>
                <th className="pb-4 font-medium text-muted-foreground">Status</th>
                <th className="pb-4 font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {TRIP_PLANS.map((plan, index) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={plan.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 font-medium text-foreground">{plan.title}</td>
                  <td className="py-4 text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {plan.duration}
                  </td>
                  <td className="py-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{plan.bookings} / {plan.maxCapacity}</span>
                      <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden ml-2 hidden sm:block">
                        <div 
                          className="h-full bg-[var(--desert-gold)] rounded-full" 
                          style={{ width: `${(plan.bookings / plan.maxCapacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 font-medium text-foreground">{plan.price}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      plan.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : plan.status === 'Full'
                        ? 'bg-red-500/10 text-red-500'
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {plan.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-blue-500 transition-colors rounded-lg hover:bg-muted">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-red-500 transition-colors rounded-lg hover:bg-muted">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
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