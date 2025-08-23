import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
import MagicBento from "./components/MagicBento";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import localImg from './assets/react.svg'; 

export default function App() {
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>

      <main className="cosmic-section">
          <HeroSection />

          <UniverseCards />

                <div>
                                    <h2 className="why-title" style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
  Why Us?
</h2>
                <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={400}
            particleCount={12}
            glowColor="200, 2, 255"
          />
        </div>

          <ScrollStack>
  <ScrollStackItem backgroundColor="#407AFF" backgroundImage="https://picsum.photos/id/1018/400/300">
    <h2>Card 1</h2>
    <p>This card has blue color with an image.</p>
  </ScrollStackItem>

  <ScrollStackItem backgroundColor="#DD3E58">
    <h2>Card 2</h2>
    <p>This card only has a solid color background.</p>
  </ScrollStackItem>

  <ScrollStackItem backgroundColor="#BA71F5" backgroundImage="https://picsum.photos/id/1021/400/300">
    <h2>Card 3</h2>
    <p>This card has purple color with an image.</p>
  </ScrollStackItem>
</ScrollStack>

    

          <ProfileCard
            name="Javi A. Torres"
            title="Software Engineer"
            handle="javicodes"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/path/to/avatar.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => console.log('Contact clicked')}
          />
      </main>

      <CompassDock />
    </div>
  );
}