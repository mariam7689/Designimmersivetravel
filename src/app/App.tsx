import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/FloatingActionButton";
import { LoadingScreen } from "./components/LoadingScreen";
import { Chatbot } from "./components/chatbot/Chatbot";
import { HomePage } from "./components/HomePage";
import { ExplorePage } from "./components/ExplorePage";
import { TripPlannerPage } from "./components/TripPlannerPage";
import { HiddenGemsPage } from "./components/HiddenGemsPage";
import { StaysPage } from "./components/StaysPage";
import { ActivitiesPage } from "./components/ActivitiesPage";
import { DesertDetailsPage } from "./components/DesertDetailsPage";
import { LoginPage } from "./components/auth/LoginPage";
import { RegisterPage } from "./components/auth/RegisterPage";
import { ForgotPasswordPage } from "./components/auth/ForgotPasswordPage";

// User Features
import { ProfileDashboard } from "./components/profile/ProfileDashboard";
import { HotelsPage } from "./components/hotels/HotelsPage";
import { CheckoutPage } from "./components/payment/CheckoutPage";
import { PaymentSuccessPage } from "./components/payment/PaymentSuccessPage";
import { RewardsPage } from "./components/rewards/RewardsPage";
import { ChallengesPage } from "./components/gamification/ChallengesPage";
import { ShopPage } from "./components/shop/ShopPage";
import { InternationalTravelersPage } from "./components/international/InternationalTravelersPage";
import { FeaturePage } from "./components/FeaturePage";

// Dashboard Imports
import { DashboardLayout } from "./dashboard/layouts/DashboardLayout";
import { DashboardHome } from "./dashboard/pages/DashboardHome";
import { ManageDeserts } from "./dashboard/pages/ManageDeserts";
import { ManageUsers } from "./dashboard/pages/ManageUsers";
import { Analytics } from "./dashboard/pages/Analytics";
import { MediaLibrary } from "./dashboard/pages/MediaLibrary";
import { ManageActivities } from "./dashboard/pages/ManageActivities";
import { Settings } from "./dashboard/pages/Settings";
import { ManageHiddenGems } from "./dashboard/pages/ManageHiddenGems";
import { ManageStays } from "./dashboard/pages/ManageStays";
import { ManageTripPlans } from "./dashboard/pages/ManageTripPlans";
import { ReviewsAndRatings } from "./dashboard/pages/ReviewsAndRatings";

// Placeholder for other pages to not crash
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center h-full min-h-[400px] animate-in fade-in zoom-in-95 duration-500">
    <div className="text-4xl mb-4">🚧</div>
    <h2 className="text-2xl font-semibold text-foreground mb-2">{title}</h2>
    <p className="text-muted-foreground text-sm">This page is under construction.</p>
  </div>
);

