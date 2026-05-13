import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  { 
    name: 'Mercury Capture', 
    category: 'INDUSTRIAL INTELLIGENCE',
    desc: 'Advanced data acquisition systems for industrial intelligence. Our sensor-driven platforms capture sub-second data points to provide deep operational visibility.',
    points: [
      'Real-time data streaming',
      'Edge computing capabilities',
      'Seamless ERP integration'
    ],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    name: 'Mercury Fleet', 
    category: 'LOGISTICS & TRANSPORT',
    desc: 'Real-time logistics and fleet management for modern transport. Optimize routes, reduce fuel consumption, and ensure driver safety with our AI-powered fleet suite.',
    points: [
      'Route optimization AI',
      'Fuel & Maintenance tracking',
      'Driver behavior analytics'
    ],
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    name: 'Mercury Telematics', 
    category: 'VEHICLE DIAGNOSTICS',
    desc: 'Deep vehicle diagnostics and performance monitoring. Get under the hood of your entire mobile asset base with high-precision telematics data.',
    points: [
      'Engine health monitoring',
      'Live GPS tracking',
      'Incident reconstruction'
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    name: 'Mercury Agri', 
    category: 'SMART AGRICULTURE',
    desc: 'Smart farming solutions powered by IoT and automation. Transform traditional agriculture into a data-driven precision operation.',
    points: [
      'Soil moisture sensing',
      'Automated irrigation',
      'Crop health monitoring'
    ],
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=1000'
  }
];

const Products = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      const isEven = index % 2 === 0;
      const content = section.querySelector('.content');
      const image = section.querySelector('.image-box');

      gsap.fromTo(content, 
        { opacity: 0, x: isEven ? -50 : 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );

      gsap.fromTo(image, 
        { opacity: 0, scale: 0.9 },
        { 
          opacity: 1, 
          scale: 1, 
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="solutions" style={{ padding: '100px 0', background: '#ffffff' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem', color: '#1e293b' }}>Smart Solutions</h2>
        <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          Reshaping industries with automation, AI, and cutting-edge innovation.
        </p>
      </div>

      <div>
        {products.map((p, i) => (
          <div 
            key={i} 
            ref={el => sectionsRef.current[i] = el}
            className="solution-row"
            style={{ 
              display: 'flex', 
              flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              minHeight: '600px',
              width: '100%',
              marginBottom: '4rem',
              overflow: 'hidden'
            }}
          >
            {/* Image side */}
            <div className="image-box solution-image" style={{ 
              flex: 1, 
              height: '100%', 
              minHeight: '600px',
              backgroundImage: `url(${p.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative'
            }}>
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(30, 41, 59, 0.1)' }}></div>
            </div>

            {/* Content side */}
            <div className="content solution-content" style={{ 
              flex: 1, 
              padding: '4rem',
              background: i % 2 === 0 ? '#f8faff' : '#ffffff'
            }}>
              <h4 style={{ color: '#1a7fa0', fontSize: '0.9rem', fontWeight: 700, letterSpacing: '2px', marginBottom: '1rem' }}>
                {p.category}
              </h4>
              <h3 style={{ fontSize: '3rem', fontWeight: 800, color: '#1e293b', marginBottom: '1.5rem', lineHeight: 1.1 }}>
                {p.name}
              </h3>
              <p style={{ fontSize: '1.25rem', color: '#475569', marginBottom: '2rem', lineHeight: 1.6 }}>
                {p.desc}
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {p.points.map((pt, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: '#1e293b', fontWeight: 500, fontSize: '1.1rem' }}>
                    <span style={{ color: '#1a7fa0', fontSize: '1.5rem' }}>•</span> {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
