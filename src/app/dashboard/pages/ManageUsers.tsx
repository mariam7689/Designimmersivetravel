import { useState } from "react";
import { Search, Filter, ShieldAlert, CheckCircle2, UserX, Settings, User } from "lucide-react";
import { motion } from "motion/react";

const USERS = [
  { id: 1, name: "Ali Hassan", email: "ali@example.com", role: "Guide", status: "Active", joined: "2023-11-04" },
  { id: 2, name: "Sarah Connor", email: "sarah@example.com", role: "User", status: "Active", joined: "2024-01-15" },
  { id: 3, name: "Mahmoud Zayed", email: "mzayed@admin.com", role: "Admin", status: "Active", joined: "2023-01-01" },
  { id: 4, name: "Desert Eco Lodge", email: "info@deserteco.com", role: "Partner", status: "Suspended", joined: "2023-08-22" },
  { id: 5, name: "John Doe", email: "johndoe@example.com", role: "User", status: "Active", joined: "2024-03-02" },
];

export function ManageUsers() {
  const [search, setSearch] = useState("");

  const getRoleColor = (role: string) => {
    switch(role) {
      case "Admin": return "bg-purple-500/10 text-purple-500 border-purple-500/20";
      case "Guide": return "bg-amber-500/10 text-amber-500 border-amber-500/20";
      case "Partner": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-secondary text-muted-foreground border-border";
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Manage Users</h2>
          <p className="text-muted-foreground mt-1 text-sm">Control access, roles, and review activities</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
          <Settings className="w-5 h-5" />
          Roles & Permissions
        </button>
      </div>

      <div className="bg-card border border-border rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Toolbar */}
        <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4 justify-between">
          <div className="relative w-full sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by name, email or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex gap-2 self-start sm:self-auto">
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary text-foreground transition-colors">
              <Filter className="w-4 h-4" />
              Role
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-secondary text-foreground transition-colors">
              <Filter className="w-4 h-4" />
              Status
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-secondary/50 text-muted-foreground text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-medium">User Profile</th>
                <th className="px-6 py-4 font-medium">Role</th>
                <th className="px-6 py-4 font-medium">Joined Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              {USERS.map((user, index) => (
                <motion.tr 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={user.id} 
                  className="hover:bg-secondary/20 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground border border-border flex-shrink-0">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 flex items-center gap-1.5 w-fit rounded-full text-xs font-medium border ${
                      user.status === 'Active' 
                        ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' 
                        : 'bg-destructive/10 text-destructive border-destructive/20'
                    }`}>
                      {user.status === 'Active' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <ShieldAlert className="w-3.5 h-3.5" />}
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {user.status === 'Active' ? (
                        <button className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-md transition-colors" title="Suspend User">
                          <UserX className="w-4 h-4" />
                        </button>
                      ) : (
                        <button className="p-2 text-muted-foreground hover:text-emerald-500 hover:bg-emerald-500/10 rounded-md transition-colors" title="Activate User">
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing 1 to 5 of 5 entries</span>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-border rounded-md hover:bg-secondary disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 border border-border rounded-md hover:bg-secondary disabled:opacity-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
