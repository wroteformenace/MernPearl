import React from "react";
import HeroSection from "./components/HeroSection";
import CompassDock from "./components/Compass";
import Navbar from "./components/Navbar";
// import UniverseCards from "./components/UniverseCards";
import MagicBento from "./components/MagicBento";
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import Ui from './assets/Ui.png'; 
import AI from './assets/Ai.png';
import Dev from './assets/devops.png';
import Mob from './assets/Mob.png';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <div className="navbar-wrap">
        <Navbar />
      </div>

      <main className="cosmic-section">
          <HeroSection />
                    {/* <ScrollStack>
  <ScrollStackItem  backgroundImage={Dev}>
    <h2>DevOps</h2>
    <p>This card has blue color with an image.</p>
  </ScrollStackItem>

  <ScrollStackItem   backgroundImage={Mob}>
    <h2>Mobile App Development</h2>
    <p>This card only has a solid color background.</p>
  </ScrollStackItem>

  <ScrollStackItem backgroundImage={AI}>
    <h2>AI Driven Solutions</h2>
    <p>This card has purple color with an image.</p>
  </ScrollStackItem>

  <ScrollStackItem  backgroundImage={Ui}>
    <h2>User Interface Design</h2>
    <p>This card has a yellow color with a local image.</p>
  </ScrollStackItem>
</ScrollStack> */}


          {/* <UniverseCards /> */}

                <div>
<h2 className="why-title" style={{ color: 'white', fontSize: '2rem', marginBottom: '1rem' }}>
  Why Us?
</h2>
                {/* <MagicBento
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
          /> */}
        </div>

    

          {/* <ProfileCard
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
          /> */}
      </main>

      <CompassDock />
      <Footer />
    </div>
  );
}