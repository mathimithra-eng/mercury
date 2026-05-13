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
          {/* Logo - Updated to MERCURY TECHNOLOGY */}
          <div className="logo" style={{ 
            fontSize: '1.2rem', 
            fontWeight: 900, 
            color: '#1e293b', 
            letterSpacing: '0.5px',
            textTransform: 'uppercase'
          }}>
            MERCURY <span style={{ color: '#1a7fa0' }}>TECHNOLOGY</span>
          </div>

          {/* Desktop Menu */}
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
                  transition: 'all 0.3s ease',
                  letterSpacing: '0.5px'
                }}
                onMouseOver={(e) => e.target.style.color = '#1a7fa0'}
                onMouseOut={(e) => e.target.style.color = '#1e293b'}
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
              fontSize: '0.9rem',
              transition: 'transform 0.3s ease',
              boxShadow: '0 4px 15px rgba(26, 127, 160, 0.2)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Toggle */}
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
              zIndex: 1001
            }}
          >
            <div style={{ width: '20px', height: '2px', background: '#fff', marginBottom: '5px' }}></div>
            <div style={{ width: '14px', height: '2px', background: '#fff', marginLeft: 'auto' }}></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: isMenuOpen ? 0 : '-100%',
        width: '55%',
        height: '100vh',
        background: '#0f172a', 
        boxShadow: '-15px 0 40px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        padding: '100px 30px 40px',
        transition: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 2000
      }}>
        {/* Close Button */}
        <button 
          onClick={toggleMenu}
          style={{
            position: 'absolute',
            top: '30px',
            right: '30px',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '2rem',
            cursor: 'pointer'
          }}
        >
          ✕
        </button>

        {/* Links List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              onClick={() => setIsMenuOpen(false)}
              style={{ 
                textDecoration: 'none', 
                color: '#fff', 
                fontSize: '1.25rem', 
                fontWeight: 700,
                letterSpacing: '1px',
                opacity: 0.9
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
              padding: '1rem',
              background: '#1a7fa0',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px',
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}
          >
            Contact Us
          </a>
        </div>

        <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Mercury - Innovation</p>
          <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.85rem' }}>Building the Future.</p>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          onClick={toggleMenu}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 1999
          }}
        />
      )}
    </>
  );
};

export default Navbar;
