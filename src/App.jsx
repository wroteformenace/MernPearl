import React from "react";
import HeroSection from "./components/HeroSection";
import CosmicTechStack from "./components/TechStack";
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
      <CosmicTechStack />
      {/* rest of your sections… */}
    </div>
  );
}
