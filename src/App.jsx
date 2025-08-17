import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
import TechCubesSection from "./components/TechCubesSection"

export default function App(){
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <HeroSection />
      <UniverseCards />
      <TechCubesSection />
      <CompassDock />
      {/* rest of your sections… */}
    </div>
  );
}
