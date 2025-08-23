import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
import UniverseCards from "./components/UniverseCards";
import MagicBento from "./components/MagicBento";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import ProfileCard from "./components/ProfileCard";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>

      <main className="cosmic-section">
          <HeroSection />

          <UniverseCards />

          <h2 className="services-title">Why Us?</h2>
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
            glowColor="132, 0, 255"
          />

          <ScrollStack>
  <ScrollStackItem>
    <div
      className="scroll-stack-card"
      style={{ "--bg-image": `url('https://picsum.photos/800/600?1')` }}
    >
      <div className="scroll-stack-card-content">
        <h2>Card 1</h2>
        <p>This is the first card in the stack</p>
      </div>
    </div>
  </ScrollStackItem>

  <ScrollStackItem>
    <div
      className="scroll-stack-card"
      style={{ "--bg-image": `url('https://picsum.photos/800/600?2')` }}
    >
      <div className="scroll-stack-card-content">
        <h2>Card 2</h2>
        <p>This is the second card in the stack</p>
      </div>
    </div>
  </ScrollStackItem>

  <ScrollStackItem>
    <div
      className="scroll-stack-card"
      style={{ "--bg-image": `url('/assets/localImage.jpg')` }} // 👈 local image example
    >
      <div className="scroll-stack-card-content">
        <h2>Card 3</h2>
        <p>This is the third card in the stack</p>
      </div>
    </div>
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