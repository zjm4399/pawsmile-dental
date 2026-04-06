'use client';

import { motion } from 'framer-motion';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ 
          background: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)',
          padding: '0.75rem 2.5rem', 
          position: 'sticky', 
          top: 0, 
          zIndex: 100, 
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(241, 245, 249, 1)'
        }}
      >
        <a href="/" style={{ fontSize: '1.75rem', fontWeight: 900, color: '#4F46E5', textDecoration: 'none', letterSpacing: '-0.025em' }}>
          Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾
        </a>
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'none', fontSize: '1rem' }}>Home</a>
          <a href="/products" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none', fontSize: '1rem' }}>Products</a>
          <a href="/about" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none', fontSize: '1rem' }}>About</a>
          <a href="/contact" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none', fontSize: '1rem' }}>Contact</a>
        </div>
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/contact" 
          style={{ 
            background: '#4F46E5', 
            color: '#fff', 
            padding: '0.6rem 1.75rem', 
            borderRadius: 12, 
            textDecoration: 'none', 
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 4px 14px rgba(79, 70, 229, 0.3)',
            transition: 'all 0.2s'
          }}
        >
          Get Started
        </motion.a>
      </motion.nav>

      {/* Hero */}
      <section style={{ 
        background: 'radial-gradient(circle at top right, rgba(238, 242, 255, 0.8), transparent), radial-gradient(circle at bottom left, rgba(253, 244, 255, 0.8), transparent), #FFFFFF',
        padding: '10rem 2rem 8rem', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Subtle Background Pattern/Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundImage: 'url("https://sc02.alicdn.com/kf/Aca60f786b93f405b9b63320035b78252P.png")',
            backgroundSize: '800px',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right -200px top -100px',
            pointerEvents: 'none'
          }}
        ></motion.div>

        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          style={{ position: 'relative', zIndex: 1 }}
        >
          <motion.span 
            variants={fadeInUp}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(238, 242, 255, 1)', 
              color: '#4F46E5', 
              padding: '0.5rem 1.25rem', 
              borderRadius: 100, 
              fontSize: '0.9rem', 
              fontWeight: 700, 
              marginBottom: '2rem',
              border: '1px solid rgba(199, 210, 254, 0.5)'
            }}
          >
            🇺🇸 USA Professional Pet Dental Care Brand
          </motion.span>
          <motion.h1 
            variants={fadeInUp}
            style={{ 
              fontSize: '4.5rem', 
              fontWeight: 900, 
              marginBottom: '1.5rem', 
              maxWidth: 1000, 
              margin: '0 auto 1.5rem', 
              color: '#0F172A', 
              lineHeight: 1.05,
              letterSpacing: '-0.04em'
            }}
          >
            Give Every Pet a<br/>
            <motion.span 
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
              style={{ 
                color: '#4F46E5', 
                background: 'linear-gradient(135deg, #4F46E5, #818CF8, #4F46E5)', 
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text', 
                WebkitTextFillColor: 'transparent' 
              }}
            >
              Healthy, White Smile
            </motion.span>
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            style={{ 
              fontSize: '1.4rem', 
              color: '#475569', 
              maxWidth: 750, 
              margin: '0 auto 3rem', 
              fontWeight: 500,
              lineHeight: 1.6
            }}
          >
            PawSmile focuses on pet oral health, using formulas certified by the US Veterinary Association to help pets stay away from dental calculus and bad breath.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}
          >
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(79, 70, 229, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              href="/products" 
              style={{ 
                background: '#4F46E5', 
                color: '#fff', 
                padding: '1.1rem 2.5rem', 
                borderRadius: 14, 
                textDecoration: 'none', 
                fontWeight: 800, 
                fontSize: '1.15rem',
                boxShadow: '0 10px 25px rgba(79, 70, 229, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              Browse Products →
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(245, 158, 11, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              href="/about" 
              style={{ 
                background: '#F59E0B', 
                color: '#fff', 
                padding: '1.1rem 2.5rem', 
                borderRadius: 14, 
                textDecoration: 'none', 
                fontWeight: 800, 
                fontSize: '1.15rem',
                boxShadow: '0 10px 25px rgba(245, 158, 11, 0.2)',
                transition: 'all 0.2s'
              }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats - Vibe Style */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        style={{ 
          background: '#fff', 
          padding: '4rem 2.5rem', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(4, 1fr)', 
          gap: '2rem', 
          textAlign: 'center', 
          maxWidth: 1400,
          margin: '0 auto',
          borderBottom: '1px solid #F1F5F9'
        }}
      >
        {[
          { label: 'Satisfied Users', value: '50,000+' },
          { label: 'Average Rating', value: '4.9★' },
          { label: 'Refund Guarantee', value: '30-Day' },
          { label: 'US Pet Market', value: '$1.57B' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div style={{ fontSize: '3rem', fontWeight: 900, color: '#4F46E5', letterSpacing: '-0.05em' }}>{stat.value}</div>
            <div style={{ color: '#94A3B8', fontSize: '0.95rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.5rem' }}>{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Products */}
      <section style={{ padding: '8rem 2rem', maxWidth: 1300, margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-0.04em' }}
        >
          Trending Products
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', color: '#64748B', marginBottom: '5rem', fontSize: '1.25rem', fontWeight: 500 }}
        >
          Top-rated pet dental care solutions for the modern home
        </motion.p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {[
            { 
              img: 'https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png', 
              tag: '🔥 Best Seller', 
              title: 'Pet Dental Water Additive', 
              desc: 'Add directly to the water bowl. Daily drinking prevents tartar and removes bad breath. VOHC certified, safe and no side effects.', 
              price: '$24.99', 
              original: '$39.99' 
            },
            { 
              img: 'https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png', 
              tag: '⭐ Highly Rated', 
              title: 'Ultrasonic Toothbrush Kit', 
              desc: 'Easy to use, soft bristles for gum protection, 3 replacement heads. For cats and dogs, works better with toothpaste.', 
              price: '$19.99', 
              original: '$29.99' 
            },
            { 
              img: 'https://sc02.alicdn.com/kf/Ab500ea47c6f1485386abab06f42c7a86R.png', 
              tag: '✨ Launch Special', 
              title: 'Ultimate Oral Care Bundle', 
              desc: 'Water additive + Toothbrush + Dental gel. Complete care for plaque, tartar, and breath issues. The #1 recommendation.', 
              price: '$34.99', 
              original: '$54.99',
              isBundle: true
            }
          ].map((p, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ 
                background: '#fff', 
                borderRadius: 32, 
                overflow: 'hidden', 
                boxShadow: '0 20px 50px rgba(0,0,0,0.06)', 
                border: '1px solid #F1F5F9'
              }}
            >
              <div style={{ width: '100%', height: 320, overflow: 'hidden', position: 'relative' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 20, left: 20 }}>
                  <span style={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    backdropFilter: 'blur(4px)',
                    color: p.tag.includes('Best') ? '#B91C1C' : '#15803D', 
                    padding: '0.5rem 1.25rem', 
                    borderRadius: 100, 
                    fontSize: '0.8rem', 
                    fontWeight: 800,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}>{p.tag}</span>
                </div>
              </div>
              <div style={{ padding: '2.5rem' }}>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: '#0F172A', letterSpacing: '-0.02em' }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.6, fontWeight: 500 }}>{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                  <span style={{ fontSize: '2.25rem', fontWeight: 900, color: '#4F46E5', letterSpacing: '-0.04em' }}>{p.price}</span>
                  <span style={{ fontSize: '1.25rem', color: '#94A3B8', textDecoration: 'line-through', fontWeight: 600 }}>{p.original}</span>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.02, boxShadow: p.isBundle ? '0 15px 30px rgba(245, 158, 11, 0.4)' : '0 15px 30px rgba(79, 70, 229, 0.4)' }}
                  whileTap={{ scale: 0.98 }}
                  href="https://buy.stripe.com/mock_link" 
                  style={{ 
                    display: 'block',
                    width: '100%', 
                    padding: '1.25rem', 
                    background: p.isBundle ? '#F59E0B' : '#4F46E5', 
                    color: '#fff', 
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: 16, 
                    fontSize: '1.2rem', 
                    fontWeight: 800, 
                    cursor: 'pointer',
                    boxShadow: p.isBundle ? '0 10px 20px rgba(245, 158, 11, 0.25)' : '0 10px 20px rgba(79, 70, 229, 0.25)',
                    transition: 'all 0.2s'
                  }}
                >
                  Buy Now
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#F8FAFC', padding: '10rem 2rem' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}
          >
            Why Choose PawSmile?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ textAlign: 'center', color: '#64748B', marginBottom: '6rem', fontSize: '1.35rem', fontWeight: 500 }}
          >
            Professional, Safe, Effective — The #1 Choice for US Pet Owners
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3rem' }}>
            {[
              { icon: '✅', title: 'VOHC Certified', desc: 'Certified by the Veterinary Oral Health Council, effectively reduces plaque and tartar.' },
              { icon: '🌿', title: 'Natural Formula', desc: '100% natural ingredients, no alcohol or preservatives, safe for both cats and dogs.' },
              { icon: '⚡', title: 'Fast Results', desc: 'Fresh breath in 7 days, reduced tartar in 30 days, significant improvement in 90 days.' },
              { icon: '🚚', title: 'Direct Shipping', desc: 'Shipping from the US, 5-7 business days delivery, free global shipping over $39.' }
            ].map((f, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ textAlign: 'center', padding: '3.5rem 2rem', background: '#fff', borderRadius: 32, boxShadow: '0 10px 30px rgba(0,0,0,0.02)', border: '1px solid #F1F5F9' }}
              >
                <div style={{ width: 100, height: 100, background: '#EEF2FF', borderRadius: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem', margin: '0 auto 2rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.25rem', color: '#0F172A' }}>{f.title}</h3>
                <p style={{ color: '#64748B', fontSize: '1.05rem', lineHeight: 1.6, fontWeight: 500 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '10rem 2rem', maxWidth: 1300, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3.5rem', fontWeight: 900, marginBottom: '1.25rem', letterSpacing: '-0.04em' }}>What Pet Owners Say</h2>
        <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '6rem', fontSize: '1.35rem', fontWeight: 500 }}>Join 50,000+ happy pets and their owners</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
          {[
            { name: 'Sarah M.', loc: 'California, USA', text: '"My Golden Retriever Max had terrible breath. After 2 weeks of PawSmile, it\'s significantly better! Now I\'m not afraid of him huffing at me 😂"', stars: 5 },
            { name: 'James K.', loc: 'New York, USA', text: '"My cat hates brushing, but this water additive is so easy! Tartar has decreased a lot in a month. Highly recommend!"', stars: 5 },
            { name: 'Emily R.', loc: 'Texas, USA', text: '"The bundle is a great deal. Using the 3-piece set works wonders. The vet said my dog\'s teeth are cleaner! Saved a lot on dental cleaning 💰"', stars: 5 }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ background: '#fff', padding: '3.5rem', borderRadius: 32, boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9' }}
            >
              <div style={{ color: '#F59E0B', fontSize: '1.5rem', marginBottom: '2rem' }}>{'⭐'.repeat(t.stars)}</div>
              <p style={{ fontSize: '1.2rem', lineHeight: 1.8, marginBottom: '2.5rem', fontWeight: 500, color: '#334155' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{ width: 64, height: 64, background: 'linear-gradient(135deg, #4F46E5, #818CF8)', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.75rem' }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#0F172A' }}>{t.name}</div>
                  <div style={{ color: '#94A3B8', fontSize: '0.95rem', fontWeight: 600 }}>📍 {t.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{ 
          background: 'linear-gradient(135deg, #4F46E5, #6366F1)', 
          padding: '10rem 2rem', 
          textAlign: 'center', 
          color: '#fff',
          borderRadius: 48,
          margin: '2rem',
          boxShadow: '0 30px 60px rgba(79, 70, 229, 0.4)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2rem', letterSpacing: '-0.04em', lineHeight: 1 }}>Ready to give your pet<br/>a healthy smile?</h2>
          <p style={{ fontSize: '1.6rem', opacity: 0.9, marginBottom: '4rem', maxWidth: 900, margin: '0 auto 4rem', fontWeight: 500, lineHeight: 1.6 }}>
            Order now and get 20% OFF your first order + FREE shipping within the US.
          </p>
          <motion.a 
            whileHover={{ scale: 1.1, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
            whileTap={{ scale: 0.9 }}
            href="https://buy.stripe.com/mock_link" 
            style={{ 
              background: '#F59E0B', 
              color: '#fff', 
              padding: '1.5rem 4rem', 
              borderRadius: 20, 
              textDecoration: 'none', 
              fontSize: '1.75rem', 
              fontWeight: 900, 
              display: 'inline-block',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              transition: 'all 0.2s'
            }}
          >
            Shop Now — 20% OFF
          </motion.a>
        </div>
      </motion.section>

      {/* Footer */}
      <footer style={{ background: '#1E293B', color: '#94A3B8', padding: '5rem 2rem 3rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem' }}>
          <div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1.5rem' }}>
              Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾
            </div>
            <p style={{ fontSize: '1rem', lineHeight: 1.8 }}>
              USA Professional Pet Dental Care Brand. Focused on pet health, giving your pets a healthy, white smile. VOHC certified, safe and effective.
            </p>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="/products" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>Water Additive</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="/products" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>Pet Toothbrush</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="/products" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>Care Bundle</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem' }}><a href="/about" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>About Us</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>FAQ</a></li>
              <li style={{ marginBottom: '0.75rem' }}><a href="/contact" style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '1rem' }}>Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.75rem', color: '#94A3B8', fontSize: '1rem' }}>📧 support@pawsmile.com</li>
              <li style={{ marginBottom: '0.75rem', color: '#94A3B8', fontSize: '1rem' }}>📍 Los Angeles, CA, USA</li>
              <li style={{ marginBottom: '0.75rem', color: '#94A3B8', fontSize: '1rem' }}>⏰ Mon-Fri 9AM-6PM PST</li>
            </ul>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '4rem auto 0', paddingTop: '2rem', borderTop: '1px solid #334155', display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 500 }}>
          <span>© 2026 PawSmile™ Pet Wellness. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#94A3B8', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
