import { useState } from "react";
import { User, Bell, Lock, Globe, Database, Save } from "lucide-react";
import { motion } from "motion/react";

export function Settings() {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { name: "Profile", icon: User },
    { name: "Security", icon: Lock },
    { name: "Notifications", icon: Bell },
    { name: "Localization", icon: Globe },
    { name: "API & Integrations", icon: Database },
  ];

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 fill-mode-both h-full flex flex-col">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">Settings</h2>
          <p className="text-muted-foreground mt-1 text-sm">Manage your admin preferences and platform configurations</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-md shadow-primary/20">
          <Save className="w-5 h-5" />
          Save Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* Settings Sidebar */}
        <div className="w-full lg:w-64 flex flex-col gap-1 shrink-0 bg-card border border-border rounded-2xl shadow-sm p-4 h-fit">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.name 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-card border border-border rounded-2xl shadow-sm p-6 lg:p-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Profile" && (
              <div className="space-y-6 max-w-2xl">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Admin Profile</h3>
                  <p className="text-sm text-muted-foreground mt-1">Update your personal information and avatar.</p>
                </div>
                
                <div className="flex items-center gap-6 pb-6 border-b border-border">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold border-2 border-primary/50">
                    A
                  </div>
                  <div className="space-y-2">
                    <button className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg border border-border hover:bg-secondary/80 transition-colors">
                      Change Avatar
                    </button>
                    <p className="text-xs text-muted-foreground">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <input type="text" defaultValue="Admin" className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <input type="text" defaultValue="User" className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input type="email" defaultValue="admin@desertia.com" className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <label className="text-sm font-medium text-foreground">Bio</label>
                    <textarea rows={4} defaultValue="Platform administrator managing the Desertia experiences." className="w-full px-3 py-2 bg-secondary/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
                  </div>
                </div>
              </div>
            )}

            {activeTab !== "Profile" && (
              <div className="flex flex-col items-center justify-center h-[400px] text-center">
                <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-muted-foreground mb-4">
                  <Settings className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{activeTab} Settings</h3>
                <p className="text-sm text-muted-foreground max-w-sm mt-1">
                  This settings module is currently under active development.
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
