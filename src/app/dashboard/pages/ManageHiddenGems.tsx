import { motion } from "motion/react";
import { Plus, Search, Edit2, Trash2, MapPin, Eye } from "lucide-react";
import { useState } from "react";

const HIDDEN_GEMS = [
  { id: 1, name: "Crystal Mountain", location: "White Desert", status: "Active", views: 12450 },
  { id: 2, name: "Djara Cave", location: "Black Desert", status: "Active", views: 8230 },
  { id: 3, name: "Wadi El Hitan", location: "Fayoum", status: "Draft", views: 0 },
  { id: 4, name: "Colored Canyon", location: "Bahariya Oasis", status: "Active", views: 15600 },
];

export function ManageHiddenGems() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Hidden Gems</h1>
          <p className="text-muted-foreground mt-1">Manage secret locations and exclusive desert spots.</p>
        </div>
        <button className="bg-[var(--desert-gold)] text-white px-4 py-2 rounded-xl font-medium flex items-center gap-2 hover:bg-[#c49a50] transition-colors shadow-lg">
          <Plus className="w-5 h-5" />
          Add Gem
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-sm mb-8">
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search hidden gems..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)] transition-colors"
            />
          </div>
          <select className="px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-[var(--desert-gold)]">
            <option>All Locations</option>
            <option>White Desert</option>
            <option>Black Desert</option>
            <option>Fayoum</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-border">
                <th className="pb-4 font-medium text-muted-foreground">Location Name</th>
                <th className="pb-4 font-medium text-muted-foreground">Region</th>
                <th className="pb-4 font-medium text-muted-foreground">Status</th>
                <th className="pb-4 font-medium text-muted-foreground">Views</th>
                <th className="pb-4 font-medium text-muted-foreground text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {HIDDEN_GEMS.map((gem, index) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  key={gem.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                >
                  <td className="py-4 font-medium text-foreground">{gem.name}</td>
                  <td className="py-4 text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> {gem.location}
                  </td>
                  <td className="py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      gem.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {gem.status}
                    </span>
                  </td>
                  <td className="py-4 text-muted-foreground">{gem.views.toLocaleString()}</td>
                  <td className="py-4">
                    <div className="flex justify-end gap-2">
                      <button className="p-2 text-muted-foreground hover:text-[var(--desert-gold)] transition-colors rounded-lg hover:bg-muted">
                        <Eye className="w-4 h-4" />
                      </button>
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