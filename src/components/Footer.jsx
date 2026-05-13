import React, { useState } from 'react';

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (type) => {
    setModalContent(type);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalContent(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <footer style={{ 
      padding: '60px 0 30px', 
      background: '#f8faff', 
      color: '#1e293b',
      borderTop: '1px solid #e2e8f0',
      position: 'relative',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '3rem',
          marginBottom: '50px'
        }}>
          
          {/* Column 1: Branding */}
          <div className="footer-col" style={{ marginBottom: '1.5rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1e293b', letterSpacing: '1px' }}>
              MERCURY <span style={{ color: '#1a7fa0' }}>TECHNOLOGY</span>
            </div>
            <p style={{ color: '#1a7fa0', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              Global Software Powerhouse
            </p>
            <p style={{ color: '#475569', lineHeight: '1.6', fontSize: '0.9rem', maxWidth: '350px' }}>
              Driving digital transformation through strategic innovation and intelligent software solutions. We build the infrastructure for the next generation of business.
            </p>
          </div>

          {/* Column 2: Platform */}
          <div className="footer-col" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#1a7fa0', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>Platform</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {['Home', 'About', 'Services', 'Solutions'].map(link => (
                <li key={link} style={{ marginBottom: '0.75rem' }}>
                  <a href={`#${link.toLowerCase()}`} style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s ease' }}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="footer-col" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#1a7fa0', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <a href="#contact" style={{ color: '#475569', textDecoration: 'none' }}>Help Center</a>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button onClick={() => openModal('terms')} style={{ background: 'none', border: 'none', padding: 0, color: '#475569', cursor: 'pointer', fontSize: '0.9rem' }}>Terms & Service</button>
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <button onClick={() => openModal('privacy')} style={{ background: 'none', border: 'none', padding: 0, color: '#475569', cursor: 'pointer', fontSize: '0.9rem' }}>Privacy Policy</button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-col" style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ color: '#1a7fa0', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '1px' }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="https://www.instagram.com/merc_urytechnology?igsh=NGRxY28wYnBnenJk" target="_blank" rel="noopener noreferrer" style={{ color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a7fa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
                Instagram
              </a>
              <a href="#" style={{ color: '#475569', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a7fa0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bottom-bar" style={{ 
          borderTop: '1px solid #e2e8f0', 
          paddingTop: '30px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Mercury Tech. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
            <span style={{ width: '8px', height: '8px', background: '#22c55e', borderRadius: '50%', display: 'inline-block', boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)' }}></span>
            MERCURY TECH OPERATIONS
          </div>
        </div>
      </div>

      {/* Modal with Corrected Point Alignment and Scroll Prevention */}
      {modalContent && (
        <div style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.85)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 10000,
          padding: '1rem',
          backdropFilter: 'blur(5px)'
        }} onClick={closeModal}>
          <div style={{
            background: '#fff',
            width: '100%',
            maxWidth: '850px',
            maxHeight: '90vh',
            borderRadius: '24px',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
          }} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: '#f1f5f9',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              cursor: 'pointer',
              zIndex: 10
            }}>✕</button>
            
            <div style={{
              height: '180px',
              backgroundImage: modalContent === 'terms' 
                ? 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000)' 
                : 'url(https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              padding: '1rem',
              flexShrink: 0
            }}>
              <div style={{ background: 'rgba(30, 41, 59, 0.8)', padding: '1.5rem', borderRadius: '16px', backdropFilter: 'blur(10px)' }}>
                <h2 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>{modalContent === 'terms' ? 'Terms & Service' : 'Privacy Policy'}</h2>
                <p style={{ fontSize: '0.85rem', opacity: 0.9 }}>Mercury Tech Operational Guidelines</p>
              </div>
            </div>
            
            <div 
              data-lenis-prevent 
              style={{ 
                flex: 1, 
                padding: '1.5rem', 
                overflowY: 'auto', 
                background: '#fff',
                scrollBehavior: 'smooth'
              }}
            >
              <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                {[
                  { title: 'Data Integrity', text: 'We ensure absolute accuracy and sub-second precision in all Mercury intelligence systems.' },
                  { title: 'Operational Privacy', text: 'Your industrial data is encrypted at the edge and never shared with third-party entities.' },
                  { title: 'Service Continuity', text: 'We guarantee 99.9% uptime for all Cloud Infrastructure and Automation deployments.' },
                  { title: 'Legal Compliance', text: 'All solutions strictly adhere to global software and security governance standards.' },
                  { title: 'Intellectual Property', text: 'All proprietary algorithms developed by Mercury Technology remain the exclusive property of the company.' },
                  { title: 'Client Confidentiality', text: 'We maintain strict non-disclosure agreements regarding all client operations and data architectures.' }
                ].map((item, idx) => (
                  <div key={idx} style={{ marginBottom: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: '#1a7fa0', fontWeight: 800, flexShrink: 0, fontSize: '0.9rem' }}>
                      {idx + 1}.
                    </div>
                    <div style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      <span style={{ fontWeight: 800, color: '#1e293b', marginRight: '5px' }}>{item.title}:</span> 
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <button 
        onClick={scrollToTop}
        style={{ 
          position: 'absolute',
          right: '20px',
          bottom: '20px',
          width: '40px',
          height: '40px',
          borderRadius: '4px',
          background: '#1a7fa0',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '1.2rem',
          boxShadow: '0 5px 15px rgba(26, 127, 160, 0.2)'
        }}
      >
        ↑
      </button>
    </footer>
  );
};

export default Footer;
