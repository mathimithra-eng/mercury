import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subTitleRef = useRef(null);

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
      padding: '0 1rem'
    }}>
      <div style={{ overflow: 'hidden' }}>
        <h1 ref={titleRef} style={{ 
          fontSize: 'clamp(3rem, 10vw, 7rem)', 
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
        fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
        color: '#475569', 
        maxWidth: '600px',
        fontWeight: 400
      }}>
        Where innovation meets excellence in AI-driven software development. 
        Transforming businesses with precision and creativity.
      </p>
      <div style={{ marginTop: '2.5rem' }}>
        <button style={{
          padding: '1rem 2.5rem',
          fontSize: '1rem',
          fontWeight: 600,
          borderRadius: '50px',
          border: 'none',
          background: '#1e293b',
          color: '#fff',
          cursor: 'pointer',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 10px 20px rgba(30, 41, 59, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = 'none';
        }}
        >
          Explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
