import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
// import { ParallaxProvider } from "react-scroll-parallax";
// import TechPortals from "./components/TechPortals";
// import SplashCursor from "./components/Splashcursor";

export default function App(){
  return (
    <div>
      {/* <SplashCursor /> */}
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <HeroSection />
      <UniverseCards />
      {/* <TechPortals /> */}
      <CompassDock />
      {/* rest of your sections… */}
    </div>
  );
}
