import { NavLink } from "react-router";
import { 
  LayoutDashboard, 
  Map, 
  Sparkles, 
  Tent, 
  Bed, 
  Calendar, 
  Users, 
  Star, 
  BarChart3, 
  Image as ImageIcon, 
  Settings, 
  LogOut,
  ChevronLeft
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navItems = [
  { title: "Dashboard Overview", icon: LayoutDashboard, path: "/admin" },
  { title: "Manage Deserts", icon: Map, path: "/admin/deserts" },
  { title: "Manage Hidden Gems", icon: Sparkles, path: "/admin/hidden-gems" },
  { title: "Manage Activities", icon: Tent, path: "/admin/activities" },
  { title: "Manage Stays", icon: Bed, path: "/admin/stays" },
  { title: "Manage Trip Plans", icon: Calendar, path: "/admin/plans" },
  { title: "Users & Guides", icon: Users, path: "/admin/users" },
  { title: "Reviews & Ratings", icon: Star, path: "/admin/reviews" },
  { title: "Analytics", icon: BarChart3, path: "/admin/analytics" },
  { title: "Media Library", icon: ImageIcon, path: "/admin/media" },
  { title: "Settings", icon: Settings, path: "/admin/settings" },
];

interface SidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (val: boolean) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (val: boolean) => void;
}

export function Sidebar({ isCollapsed, setIsCollapsed, isMobileOpen, setIsMobileOpen }: SidebarProps) {
  
  const renderContent = () => (
    <div className="flex flex-col h-full bg-card/95 backdrop-blur-xl border-r border-border shadow-2xl shadow-primary/5 text-card-foreground">
      <div className="h-16 flex items-center justify-between px-4 border-b border-border relative">
        <div className={cn("flex items-center gap-3 overflow-hidden transition-all duration-300", isCollapsed ? "w-0 opacity-0 hidden" : "w-auto opacity-100")}>
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-md shadow-primary/20">
            D
          </div>
          <span className="font-semibold text-lg whitespace-nowrap tracking-wide text-foreground">Desertia Admin</span>
        </div>
        {!isCollapsed && (
          <div className="w-8 h-8 hidden md:flex" /> // Spacer
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hidden md:flex p-1.5 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-all absolute -right-3.5 top-5 bg-card border border-border shadow-md"
        >
          <ChevronLeft className={cn("w-4 h-4 transition-transform duration-300", isCollapsed && "rotate-180")} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 px-3 custom-scrollbar flex flex-col gap-1.5 scroll-smooth">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            onClick={() => setIsMobileOpen(false)}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group relative",
              isActive 
                ? "bg-primary/10 text-primary font-medium shadow-sm" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
              isCollapsed ? "justify-center" : "justify-start"
            )}
            title={isCollapsed ? item.title : undefined}
          >
            {({ isActive }) => (
              <>
                <item.icon className={cn("w-5 h-5 flex-shrink-0 transition-colors", isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground")} />
                {!isCollapsed && (
                  <span className="whitespace-nowrap">{item.title}</span>
                )}
                {isCollapsed && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap z-50 border border-border shadow-lg">
                    {item.title}
                  </div>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      <div className="p-4 border-t border-border mt-auto">
        <button className={cn(
          "flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors group",
          isCollapsed ? "justify-center" : "justify-start"
        )}>
          <LogOut className="w-5 h-5 flex-shrink-0 group-hover:text-destructive transition-colors" />
          {!isCollapsed && <span className="whitespace-nowrap">Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.aside 
        initial={false}
        animate={{ width: isCollapsed ? "5rem" : "16rem" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden md:block h-screen z-20 sticky top-0 shrink-0"
      >
        {renderContent()}
      </motion.aside>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed inset-y-0 left-0 w-64 z-50 md:hidden"
            >
              {renderContent()}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
