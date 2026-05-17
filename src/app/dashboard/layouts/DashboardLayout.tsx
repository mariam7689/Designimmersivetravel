import { useState } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { TopNavbar } from "../components/TopNavbar";

interface DashboardLayoutProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function DashboardLayout({ darkMode, toggleDarkMode }: DashboardLayoutProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background text-foreground selection:bg-primary/30">
      <Sidebar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden relative">
        <TopNavbar 
          onMenuClick={() => setIsMobileOpen(true)}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <main className="flex-1 overflow-y-auto custom-scrollbar relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none -z-10" />
          <div className="p-4 md:p-6 lg:p-8 w-full max-w-7xl mx-auto min-h-full flex flex-col">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
