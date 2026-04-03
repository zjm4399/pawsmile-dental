'use client';

export default function Contact() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: '#F8FAFC', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5', textDecoration: 'none' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Home</a>
          <a href="/products" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Products</a>
          <a href="/about" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Contact Us</a>
      </nav>

      <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)', padding: '5rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1rem' }}>📬 Contact Us</h1>
        <p style={{ color: '#475569', fontSize: '1.4rem', fontWeight: 500 }}>Any questions or feedback? We're here to help!</p>
      </div>

      <section style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          {/* Info */}
          <div>
            {[
              { icon: '📧', title: 'Email Support', text: <>support@pawsmile.com<br/>We reply within 24 hours</>, link: 'mailto:support@pawsmile.com' },
              { icon: '📍', title: 'Office Address', text: '123 Pet Care Blvd, Suite 200\nLos Angeles, CA 90001, USA' },
              { icon: '⏰', title: 'Support Hours', text: 'Mon-Fri: 9:00 AM - 6:00 PM PST\nSat: 10:00 AM - 4:00 PM PST' },
              { icon: '📱', title: 'Social Media', text: <>Instagram: @pawsmile.dental<br/>TikTok: @pawsmileofficial</> },
            ].map((info, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '2rem', marginBottom: '2rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start', border: '1px solid #F1F5F9' }}>
                <div style={{ width: 60, height: 60, background: '#EEF2FF', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', flexShrink: 0 }}>{info.icon}</div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.25rem', marginBottom: '0.5rem', color: '#1E293B' }}>{info.title}</div>
                  <div style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{info.text}</div>
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div style={{ background: '#fff', borderRadius: 24, padding: '3rem', boxShadow: '0 4px 12px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9' }}>
              <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2rem', color: '#1E293B' }}>❓ FAQ</h3>
              {[
                { q: 'How long until I see results?', a: 'Most users notice fresh breath within 7 days. Tartar typically begins to soften and flake off around 30 days of consistent use.' },
                { q: 'What is your return policy?', a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, simply return the product (even if opened) for a full refund.' },
                { q: 'Is the additive safe for cats?', a: 'Yes! Our water additive is specifically formulated for both cats and dogs. It is 100% non-toxic and free from xylitol, onion, or alcohol.' },
                { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay.' },
              ].map((faq, i) => (
                <div key={i} style={{ marginBottom: '1.5rem', borderBottom: i < 3 ? '1px solid #F1F5F9' : 'none', paddingBottom: '1.5rem' }}>
                  <div style={{ fontWeight: 800, marginBottom: '0.75rem', color: '#1E293B', fontSize: '1.1rem' }}>{faq.q}</div>
                  <div style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.7 }}>{faq.a}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: '#fff', borderRadius: 32, padding: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid #F1F5F9' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.75rem', color: '#1E293B' }}>✉️ Send us a message</h3>
            <p style={{ color: '#64748B', marginBottom: '3rem', fontSize: '1.1rem', fontWeight: 500 }}>Fill out the form below and we'll get back to you shortly.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message received! We will get back to you soon.'); }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem', color: '#1E293B' }}>Name <span style={{ color: '#EF4444' }}>*</span></label>
                  <input type="text" placeholder="Full Name" required style={{ width: '100%', padding: '1rem 1.25rem', border: '2px solid #F1F5F9', borderRadius: 12, fontSize: '1.1rem', outline: 'none', background: '#F8FAFC' }} />
                </div>
                <div>
                  <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem', color: '#1E293B' }}>Email <span style={{ color: '#EF4444' }}>*</span></label>
                  <input type="email" placeholder="email@address.com" required style={{ width: '100%', padding: '1rem 1.25rem', border: '2px solid #F1F5F9', borderRadius: 12, fontSize: '1.1rem', outline: 'none', background: '#F8FAFC' }} />
                </div>
              </div>
              <div style={{ marginBottom: '2rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem', color: '#1E293B' }}>Subject</label>
                <select style={{ width: '100%', padding: '1rem 1.25rem', border: '2px solid #F1F5F9', borderRadius: 12, fontSize: '1.1rem', outline: 'none', background: '#F8FAFC' }}>
                  <option>Product Inquiry</option>
                  <option>Order Status</option>
                  <option>Returns & Refunds</option>
                  <option>Wholesale/B2B</option>
                  <option>Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem', color: '#1E293B' }}>Message <span style={{ color: '#EF4444' }}>*</span></label>
                <textarea placeholder="Tell us how we can help..." required style={{ width: '100%', padding: '1rem 1.25rem', border: '2px solid #F1F5F9', borderRadius: 12, fontSize: '1.1rem', outline: 'none', background: '#F8FAFC', resize: 'vertical', minHeight: 180 }} />
              </div>
              <button type="submit" style={{ width: '100%', padding: '1.25rem', background: '#4F46E5', color: '#fff', border: 'none', borderRadius: 15, fontSize: '1.25rem', fontWeight: 800, cursor: 'pointer', boxShadow: '0 10px 20px rgba(79, 70, 229, 0.3)' }}>Send Message ✉️</button>
            </form>
          </div>
        </div>
      </section>

      <footer style={{ background: '#1E293B', color: '#94A3B8', padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</div>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>© 2026 PawSmile Dental. USA Professional Pet Dental Care Brand</p>
      </footer>
    </div>
  );
}
