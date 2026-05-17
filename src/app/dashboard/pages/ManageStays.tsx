import { motion } from "motion/react";
import { Plus, Search, Edit2, Trash2, Home, Star } from "lucide-react";
import { useState } from "react";

const STAYS = [
  { id: 1, name: "Al Tarfa Desert Lodge", type: "Eco-Lodge", rating: 4.8, price: "$200/night", status: "Available" },
  { id: 2, name: "White Desert Camp", type: "Bedouin Camp", rating: 4.9, price: "$150/night", status: "Fully Booked" },
  { id: 3, name: "Siwa Oasis Resort", type: "Premium Resort", rating: 4.6, price: "$350/night", status: "Available" },
  { id: 4, name: "Fayoum Glamping", type: "Glamping", rating: 4.7, price: "$280/night", status: "Available" },
];

export function ManageStays() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Stays & Camps</h1>
          <p className="text-muted-foreground mt-1">Manage desert eco-lodges, camps, and premium resorts.</p>
        </div>
        <button className="bg-[var(--desert-gold)] text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-[#c49a50] transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
          Add Stay
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search stays..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)] transition-colors"
            />
          </div>
          <select className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)]">
            <option>All Types</option>
            <option>Eco-Lodge</option>
            <option>Bedouin Camp</option>
            <option>Premium Resort</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 font-medium text-muted-foreground">Property Name</th>
                <th className="pb-4 font-medium text-muted-foreground">Type</th>
                <th className="pb-4 font-medium text-muted-foreground">Rating</th>
                <th className="pb-4 font-medium text-muted-foreground">Price</th>
                <th className="pb-4 font-medium text-muted-foreground">Status</th>
                <th className="pb-4 font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {STAYS.map((stay, index) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={stay.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 font-medium text-foreground flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <Home className="w-5 h-5 text-muted-foreground" />
                    </div>
                    {stay.name}
                  </td>
                  <td className="py-4 text-muted-foreground">{stay.type}</td>
                  <td className="py-4">
                    <div className="flex items-center gap-1 text-foreground">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{stay.rating}</span>
                    </div>
                  </td>
                  <td className="py-4 text-muted-foreground">{stay.price}</td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      stay.status === 'Available' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}>
                      {stay.status}
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