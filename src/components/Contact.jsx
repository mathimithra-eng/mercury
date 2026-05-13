import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Hide message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: '#f0f4f8' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          
          {/* Left: Contact Form */}
          <div className="glass-card contact-form" style={{ padding: '3rem', background: '#ffffff' }}>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#1e293b' }}>Send Us a Message</h3>
            
            {submitted ? (
              <div style={{ 
                padding: '2rem', 
                background: '#dcfce7', 
                color: '#166534', 
                borderRadius: '12px', 
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '1.25rem',
                border: '1px solid #bbf7d0'
              }}>
                ✅ Message sent successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>First Name</label>
                  <input required type="text" placeholder="John" style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Last Name</label>
                  <input required type="text" placeholder="Doe" style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Email Address</label>
                  <input required type="email" placeholder="john@company.com" style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Phone Number</label>
                  <input required type="text" placeholder="+91 98765 43210" style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Service of Interest</label>
                  <select style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', fontSize: '1rem' }}>
                    <option>Web Development</option>
                    <option>Mobile Solutions</option>
                    <option>AI & Automation</option>
                    <option>IoT Systems</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                  <label style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Your Message</label>
                  <textarea required placeholder="Tell us about your project..." rows="4" style={{ padding: '0.85rem', borderRadius: '8px', border: '1px solid #e2e8f0', background: '#f8fafc', resize: 'none', fontSize: '1rem' }}></textarea>
                </div>
                <button type="submit" style={{ 
                  gridColumn: 'span 2', 
                  padding: '1.25rem', 
                  borderRadius: '8px', 
                  border: 'none', 
                  background: '#1e293b', 
                  color: '#fff', 
                  fontWeight: 600, 
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  transition: 'background 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.background = '#334155'}
                onMouseOut={(e) => e.target.style.background = '#1e293b'}
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Right: Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: '#1e293b', lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Let's Build Something <span style={{ color: '#1a7fa0' }}>Extraordinary</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '500px' }}>
              We're here to help you navigate the future. Reach out to our team of experts and let's start your digital transformation journey today.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h4 style={{ fontSize: '1rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Contact Info</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1e293b' }}>+91 80568 23309</p>
                <p style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1e293b' }}>info@mercurytech.in</p>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.75rem' }}>Office Locations</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  <p style={{ color: '#475569', fontWeight: 500, fontSize: '1.1rem' }}>• Thanjavur</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '4rem', padding: '2.5rem', borderLeft: '4px solid #1a7fa0', background: 'rgba(26, 127, 160, 0.05)' }}>
              <p style={{ fontStyle: 'italic', color: '#1e293b', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                "The name Mercury symbolizes fluidity and precision. Every product we ship is a direct expression of the innovation within our team."
              </p>
              <h5 style={{ fontWeight: 700, color: '#1e293b', fontSize: '1.1rem' }}>— CEO & Founder</h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