function AppContent({ darkMode, toggleDarkMode, isLoading, setIsLoading }: {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}) {
  const location = useLocation();
  const isAuthPage = ["/login", "/register", "/forgot-password"].includes(location.pathname);
  const isAdminPage = location.pathname.startsWith("/admin");
  const showLayout = !isAuthPage && !isAdminPage;
  const showFAB = location.pathname !== "/plan" && showLayout;

  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--border)",
          },
        }}
      />
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && (
        <div className="min-h-screen bg-background text-foreground">
          {showLayout && <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/plan" element={<TripPlannerPage />} />
            <Route path="/hidden-gems" element={<HiddenGemsPage />} />
            <Route path="/stays" element={<StaysPage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/desert/:id" element={<DesertDetailsPage />} />

            {/* Authentication */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />

            {/* User Profile & Features */}
            <Route path="/profile" element={<ProfileDashboard />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/booking/hotel/:id" element={<CheckoutPage />} />
            <Route path="/payment/success" element={<PaymentSuccessPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/challenges" element={<ChallengesPage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/international-travelers" element={<InternationalTravelersPage />} />

            {/* Premium Startup Pages mapped to FeaturePage */}
            <Route path="/vip-experiences" element={<FeaturePage title="VIP Experiences" description="Exclusive luxury treatments, private desert villas, and helicopter transfers to hidden oases." />} />
            <Route path="/luxury-safari" element={<FeaturePage title="Luxury Safari" description="State-of-the-art off-road vehicles equipped with premium comfort, guiding you through the majestic dunes." />} />
            <Route path="/stargazing" element={<FeaturePage title="Stargazing Experience" description="Unobstructed views of the Milky Way with professional telescopes and astronomy guides." />} />
            <Route path="/festivals" element={<FeaturePage title="Desert Festivals" description="Discover vibrant music, culture, and art festivals set against the backdrop of ancient sands." />} />
            <Route path="/bedouin-culture" element={<FeaturePage title="Bedouin Culture" description="Immerse yourself in authentic traditions, culinary experiences, and stories from native desert dwellers." />} />
            <Route path="/travel-stories" element={<FeaturePage title="Travel Stories" description="Read cinematic accounts and immersive journals from travelers who have explored the Egyptian sands." />} />
            <Route path="/community" element={<FeaturePage title="Community" description="Connect with fellow adventurers, share your journeys, and join group expeditions." />} />
            <Route path="/influencer-trips" element={<FeaturePage title="Influencer Trips" description="Curated visual journeys designed for content creators looking for the perfect cinematic shots." />} />
            <Route path="/travel-journal" element={<FeaturePage title="Travel Journal" description="Document your adventures with our interactive, beautifully designed digital journaling tools." />} />
            <Route path="/emergency-help" element={<FeaturePage title="Emergency Help" description="24/7 satellite-connected support and rapid response teams ensuring your absolute safety." />} />
            <Route path="/sustainability" element={<FeaturePage title="Sustainability" description="Our commitment to preserving the delicate desert ecosystem and supporting local communities." />} />
            <Route path="/eco-tourism" element={<FeaturePage title="Eco Tourism" description="Environmentally responsible travel to natural areas, designed to minimize impact and build awareness." />} />
            <Route path="/investors" element={<FeaturePage title="Investors" description="Join us in revolutionizing the future of luxury desert travel. Discover our roadmap and growth." />} />
            <Route path="/press" element={<FeaturePage title="Press & Media" description="Download our media kit, press releases, and high-resolution cinematic assets." />} />
            <Route path="/careers" element={<FeaturePage title="Careers" description="Build the future of travel tech with a team of passionate engineers and explorers." />} />
            <Route path="/partnerships" element={<FeaturePage title="Partnerships" description="Collaborate with Desertia to bring unparalleled experiences to international travelers." />} />
            <Route path="/affiliates" element={<FeaturePage title="Affiliate Program" description="Earn rewards by referring travelers to our premium desert excursions and stays." />} />
            <Route path="/contact" element={<FeaturePage title="Contact Center" description="Reach out to our dedicated concierge team for personalized trip planning and support." />} />
            <Route path="/help" element={<FeaturePage title="Help Center" description="Find answers to common questions about booking, payments, and preparation." />} />
            <Route path="/faqs" element={<FeaturePage title="FAQs" description="Frequently asked questions about desert travel, safety, packing, and our platform." />} />
            <Route path="/privacy" element={<FeaturePage title="Privacy Policy" description="We value your privacy. Read about how we protect and manage your data." />} />
            <Route path="/terms" element={<FeaturePage title="Terms of Service" description="The rules and guidelines for using the Desertia travel platform." />} />

            {/* Dashboard Routes */}
            <Route path="/admin" element={<DashboardLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
              <Route index element={<DashboardHome />} />
              <Route path="deserts" element={<ManageDeserts />} />
              <Route path="users" element={<ManageUsers />} />
              <Route path="hidden-gems" element={<ManageHiddenGems />} />
              <Route path="activities" element={<ManageActivities />} />
              <Route path="stays" element={<ManageStays />} />
              <Route path="plans" element={<ManageTripPlans />} />
              <Route path="reviews" element={<ReviewsAndRatings />} />
              <Route path="analytics" element={<Analytics />} />
              <Route path="media" element={<MediaLibrary />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
          {showLayout && <Footer />}
          {showFAB && <FloatingActionButton />}
          {showLayout && <Chatbot />}
        </div>
      )}
    </>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isDark = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <BrowserRouter>
      <AppContent
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </BrowserRouter>
  );
}