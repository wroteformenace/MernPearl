import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
// import { ParallaxProvider } from "react-scroll-parallax";
// import TechPortals from "./components/TechPortals";
import MagicBento from './components/MagicBento';

export default function App(){
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>
      <div>      <HeroSection /></div>
            <div><UniverseCards /></div>
                  <div>      <MagicBento 
  textAutoHide={true}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  enableTilt={true}
  enableMagnetism={true}
  clickEffect={true}
  spotlightRadius={300}
  particleCount={12}
  glowColor="132, 0, 255"
/></div>
                        <div></div>
      {/* <TechPortals /> */}
      <CompassDock />
      {/* rest of your sections… */}
    </div>
  );
}
