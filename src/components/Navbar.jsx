import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        background: isScrolled ? 'rgba(255,255,255,0.98)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(15px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(26,127,160,0.1)' : 'none',
        zIndex: 1000,
        transition: 'all 0.4s cubic-bezier(0.4,0,0.2,1)',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', padding: '0 2rem' }}>
        <div className="logo" style={{ fontSize: '1.2rem', fontWeight: 900, color: '#1e293b', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          MERCURY <span style={{ color: '#1a7fa0' }}>TECHNOLOGY</span>
        </div>

        {/* Desktop navigation */}
        <div className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{
                textDecoration: 'none',
                color: '#475569',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#1a7fa0')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#475569')}
            >
              {item.name}
            </a>
          ))}
          <button onClick={toggleDarkMode} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', color: '#475569' }}>
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ display: 'none', background: 'transparent', border: 'none', cursor: 'pointer' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile sliding menu */}
      <div className="mobile-menu" style={{ position: 'fixed', top: menuOpen ? '80px' : '-500px', right: '20px', width: '260px', background: '#0f172a', borderRadius: '12px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column', padding: '1.5rem', transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)', zIndex: 2000, opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}>
        {navLinks.map((item) => (
          <a key={item.name} href={item.href} onClick={toggleMenu} style={{ textDecoration: 'none', color: '#fff', fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
