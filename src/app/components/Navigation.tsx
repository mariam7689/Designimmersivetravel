import { Moon, Sun, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { DesertiaLogo } from "./DesertiaLogo";

export function Navigation({ darkMode, toggleDarkMode }: { darkMode: boolean; toggleDarkMode: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("EN");
  const location = useLocation();

  const languages = [
    { code: "EN", name: "English", dir: "ltr" },
    { code: "AR", name: "العربية", dir: "rtl" },
    { code: "FR", name: "Français", dir: "ltr" },
    { code: "DE", name: "Deutsch", dir: "ltr" },
    { code: "IT", name: "Italiano", dir: "ltr" },
    { code: "ES", name: "Español", dir: "ltr" }
  ];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setCurrentLang(lang.code);
    setLanguageMenuOpen(false);
    document.documentElement.dir = lang.dir;
    // In a real app, this would also trigger i18next change
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/explore", label: "Explore" },
    { path: "/plan", label: "Plan Trip" },
    { path: "/hidden-gems", label: "Hidden Gems" },
    { path: "/stays", label: "Stays" },
    { path: "/activities", label: "Experiences" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/90 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <DesertiaLogo size="md" variant="full" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors hover:text-[var(--desert-gold)] ${
                  isActive(link.path) ? "text-[var(--desert-gold)]" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className="flex items-center gap-1 p-2 text-foreground/70 hover:text-[var(--desert-gold)] transition-colors rounded-full hover:bg-muted"
                aria-label="Change Language"
              >
                <Globe className="w-5 h-5" />
                <span className="hidden lg:block text-sm font-medium">{currentLang}</span>
              </button>
              
              {languageMenuOpen && (
                <div className="absolute top-full mt-2 right-0 w-32 bg-background border border-border rounded-xl shadow-lg overflow-hidden py-1 z-50 animate-in fade-in zoom-in duration-200">
                  {languages.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                        currentLang === lang.code ? 'text-[var(--desert-gold)] font-medium' : 'text-foreground'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/login"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-foreground hover:text-[var(--desert-gold)] transition-colors"
            >
              Sign In
            </Link>

            <Link
              to="/register"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[var(--desert-gold)] to-[var(--warm-terracotta)] text-white rounded-full hover:scale-105 transition-transform shadow-md"
            >
              Get Started
            </Link>

            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive(link.path) ? "text-[var(--desert-gold)]" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-2">
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-foreground/70"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-4 bg-gradient-to-r from-[var(--desert-gold)] to-[var(--warm-terracotta)] text-white rounded-full text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
