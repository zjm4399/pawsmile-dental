'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- 🐾 萌爪视觉资产 (SVG Data URI) ---
const PAW_SVG = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiPjxwYXRoIGZpbGw9IiMwMDRENDAiIGQ9Ik0yMjYuNSA5Mi45YzE0LjMgNDIuOS0uMyA4Ni4yLTMyLjYgOTYuOXMtNzAuMy0xNy40LTg0LjYtNjAuM3MuMy04Ni4yIDMyLjYtOTYuOXM3MC4zIDE3LjQgODQuNiA2MC4zem03MC4zIDk2LjljLTMyLjMtMTAuNy00Ni45LTU0LTMyLjYtOTYuOXM1Mi4zLTcxIDg0LjYtNjAuM3M0Ni45IDU0IDMyLjYgOTYuOXMtNTIuMyA3MS04NC42IDYwLjN6TTEwMC40IDMwNC4xYzIzLjctMzUuNSA2MS41LTUyLjggODQuNC0zOC42czIxIDUzLjMtMi43IDg4LjhzLTYxLjUgNTIuOC04NC40IDM4LjZzLTIxLTUzLjMgMi43LTg4Ljh6bTMxMS4yLTM4LjZjMjIuOS0xNC4yIDYwLjcgMy4xIDg0LjQgMzguNnMyNi41IDc0LjYgMi43IDg4LjhzLTYwLjctMy4xLTg0LjQtMzguNnMtMjYuNS03NC42LTIuNy04OC44ek0zMTUuNSAyNDQuNWMyNi4yLTExLjUgMTI2IDQ0LjYgMTExLjggMTI1LjRjLTkuMiA1Mi43LTQ0LjYgMTMwLjEtMTEzLjMgMTQxLjJjLTU3LjQgOS4yLTExMi4xLTQxLjktMTEyLjEtNDEuOXMtNTQuNyA1MS4xLTExMi4xIDQxLjljLTU0LjYtOS4yLTkwLTg2LjYtOTkuMi0xMzkuM2MtMTQuMi04MC44IDg1LjYtMTM2LjkgMTExLjgtMTI1LjRjMjYuMiAxMS41IDQ1LjQgNjMuNSA2Ny44IDYzLjVzNDEuNi01MiA2Ny44LTYzLjV6Ii8+PC9zdmc+";

