// In your Layout/Background Component
import { useEffect, useState } from "react";

export default function CosmicBackground() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Map scroll position to a rotation or shift for gradients
  const swirlAngle = 120 + scroll * 0.09; // for a slow "rotation"

  return (
    <div
      className="cosmic-bg"
      style={{
        background: `radial-gradient(circle at 50% 40%, #8442e7 0%, #202020 80%),
                     conic-gradient(from ${swirlAngle}deg at 50% 50%, #b463ff 0 45%, #7b2cbf 60%, transparent 100%)`,
        filter: "blur(32px) saturate(130%)",
        position: "fixed",
        inset: 0,
        zIndex: -3,
        transition: "background 0.4s cubic-bezier(.85, .03, .25, 1)"
      }}
    ></div>
  );
}
