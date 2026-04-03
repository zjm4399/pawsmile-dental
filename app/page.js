'use client';

export default function Home() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0 }}>
      {/* Navigation */}
      <nav style={{ background: '#fff', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5', textDecoration: 'none' }}>
          Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾
        </a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>Home</a>
          <a href="/products" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Products</a>
          <a href="/about" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Contact Us</a>
      </nav>

      {/* Hero */}
      <section style={{ 
        background: 'linear-gradient(rgba(238, 242, 255, 0.9), rgba(253, 244, 255, 0.9)), url("https://sc02.alicdn.com/kf/Aca60f786b93f405b9b63320035b78252P.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '8rem 2rem', 
        textAlign: 'center' 
      }}>
        <span style={{ display: 'inline-block', background: '#EEF2FF', color: '#4F46E5', padding: '0.5rem 1rem', borderRadius: 50, fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem' }}>🐕 USA Professional Pet Dental Care Brand</span>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '1.5rem', maxWidth: 900, margin: '0 auto 1.5rem', color: '#1E293B', lineHeight: 1.1 }}>
          Give Every Pet a<br/>
          <span style={{ color: '#4F46E5' }}>Healthy, White Smile</span>
        </h1>
        <p style={{ fontSize: '1.35rem', color: '#475569', maxWidth: 700, margin: '0 auto 2.5rem', fontWeight: 500 }}>
          PawSmile focuses on pet oral health, using formulas certified by the US Veterinary Association to help pets stay away from dental calculus and bad breath. Only 30 seconds a day to say goodbye to pet oral troubles.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="/products" style={{ background: '#4F46E5', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>Browse Products →</a>
          <a href="/about" style={{ background: '#F59E0B', color: '#fff', padding: '1rem 2rem', borderRadius: 8, textDecoration: 'none', fontWeight: 700, fontSize: '1.1rem' }}>Learn More</a>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: '#fff', padding: '3rem 2rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center', borderBottom: '1px solid #E2E8F0' }}>
        <div><div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4F46E5' }}>50,000+</div><div style={{ color: '#64748B', fontSize: '1rem', fontWeight: 600 }}>Satisfied Users</div></div>
        <div><div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4F46E5' }}>4.9★</div><div style={{ color: '#64748B', fontSize: '1rem', fontWeight: 600 }}>Average Rating</div></div>
        <div><div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4F46E5' }}>30-Day</div><div style={{ color: '#64748B', fontSize: '1rem', fontWeight: 600 }}>Money-back Guarantee</div></div>
        <div><div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4F46E5' }}>$157B</div><div style={{ color: '#64748B', fontSize: '1rem', fontWeight: 600 }}>US Pet Market</div></div>
      </div>

      {/* Products */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>🔥 Trending Products</h2>
        <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '4rem', fontSize: '1.25rem' }}>Top-rated pet dental care products in the USA market</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
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
            <div key={i} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', transition: 'transform 0.3s' }}>
              <div style={{ width: '100%', height: 280, overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <span style={{ display: 'inline-block', background: p.tag.includes('Best') ? '#FEE2E2' : '#DCFCE7', color: p.tag.includes('Best') ? '#B91C1C' : '#15803D', padding: '0.4rem 1rem', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, marginBottom: '1rem' }}>{p.tag}</span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', color: '#1E293B' }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4F46E5' }}>{p.price}</span>
                  <span style={{ fontSize: '1.1rem', color: '#94A3B8', textDecoration: 'line-through' }}>{p.original}</span>
                </div>
                <a 
                  href="https://buy.stripe.com/mock_link" 
                  style={{ 
                    display: 'block',
                    width: '100%', 
                    padding: '1rem', 
                    background: p.isBundle ? '#F59E0B' : '#4F46E5', 
                    color: '#fff', 
                    textAlign: 'center',
                    textDecoration: 'none',
                    borderRadius: 10, 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    cursor: 'pointer',
                    boxShadow: p.isBundle ? '0 4px 12px rgba(245, 158, 11, 0.3)' : '0 4px 12px rgba(79, 70, 229, 0.3)'
                  }}
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ background: '#F8FAFC', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>Why Choose PawSmile?</h2>
          <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '4rem', fontSize: '1.25rem' }}>Professional, Safe, Effective — The #1 Choice for US Pet Owners</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
            {[
              { icon: '✅', title: 'VOHC Certified', desc: 'Certified by the Veterinary Oral Health Council, effectively reduces plaque and tartar.' },
              { icon: '🌿', title: 'Natural Formula', desc: '100% natural ingredients, no alcohol or preservatives, safe for both cats and dogs.' },
              { icon: '⚡', title: 'Fast Results', desc: 'Fresh breath in 7 days, reduced tartar in 30 days, significant improvement in 90 days.' },
              { icon: '🚚', title: 'US Direct Shipping', desc: 'Shipping from the US, 5-7 business days delivery, free global shipping over $39.' }
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '2rem 1rem', background: '#fff', borderRadius: 20, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
                <div style={{ width: 80, height: 80, background: '#EEF2FF', borderRadius: 25, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', margin: '0 auto 1.5rem' }}>{f.icon}</div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem' }}>{f.title}</h3>
                <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>What Pet Owners Say</h2>
        <p style={{ textAlign: 'center', color: '#64748B', marginBottom: '4rem', fontSize: '1.25rem' }}>Join 50,000+ happy pets and their owners</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {[
            { name: 'Sarah M.', loc: 'California, USA', text: '"My Golden Retriever Max had terrible breath. After 2 weeks of PawSmile, it\'s significantly better! Now I\'m not afraid of him huffing at me 😂"', stars: 5 },
            { name: 'James K.', loc: 'New York, USA', text: '"My cat hates brushing, but this water additive is so easy! Tartar has decreased a lot in a month. Highly recommend!"', stars: 5 },
            { name: 'Emily R.', loc: 'Texas, USA', text: '"The bundle is a great deal. Using the 3-piece set works wonders. The vet said my dog\'s teeth are cleaner! Saved a lot on dental cleaning 💰"', stars: 5 }
          ].map((t, i) => (
            <div key={i} style={{ background: '#fff', padding: '2.5rem', borderRadius: 20, boxShadow: '0 10px 20px rgba(0,0,0,0.05)', border: '1px solid #F1F5F9' }}>
              <div style={{ color: '#F59E0B', fontSize: '1.25rem', marginBottom: '1.5rem' }}>{'⭐'.repeat(t.stars)}</div>
              <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic', color: '#334155' }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: 56, height: 56, background: 'linear-gradient(135deg, #4F46E5, #818CF8)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>{t.name[0]}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#1E293B' }}>{t.name}</div>
                  <div style={{ color: '#64748B', fontSize: '0.9rem', fontWeight: 500 }}>📍 {t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ 
        background: 'linear-gradient(135deg, #4F46E5, #6366F1)', 
        padding: '7rem 2rem', 
        textAlign: 'center', 
        color: '#fff',
        borderRadius: 30,
        margin: '2rem',
        boxShadow: '0 20px 40px rgba(79, 70, 229, 0.3)'
      }}>
        <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>Ready to give your pet a healthy smile?</h2>
        <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '3rem', maxWidth: 800, margin: '0 auto 3rem' }}>
          Order now and get 20% OFF your first order + FREE shipping within the US.<br/>
          30-day money-back guarantee, zero-risk experience.
        </p>
        <a 
          href="https://buy.stripe.com/mock_link" 
          style={{ 
            background: '#F59E0B', 
            color: '#fff', 
            padding: '1.25rem 3rem', 
            borderRadius: 12, 
            textDecoration: 'none', 
            fontSize: '1.5rem', 
            fontWeight: 800, 
            display: 'inline-block',
            boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s'
          }}
        >
          Shop Now — 20% OFF
        </a>
      </section>

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