// --- 🐾 Paw Burst 粒子效果组件 ---
const PawBurst = ({ active }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (active) {
      const interval = setInterval(() => {
        const id = Math.random();
        const newParticle = {
          id,
          x: (Math.random() - 0.5) * 120,
          y: (Math.random() - 0.5) * 120,
          rotate: Math.random() * 360,
          scale: Math.random() * 0.4 + 0.4,
        };
        setParticles(prev => [...prev.slice(-10), newParticle]);
        setTimeout(() => {
          setParticles(prev => prev.filter(p => p.id !== id));
        }, 800);
      }, 100);
      return () => clearInterval(interval);
    } else {
      setParticles([]);
    }
  }, [active]);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10 }}>
      <AnimatePresence>
        {particles.map(p => (
          <motion.img
            key={p.id}
            src={PAW_SVG}
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{ opacity: 0.8, scale: p.scale, x: p.x, y: p.y - 60, rotate: p.rotate }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'absolute', width: 24, height: 24, left: '50%', top: '50%' }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [hoveredEl, setHoveredEl] = useState(null);

  useEffect(() => {
    // 全局注入小爪子光标样式
    const style = document.createElement('style');
    style.innerHTML = `
      * { 
        cursor: url("${PAW_SVG}") 16 16, auto !important; 
      }
      a, button, [role="button"], .interactive {
        cursor: url("${PAW_SVG}") 16 16, pointer !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div style={{ 
      fontFamily: '"Inter", sans-serif', 
      background: '#FEFAE0', // 顶级 D2C 奶油/燕麦底色 (更温润丰富)
      color: '#004D40', // 深海绿 (专业感)
      margin: 0, padding: 0,
      cursor: `url("${PAW_SVG}") 16 16, auto` // 全局小爪子光标
    }}>
      
      {/* 玻璃拟态导航栏 */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{ 
          background: 'rgba(253, 251, 247, 0.85)', 
          backdropFilter: 'blur(20px)',
          padding: '1.5rem 5rem', 
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, 
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(0, 77, 64, 0.05)'
        }}
      >
        <a href="/" style={{ fontSize: '2rem', fontWeight: 900, color: '#004D40', textDecoration: 'none', letterSpacing: '-0.05em' }}>
          Paw<span style={{ color: '#FF7043' }}>Smile</span>🐾
        </a>
        <div style={{ display: 'flex', gap: '3.5rem', alignItems: 'center' }}>
          {['Home', 'Products', 'Science', 'Reviews'].map(item => (
            <motion.a 
              key={item} href={`#${item.toLowerCase()}`}
              whileHover={{ color: '#FF7043' }}
              style={{ color: '#004D40', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}
            >
              {item}
            </motion.a>
          ))}
          <motion.a 
            onHoverStart={() => setHoveredEl('nav-cta')}
            onHoverEnd={() => setHoveredEl(null)}
            whileHover={{ scale: 1.05, background: '#FF7043' }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: '#004D40', color: '#fff', padding: '0.8rem 2rem', borderRadius: 100, 
              textDecoration: 'none', fontWeight: 800, position: 'relative'
            }}
          >
            Try Now
            <PawBurst active={hoveredEl === 'nav-cta'} />
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero 区域：致敬 Glossier 极致留白与质感 */}
      <section style={{ 
        minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 5rem',
        background: 'linear-gradient(135deg, #E0F2F1 0%, #FDFBF7 100%)', position: 'relative', overflow: 'hidden'
      }}>
        <div style={{ maxWidth: 850, position: 'relative', zIndex: 10 }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ color: '#FF7043', fontWeight: 900, letterSpacing: '0.2em', fontSize: '0.9rem', marginBottom: '2rem' }}
          >
            // MODERN PET WELLNESS
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '7rem', fontWeight: 900, lineHeight: 0.85, letterSpacing: '-0.07em', marginBottom: '3rem' }}
          >
            Radiant Smiles<br/>
            <span style={{ color: '#FF7043' }}>& Happy Tails.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            style={{ fontSize: '1.6rem', color: '#4A5568', lineHeight: 1.5, marginBottom: '4rem', maxWidth: 650, fontWeight: 500 }}
          >
            The world's first tech-driven pet oral care ritual. Safe, effective, and loved by pets (and their humans).
          </motion.p>
          <motion.div 
            onHoverStart={() => setHoveredEl('hero-cta')}
            onHoverEnd={() => setHoveredEl(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            style={{ position: 'relative', display: 'inline-block' }}
          >
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ 
                background: '#FF7043', color: '#fff', padding: '1.8rem 4.5rem', borderRadius: 100, 
                fontSize: '1.5rem', fontWeight: 900, textDecoration: 'none', display: 'inline-block',
                boxShadow: '0 20px 40px rgba(255, 112, 67, 0.3)'
              }}
            >
              Shop the Bundle
            </motion.a>
            <PawBurst active={hoveredEl === 'hero-cta'} />
          </motion.div>
        </div>
        
        {/* 产品 3D 悬浮图 */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', right: '5%', width: '45%' }}
        >
          <img src="https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png" style={{ width: '100%', filter: 'drop-shadow(0 60px 100px rgba(0,0,0,0.12))' }} />
        </motion.div>
      </section>

      {/* 信任背书区 */}
      <div style={{ background: '#fff', padding: '5rem', display: 'flex', justifyContent: 'space-around', borderBottom: '1px solid #F1F5F9' }}>
        {[
          { v: '50k+', l: 'Happy Pups' },
          { v: '4.9★', l: 'Vet Approved' },
          { v: '30D', l: 'Risk-Free Trial' },
          { v: 'USA', l: 'Quality Made' }
        ].map((s, i) => (
          <motion.div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#004D40', letterSpacing: '-0.05em' }}>{s.v}</div>
            <div style={{ color: '#FF7043', fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.l}</div>
          </motion.div>
        ))}
      </div>

      {/* 产品系列：艺术画廊风格 */}
      <section id="products" style={{ padding: '10rem 5rem' }}>
        <h2 style={{ fontSize: '5rem', fontWeight: 900, textAlign: 'center', marginBottom: '8rem', letterSpacing: '-0.06em' }}>Our Essentials.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4rem' }}>
          {[
            { t: 'Fresh Water Additive', p: '$24.99', c: '#E0F2F1' },
            { t: 'Sonic Pulse Brush', p: '$19.99', c: '#FFF3E0' },
            { t: 'The Ultimate Ritual', p: '$34.99', c: '#FCE4EC' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -20 }}
              style={{ background: item.c, borderRadius: 50, padding: '4rem', textAlign: 'center', position: 'relative' }}
            >
              <img src="https://sc02.alicdn.com/kf/Ab500ea47c6f1485386abab06f42c7a86R.png" style={{ width: '85%', marginBottom: '3rem', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))' }} />
              <h3 style={{ fontSize: '2.2rem', fontWeight: 900, marginBottom: '0.5rem' }}>{item.t}</h3>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FF7043', marginBottom: '3rem' }}>{item.p}</p>
              <motion.button 
                onHoverStart={() => setHoveredEl(`buy-${i}`)}
                onHoverEnd={() => setHoveredEl(null)}
                whileHover={{ scale: 1.05, background: '#004D40', color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  background: 'transparent', border: '3px solid #004D40', color: '#004D40', 
                  padding: '1.2rem 3rem', borderRadius: 100, fontSize: '1.2rem', fontWeight: 900, position: 'relative'
                }}
              >
                Add to Cart
                <PawBurst active={hoveredEl === `buy-${i}`} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 页脚：深色极致对比 */}
      <footer style={{ background: '#004D40', padding: '10rem 5rem 5rem', color: '#fff' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '10rem', marginBottom: '8rem' }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '2rem' }}>PawSmile🐾</div>
            <p style={{ fontSize: '1.2rem', opacity: 0.6, lineHeight: 1.6, maxWidth: 500 }}>
              Reimagining pet hygiene for the modern age. Because every pet deserves a smile as bright as their soul.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem', color: '#FF7043' }}>PAGES</h4>
            {['Shop All', 'Science', 'Reviews', 'Journal'].map(l => <div key={l} style={{ marginBottom: '1rem', opacity: 0.6 }}>{l}</div>)}
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '2rem', color: '#FF7043' }}>CONNECT</h4>
            {['Instagram', 'TikTok', 'Twitter'].map(l => <div key={l} style={{ marginBottom: '1rem', opacity: 0.6 }}>{l}</div>)}
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '4rem', display: 'flex', justifyContent: 'space-between', opacity: 0.4 }}>
          <span>© 2026 PAWSMILE WELLNESS CO.</span>
          <span>BUILT FOR BEST FRIENDS</span>
        </div>
      </footer>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        html { scroll-behavior: smooth; }
        body { -webkit-font-smoothing: antialiased; }
      `}</style>
    </div>
  );
}
