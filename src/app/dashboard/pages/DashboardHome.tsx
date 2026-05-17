import { 
  Users, CalendarDays, Map, Activity, DollarSign, Bookmark, ArrowUpRight, ArrowDownRight
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from "recharts";
import { motion } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const STATS = [
  { label: "Total Users", value: "24,592", change: "+12%", up: true, icon: Users },
  { label: "Trips Planned", value: "12,403", change: "+8%", up: true, icon: CalendarDays },
  { label: "Active Guides", value: "842", change: "+2%", up: true, icon: Activity },
  { label: "Popular Desert", value: "White Desert", change: "Steady", up: true, icon: Map },
  { label: "Revenue (Est.)", value: "$1.2M", change: "+15%", up: true, icon: DollarSign },
  { label: "Bookmarked", value: "45K", change: "-3%", up: false, icon: Bookmark },
];

const AREA_DATA = [
  { name: "Jan", users: 4000, trips: 2400 },
  { name: "Feb", users: 3000, trips: 1398 },
  { name: "Mar", users: 2000, trips: 9800 },
  { name: "Apr", users: 2780, trips: 3908 },
  { name: "May", users: 1890, trips: 4800 },
  { name: "Jun", users: 2390, trips: 3800 },
  { name: "Jul", users: 3490, trips: 4300 },
];

const PIE_DATA = [
  { name: "White Desert", value: 400 },
  { name: "Siwa Oasis", value: 300 },
  { name: "Black Desert", value: 300 },
  { name: "Fayoum", value: 200 },
];

const COLORS = ['#D8B36A', '#7AB8CC', '#E07A5F', '#4A3B2A'];

const RECENT_USERS = [
  { name: "Sarah Connor", email: "sarah@example.com", status: "Active", date: "2 mins ago" },
  { name: "John Doe", email: "john@example.com", status: "Active", date: "15 mins ago" },
  { name: "Emma Smith", email: "emma@example.com", status: "Pending", date: "1 hour ago" },
  { name: "Ahmed Ali", email: "ahmed@example.com", status: "Active", date: "3 hours ago" },
];

export function DashboardHome() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-card border border-border shadow-sm flex flex-col gap-2 hover:border-primary/50 transition-colors group"
          >
            <div className="flex items-center justify-between text-muted-foreground">
              <span className="text-sm font-medium">{stat.label}</span>
              <stat.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="text-2xl font-semibold text-foreground mt-1">
              {stat.value}
            </div>
            <div className="flex items-center gap-1 text-xs">
              {stat.change === "Steady" ? (
                <span className="text-muted-foreground">{stat.change}</span>
              ) : (
                <>
                  <span className={cn("flex items-center", stat.up ? "text-emerald-500" : "text-destructive")}>
                    {stat.up ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                    {stat.change}
                  </span>
                  <span className="text-muted-foreground ml-1">vs last month</span>
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground">User Growth & Planning</h3>
              <p className="text-sm text-muted-foreground">Monthly active users and trips planned</p>
            </div>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={AREA_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D8B36A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D8B36A" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorTrips" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7AB8CC" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#7AB8CC" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px', color: 'var(--foreground)' }}
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Area type="monotone" dataKey="users" stroke="#D8B36A" strokeWidth={2} fillOpacity={1} fill="url(#colorUsers)" />
                <Area type="monotone" dataKey="trips" stroke="#7AB8CC" strokeWidth={2} fillOpacity={1} fill="url(#colorTrips)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Popular Destinations</h3>
            <p className="text-sm text-muted-foreground">Top booked locations</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={PIE_DATA}
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)', borderRadius: '8px' }}
                  itemStyle={{ color: 'var(--foreground)' }}
                />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Tables & Widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Recent Users</h3>
            <button className="text-sm text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/50 rounded-lg">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">User</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 rounded-r-lg">Joined</th>
                </tr>
              </thead>
              <tbody>
                {RECENT_USERS.map((user, i) => (
                  <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-secondary/20 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium",
                        user.status === "Active" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"
                      )}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{user.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-primary flex-shrink-0 relative">
                  {i !== 3 && <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-10 bg-border" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">New Trip Planned</p>
                  <p className="text-sm text-muted-foreground mt-0.5">Ahmed created a 3-day safari in the White Desert</p>
                  <p className="text-xs text-muted-foreground mt-1">10 mins ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
