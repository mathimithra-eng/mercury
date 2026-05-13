import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current.querySelectorAll('.reveal-item');
    
    elements.forEach((el, index) => {
      gsap.fromTo(el, 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          }
        }
      );
    });
  }, []);

  return (
    <>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image-wrapper {
          width: 100%;
          height: 500px;
          border-radius: 24px;
          background-image: url(https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000);
          background-size: cover;
          background-position: center;
          border: 1px solid rgba(0,0,0,0.05);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .vision-cards {
          margin-top: 6rem;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }

          /* Content first, image second on mobile */
          .about-content {
            order: 1;
          }

          .about-image {
            order: 2;
          }

          .about-image-wrapper {
            height: 280px;
          }

          .vision-cards {
            grid-template-columns: 1fr !important;
            margin-top: 3rem;
            gap: 1.5rem;
          }
        }
      `}</style>

      <section id="about" style={{ padding: '80px 0', background: 'rgba(255,255,255,0.02)' }} ref={sectionRef}>
        <div className="container">
          <div className="about-grid">
            {/* Content side */}
            <div className="about-content">
              <h2 className="reveal-item" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, marginBottom: '1.5rem', textTransform: 'uppercase' }}>ABOUT</h2>
              <p className="reveal-item" style={{ color: '#475569', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                The name 'Mercury' symbolizes fluidity, precision, and speed—qualities that define our team and shape the way we approach every project.
              </p>
              <p className="reveal-item" style={{ color: '#475569', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                We are committed to delivering future-ready software solutions that empower businesses to thrive in the digital age. By blending creative thinking with technical excellence, we help our clients build sustainable growth and industry leadership.
              </p>
              
              <div className="reveal-item" style={{ display: 'flex', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                <div>
                  <h4 style={{ color: '#1a7fa0', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700 }}>50+</h4>
                  <p style={{ color: '#475569', fontSize: '1.1rem' }}>Projects Delivered</p>
                </div>
                <div>
                  <h4 style={{ color: '#1a7fa0', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700 }}>20+</h4>
                  <p style={{ color: '#475569', fontSize: '1.1rem' }}>Expert Members</p>
                </div>
                <div>
                  <h4 style={{ color: '#1a7fa0', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700 }}>10+</h4>
                  <p style={{ color: '#475569', fontSize: '1.1rem' }}>Years Experience</p>
                </div>
              </div>
            </div>

            {/* Image side - goes below content on mobile */}
            <div className="reveal-item about-image" style={{ position: 'relative' }}>
              <div className="about-image-wrapper"></div>
            </div>
          </div>

          {/* Vision/Mission Cards - clearly separated */}
          <div className="vision-cards">
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
    </>
  );
};

export default About;
