import { Menu, Search, Bell, Moon, Sun, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

interface TopNavbarProps {
  onMenuClick: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function TopNavbar({ onMenuClick, darkMode, toggleDarkMode }: TopNavbarProps) {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("Dashboard");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/admin") setPageTitle("Dashboard Overview");
    else if (path.includes("deserts")) setPageTitle("Manage Deserts");
    else if (path.includes("hidden-gems")) setPageTitle("Manage Hidden Gems");
    else if (path.includes("activities")) setPageTitle("Manage Activities");
    else if (path.includes("stays")) setPageTitle("Manage Stays");
    else if (path.includes("users")) setPageTitle("Users & Guides");
    else if (path.includes("analytics")) setPageTitle("Analytics");
    else if (path.includes("media")) setPageTitle("Media Library");
    else if (path.includes("settings")) setPageTitle("Settings");
    else setPageTitle("Admin Portal");
  }, [location]);

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-8 border-b border-border bg-card/60 backdrop-blur-md sticky top-0 z-10 transition-colors">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 rounded-md hover:bg-secondary text-muted-foreground transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-semibold text-foreground hidden sm:block">
          {pageTitle}
        </h1>
      </div>

      <div className="flex items-center gap-3 sm:gap-6">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-64 pl-9 pr-4 py-2 text-sm bg-secondary border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-destructive rounded-full border border-card" />
          </button>
          
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-secondary text-muted-foreground transition-colors"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        <div className="h-8 w-px bg-border hidden sm:block" />

        <div className="flex items-center gap-3 cursor-pointer group hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold shadow-md shadow-primary/20">
            A
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium leading-none text-foreground">Admin User</p>
            <p className="text-xs text-muted-foreground mt-1">Super Admin</p>
          </div>
          <ChevronDown className="w-4 h-4 text-muted-foreground hidden sm:block group-hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
}
