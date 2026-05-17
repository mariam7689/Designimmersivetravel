import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router";
import { DesertiaLogo } from "./DesertiaLogo";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#4A3B2A] to-[#0B1D2A] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <DesertiaLogo size="md" variant="full" />
            </div>
            <p className="text-white/70 mb-4">
              Egypt's premier digital platform for desert exploration, eco-tourism, and immersive travel experiences
            </p>
            <div className="flex gap-4">
              <Link to="/community" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link to="/community" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link to="/community" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/explore" className="text-white/70 hover:text-white transition-colors">
                  All Deserts
                </Link>
              </li>
              <li>
                <Link to="/hidden-gems" className="text-white/70 hover:text-white transition-colors">
                  Hidden Gems
                </Link>
              </li>
              <li>
                <Link to="/activities" className="text-white/70 hover:text-white transition-colors">
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/stays" className="text-white/70 hover:text-white transition-colors">
                  Accommodations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Plan</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/plan" className="text-white/70 hover:text-white transition-colors">
                  Trip Planner
                </Link>
              </li>
              <li>
                <Link to="/travel-stories" className="text-white/70 hover:text-white transition-colors">
                  Travel Tips
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-white/70 hover:text-white transition-colors">
                  Best Times to Visit
                </Link>
              </li>
              <li>
                <Link to="/emergency-help" className="text-white/70 hover:text-white transition-colors">
                  Safety Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/70">
                <Mail className="w-4 h-4" />
                <Link to="/contact" className="hover:text-white transition-colors">
                  hello@desertia.com
                </Link>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <Phone className="w-4 h-4" />
                <span>+20 123 456 7890</span>
              </li>
              <li className="flex items-center gap-2 text-white/70">
                <MapPin className="w-4 h-4" />
                <span>Cairo, Egypt</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 Desertia. All rights reserved. Crafted with passion for desert exploration.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
