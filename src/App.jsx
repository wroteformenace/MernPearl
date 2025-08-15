import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";

export default function App(){
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <HeroSection />
      <CompassDock />
      {/* rest of your sections… */}
    </div>
  );
}
