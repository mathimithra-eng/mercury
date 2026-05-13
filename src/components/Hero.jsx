import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 100, skewY: 7 }, 
      { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: "power4.out" }
    )
    .fromTo(subTitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
      "-=1"
    )
    .fromTo(ctaRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    );
  }, []);

  return (
    <section id="home" className="hero" style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      textAlign: 'center',
      padding: '0 1rem',
      position: 'relative'
    }}>
      {/* Subtle accent circle behind title */}
      <div style={{
        position: 'absolute',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26, 127, 160, 0.06) 0%, transparent 70%)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none'
      }}></div>

      <div className="hero-content" style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '900px' }}>
        {/* Badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(26, 127, 160, 0.08)',
          border: '1px solid rgba(26, 127, 160, 0.15)',
          borderRadius: '50px',
          padding: '0.5rem 1.25rem',
          marginBottom: '2rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: '#1a7fa0',
          letterSpacing: '0.5px'
        }}>
          <span style={{ width: '6px', height: '6px', background: '#1a7fa0', borderRadius: '50%', boxShadow: '0 0 8px rgba(26, 127, 160, 0.5)' }}></span>
          MERCURY TECHNOLOGY
        </div>

        <div style={{ overflow: 'hidden' }}>
          <h1 ref={titleRef} style={{ 
            fontSize: 'clamp(2.2rem, 8vw, 7rem)', 
            fontWeight: 800, 
            lineHeight: 1.1,
            marginBottom: '1rem',
            background: 'linear-gradient(to bottom, #1e293b, #1a7fa0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Transforming <br /> Ideas Into Reality
          </h1>
        </div>

        <p ref={subTitleRef} style={{ 
          fontSize: 'clamp(0.95rem, 2vw, 1.25rem)', 
          color: '#475569', 
          maxWidth: '600px',
          fontWeight: 400,
          margin: '0 auto',
          padding: '0 0.5rem'
        }}>
          Where innovation meets excellence in AI-driven software development. 
          Transforming businesses with precision and creativity.
        </p>

        <div ref={ctaRef} style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', padding: '0 0.5rem' }}>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '50px',
            border: 'none',
            background: '#1e293b',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(30, 41, 59, 0.2)'
          }}
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-3px)';
            e.target.style.boxShadow = '0 15px 30px rgba(30, 41, 59, 0.3)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(30, 41, 59, 0.2)';
          }}
          >
            Explore Our Work →
          </button>
          <button style={{
            padding: '1rem 2.5rem',
            fontSize: '1rem',
            fontWeight: 600,
            borderRadius: '50px',
            border: '2px solid #e2e8f0',
            background: 'transparent',
            color: '#1e293b',
            cursor: 'pointer',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          onClick={() => {
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onMouseOver={(e) => {
            e.target.style.borderColor = '#1a7fa0';
            e.target.style.color = '#1a7fa0';
            e.target.style.transform = 'translateY(-3px)';
          }}
          onMouseOut={(e) => {
            e.target.style.borderColor = '#e2e8f0';
            e.target.style.color = '#1e293b';
            e.target.style.transform = 'translateY(0)';
          }}
          >
            Get In Touch
          </button>
        </div>
      </div>

    </section>
  );
};

export default Hero;
