import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' }
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(26, 127, 160, 0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ 
            fontSize: '1.2rem', 
            fontWeight: 900, 
            color: '#1e293b', 
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            MERCURY <span style={{ color: '#1a7fa0' }}>TECHNOLOGY</span>
          </div>

          <div className="nav-links-desktop" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                style={{ 
                  textDecoration: 'none', 
                  color: isScrolled ? '#1e293b' : '#1e293b', 
                  fontSize: '0.9rem', 
                  fontWeight: 600,
                  transition: 'all 0.3s ease'
                }}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" style={{
              padding: '0.6rem 1.5rem',
              background: '#1a7fa0',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.9rem'
            }}>
              Contact Us
            </a>
          </div>

          <button 
            className="mobile-toggle"
            onClick={toggleMenu}
            style={{
              display: 'none',
              background: '#1e293b',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              borderRadius: '8px',
              zIndex: 2001
            }}
          >
            <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }}></div>
            <div style={{ width: '14px', height: '2px', background: '#fff', marginLeft: 'auto' }}></div>
          </button>
        </div>
      </nav>

      {/* Floating Mobile Menu - STG Style */}
      <div style={{
        position: 'fixed',
        top: isMenuOpen ? '80px' : '-500px', /* Slide down from top */
        right: '20px',
        width: '280px', /* Fixed width box */
        background: '#0f172a', 
        borderRadius: '20px',
        boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2000,
        opacity: isMenuOpen ? 1 : 0,
        pointerEvents: isMenuOpen ? 'all' : 'none'
      }}>
        {/* Close Button Inside Box */}
        <button 
          onClick={toggleMenu}
          style={{
            position: 'absolute',
            top: '15px',
            right: '15px',
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1.2rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#fff', 
                fontSize: '1.1rem', 
                fontWeight: 600,
                letterSpacing: '0.5px'
              }}
            >
              {item.name}
            </a>
          ))}
          
          <a 
            href="#contact" 
            onClick={() => setIsMenuOpen(false)}
            style={{
              marginTop: '1rem',
              padding: '12px',
              background: '#1a7fa0',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '12px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '0.9rem',
              textTransform: 'uppercase'
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.1)',
            zIndex: 1999
          }}
        />
      )}
    </>
  );
};

export default Navbar;
