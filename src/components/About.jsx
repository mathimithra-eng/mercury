import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.reveal-item');
    
    gsap.fromTo(elements, 
      { opacity: 0, x: -50 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        }
      }
    );
  }, []);

  return (
    <section id="about" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }} ref={sectionRef}>
      <div className="container">
        <div className="about-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '4rem', 
          alignItems: 'center' 
        }}>
          {/* Content side */}
          <div className="about-content">
            <h2 className="reveal-item" style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase' }}>ABOUT</h2>
            <p className="reveal-item" style={{ color: '#475569', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              The name ‘Mercury’ symbolizes fluidity, precision, and speed—qualities that define our team and shape the way we approach every project.
            </p>
            <p className="reveal-item" style={{ color: '#475569', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
              Our 360-degree approach ensures that we consider every angle, delivering holistic solutions that transform industries through AI, design, and innovation.
            </p>
            
            <div className="reveal-item" style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              <div>
                <h4 style={{ color: '#1a7fa0', fontSize: '2.5rem', fontWeight: 700 }}>50+</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem' }}>Projects Delivered</p>
              </div>
              <div>
                <h4 style={{ color: '#1a7fa0', fontSize: '2.5rem', fontWeight: 700 }}>20+</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem' }}>Expert Members</p>
              </div>
              <div>
                <h4 style={{ color: '#1a7fa0', fontSize: '2.5rem', fontWeight: 700 }}>10+</h4>
                <p style={{ color: '#475569', fontSize: '1.1rem' }}>Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image side */}
          <div className="reveal-item about-image" style={{ position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              height: '500px', 
              borderRadius: '24px', 
              backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
            }}>
            </div>
          </div>
        </div>

        {/* Vision/Mission Cards - Added Margin to prevent merging */}
        <div className="vision-cards" style={{ marginTop: '6rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div className="reveal-item glass-card" style={{ padding: '2.5rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a7fa0' }}>Our Vision</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>To become a global leader in intelligent digital transformation—empowering industries through AI, design, and innovation.</p>
          </div>
          <div className="reveal-item glass-card" style={{ padding: '2.5rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a7fa0' }}>Our Mission</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>To craft future-ready experiences by blending creativity, technology, and strategy—driven by purpose, fueled by passion.</p>
          </div>
          <div className="reveal-item glass-card" style={{ padding: '2.5rem' }}>
            <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a7fa0' }}>Innovation</h4>
            <p style={{ color: '#475569', lineHeight: 1.6 }}>We constantly push boundaries, harnessing emerging technologies to shape intelligent solutions for a connected world.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
