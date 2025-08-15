import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import './CosmicTimeline.css';

// Steps array stays the same
const steps = [
  { label: 'Discover', desc: 'Ideation & Research' },
  { label: 'Design', desc: 'Prototyping & UI/UX' },
  { label: 'Build', desc: 'Development & Testing' },
  { label: 'Launch', desc: 'Go Live!' },
  { label: 'Scale', desc: 'Growth & Support' },
];

// Icon placeholder allowing scale via props
function IconPlaceholder({ label, scale }) {
  return (
    <div
      className="cosmic-icon"
      style={{
        transform: `scale(${scale})`,
        transition: 'transform 0.3s ease-out',
      }}
      aria-label={`${label} Icon`}
    >
      {label[0]}
    </div>
  );
}

export default function CosmicTimeline() {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <ParallaxProvider>
      <section className="cosmic-timeline-section">
        <div className="timeline-path">
          {steps.map((step, idx) => {
            const { ref, inView } = useInView({
              threshold: 0.8,
              triggerOnce: false,
            });

            const scale = inView ? 1.3 : 1;

            if (inView && activeIndex !== idx) setActiveIndex(idx);

            // Parallax horizontal movement with stagger based on index
            return (
              <div key={step.label} className="timeline-step" ref={ref}>
                <Parallax translateX={[20 * idx, -20 * idx]} scale={[scale, scale]}>
                  <IconPlaceholder label={step.label} scale={scale} />
                </Parallax>
                <Parallax translateX={[-20 * idx, 20 * idx]}>
                  <div className="timeline-label">{step.label}</div>
                  <div className="timeline-desc">{step.desc}</div>
                </Parallax>
                {idx < steps.length - 1 && <div className="timeline-connector"></div>}
              </div>
            );
          })}
        </div>
      </section>
    </ParallaxProvider>
  );
}
