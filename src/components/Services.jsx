import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { 
    title: 'Web Development', 
    desc: 'Crafting high-performance, responsive websites that deliver exceptional user experiences.', 
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    title: 'Mobile Solutions', 
    desc: 'Developing intuitive iOS and Android applications that engage and delight users.', 
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    title: 'AI & Automation', 
    desc: 'Leveraging artificial intelligence to streamline operations and drive intelligent growth.', 
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    title: 'IoT Systems', 
    desc: 'Connecting devices and data to create smart, integrated environments for the future.', 
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000'
  },
  { 
    title: 'UI/UX Design', 
    desc: 'Designing beautiful, user-centric interfaces that blend aesthetics with functionality.', 
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1000'
  },
  { 
    title: 'Cloud Infrastructure', 
    desc: 'Building scalable, secure cloud environments that empower your digital transformation.', 
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1000'
  }
];

const Services = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.service-card');
    
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section id="services" className="container" style={{ padding: '100px 0' }} ref={containerRef}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 700, marginBottom: '1rem' }}>Our Services</h2>
        <p style={{ color: '#475569', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', marginBottom: '3rem' }}>
          We offer comprehensive technology solutions tailored to your business needs, driven by innovation.
        </p>
      </div>

      <div className="services-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {services.map((s, i) => (
          <div 
            key={i} 
            className="service-card glass-card" 
            style={{ 
              padding: '0', 
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              borderRadius: '16px'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '200px', 
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#f1f5f9'
            }}
            className="card-image"
            ></div>
            <div style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#1e293b' }}>{s.title}</h3>
              <p style={{ color: '#475569', fontSize: '1.1rem' }}>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
