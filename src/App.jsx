import React from "react";
import HeroSection from "./components/HeroSection";
import CosmicTechStack from "./components/TechStack";
import CompassDock from "./components/Compass";

export default function App(){
  return (
    <div>
      <HeroSection />
      <CompassDock />
      <CosmicTechStack />
      {/* rest of your sections… */}
    </div>
  );
}
