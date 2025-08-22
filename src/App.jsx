import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
import MagicBento from "./components/MagicBento";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=1",
    title: "Sarah Johnson",
    subtitle: "Frontend Developer",
    handle: "@sarahjohnson",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
  {
    image: "https://i.pravatar.cc/300?img=2",
    title: "Mike Chen",
    subtitle: "Backend Engineer",
    handle: "@mikechen",
    borderColor: "#b910abff",
    gradient: "linear-gradient(180deg, #b910abff, #000)",
    url: "https://linkedin.com/in/mikechen",
  },
];

export default function App() {
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>

      <main>
        <HeroSection />
        <UniverseCards />
        <MagicBento
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
        />
      </main>

      {/* Uncomment and use these only if needed */}
      {/* 
      <div style={{ height: '600px', position: 'relative' }}>
        <CardSwap
          cardDistance={60}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={true}
        >
          <Card>
            <h3>Card 1</h3>
            <p>
              <img src="./sick.png" alt="AI Driven Solutions" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>
              <img src="./vite.jpg" alt="Vite" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>
              <img src="./logo.png" alt="Logo" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            </p>
          </Card>
        </CardSwap>
      </div>

      <div style={{ height: '600px', position: 'relative' }}>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div> 
      */}

      <CompassDock />
    </div>
  );
}