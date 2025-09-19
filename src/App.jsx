import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import BookingPage from "./components/BookingPage";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ProjectParallaxShowcase from "./components/ProjectSlideShow";
import TechStackShowcase from "./components/TechStackShowcase";
import "./App.css";

function AppContent() {
  const location = useLocation();

  // Detect if you're on the booking page
  const isBookingPage = location.pathname === "/book";

  return (
    <div>
      {/* Show Navbar only if NOT booking page */}
      {!isBookingPage && (
        <div className="navbar-wrap">
          <Navbar />
        </div>
      )}

      <main className="cosmic-section">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <Services />
              <ProjectParallaxShowcase />
              <TechStackShowcase />
              <Testimonials />
            </>
          } />
          <Route path="/book" element={<BookingPage />} />
        </Routes>
      </main>

      {/* Show CompassDock and Footer only if NOT booking page */}
      {!isBookingPage && <>
        <CompassDock />
        <Footer />
      </>}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}