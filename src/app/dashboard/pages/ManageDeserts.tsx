import { useState } from "react";
import { Plus, Search, Filter, MoreVertical, Edit2, Trash2, MapPin } from "lucide-react";
import { motion } from "motion/react";

const DESERTS = [
  { id: 1, name: "White Desert", region: "Farafra", difficulty: "Easy", bestTime: "Oct - Apr", status: "Active" },
  { id: 2, name: "Black Desert", region: "Bahariya", difficulty: "Moderate", bestTime: "Oct - Apr", status: "Active" },
  { id: 3, name: "Great Sand Sea", region: "Siwa", difficulty: "Hard", bestTime: "Nov - Mar", status: "Draft" },
  { id: 4, name: "Sinai Desert", region: "South Sinai", difficulty: "Moderate", bestTime: "Sep - May", status: "Active" },
];

export function ManageDeserts() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Manage Deserts</h2>
          <p className="text-muted-foreground mt-1 text-sm">Create and manage desert destinations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
          <Plus className="w-5 h-5" />
          Add Desert
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search deserts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary text-foreground transition-colors self-start sm:self-auto">
            <Filter className="w-4 h-4" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-secondary/50 text-muted-foreground text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">Destination</th>
                <th className="px-6 py-4 font-medium">Region</th>
                <th className="px-6 py-4 font-medium">Difficulty</th>
                <th className="px-6 py-4 font-medium">Best Time</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {DESERTS.map((desert, index) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={desert.id} 
                  className="hover:bg-secondary/20 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-medium text-foreground">{desert.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{desert.region}</td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <span className="px-2.5 py-1 bg-secondary rounded-full text-xs font-medium border border-border">
                      {desert.difficulty}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{desert.bestTime}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium flex items-center w-fit gap-1.5 ${
                      desert.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' 
                        : 'bg-amber-500/10 text-amber-500 border border-amber-500/20'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${desert.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                      {desert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-border rounded-md hover:bg-secondary disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-secondary disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
