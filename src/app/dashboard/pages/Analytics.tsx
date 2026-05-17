import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, Legend, ComposedChart
} from "recharts";
import { Download, Calendar as CalendarIcon, Filter } from "lucide-react";
import { motion } from "motion/react";

const MONTHLY_GROWTH = [
  { month: "Jan", users: 4000, guides: 240 },
  { month: "Feb", users: 4500, guides: 280 },
  { month: "Mar", users: 5200, guides: 320 },
  { month: "Apr", users: 6100, guides: 350 },
  { month: "May", users: 6800, guides: 390 },
  { month: "Jun", users: 8500, guides: 420 },
];

const MOST_VISITED = [
  { name: "White Desert", visitors: 4500 },
  { name: "Siwa Oasis", visitors: 3800 },
  { name: "Black Desert", visitors: 3200 },
  { name: "Fayoum", visitors: 2800 },
  { name: "Sinai", visitors: 2100 },
];

const ACTIVITIES_DATA = [
  { name: "Safari", value: 35 },
  { name: "Camping", value: 25 },
  { name: "Stargazing", value: 20 },
  { name: "Sandboarding", value: 15 },
  { name: "Hiking", value: 5 },
];

const PLANNER_USAGE = [
  { day: "Mon", created: 120, completed: 80 },
  { day: "Tue", created: 150, completed: 95 },
  { day: "Wed", created: 180, completed: 110 },
  { day: "Thu", created: 140, completed: 90 },
  { day: "Fri", created: 210, completed: 140 },
  { day: "Sat", created: 280, completed: 190 },
  { day: "Sun", created: 250, completed: 170 },
];

const COLORS = ['#D8B36A', '#7AB8CC', '#E07A5F', '#4A3B2A', '#F2E6C9'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border p-3 rounded-lg shadow-lg">
        <p className="font-medium text-foreground mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-muted-foreground capitalize">{entry.name}:</span>
            <span className="font-medium text-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function Analytics() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Analytics & Reports</h2>
          <p className="text-muted-foreground mt-1 text-sm">Track platform performance and user engagement</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors border border-border">
            <CalendarIcon className="w-4 h-4" />
            Last 6 Months
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly User Growth */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="p-6 bg-card border border-border rounded-2xl shadow-sm"
        >
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold text-foreground">User Growth</h3>
              <p className="text-sm text-muted-foreground">Total users vs registered guides</p>
            </div>
            <button className="p-2 hover:bg-secondary rounded-lg text-muted-foreground transition-colors"><Filter className="w-4 h-4" /></button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_GROWTH} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorUsersGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#D8B36A" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#D8B36A" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="month" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="users" stroke="#D8B36A" strokeWidth={3} fillOpacity={1} fill="url(#colorUsersGrowth)" />
                <Line type="monotone" dataKey="guides" stroke="#7AB8CC" strokeWidth={2} dot={{ r: 4, fill: "#7AB8CC", strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Most Visited Deserts */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="p-6 bg-card border border-border rounded-2xl shadow-sm"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Most Visited Deserts</h3>
            <p className="text-sm text-muted-foreground">Top destinations by booking volume</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOST_VISITED} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip cursor={{ fill: 'var(--secondary)', opacity: 0.4 }} content={<CustomTooltip />} />
                <Bar dataKey="visitors" fill="#7AB8CC" radius={[4, 4, 0, 0]}>
                  {MOST_VISITED.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#D8B36A' : '#7AB8CC'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Planner Usage Funnel / Composed */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="p-6 bg-card border border-border rounded-2xl shadow-sm"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Trip Planner Engagement</h3>
            <p className="text-sm text-muted-foreground">Created plans vs Completed bookings</p>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={PLANNER_USAGE} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--border)" />
                <XAxis dataKey="day" stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <RechartsTooltip content={<CustomTooltip />} />
                <Bar dataKey="created" fill="#E07A5F" opacity={0.8} radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="completed" stroke="#D8B36A" strokeWidth={3} dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Popular Activities */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="p-6 bg-card border border-border rounded-2xl shadow-sm"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-foreground">Popular Activities</h3>
            <p className="text-sm text-muted-foreground">Distribution of booked experiences</p>
          </div>
          <div className="h-[300px] w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ACTIVITIES_DATA}
                  innerRadius={80}
                  outerRadius={110}
                  paddingAngle={5}
                  dataKey="value"
                  stroke="none"
                >
                  {ACTIVITIES_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
                <Legend 
                  verticalAlign="middle" 
                  align="right"
                  layout="vertical"
                  iconType="circle"
                  wrapperStyle={{ fontSize: '14px', color: 'var(--foreground)' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
