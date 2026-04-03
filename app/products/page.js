'use client';

import { useState } from 'react';

const products = [
  { 
    id: 'prod_water_additive',
    img: 'https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png', 
    tag: '🔥 Best Seller', 
    title: 'Pet Dental Water Additive (500ml)', 
    desc: 'Add directly to the water bowl. Daily drinking prevents tartar and removes bad breath. VOHC certified, safe and no side effects. Suitable for cats and dogs.', 
    price: 24.99, 
    original: '$39.99', 
    badge: null 
  },
  { 
    id: 'prod_toothbrush',
    img: 'https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png', 
    tag: '⭐ Highly Rated', 
    title: 'Pet Ultrasonic Toothbrush Kit', 
    desc: 'Easy to use, soft bristles for gum protection, 3 replacement heads. For cats and dogs, works better with toothpaste. Portable case included.', 
    price: 19.99, 
    original: '$29.99', 
    badge: null 
  },
  { 
    id: 'prod_bundle',
    img: 'https://sc02.alicdn.com/kf/Ab500ea47c6f1485386abab06f42c7a86R.png', 
    tag: '💰 Bundle Deal', 
    title: 'Ultimate Oral Care Bundle', 
    desc: 'Water additive + Toothbrush + Dental gel. Complete care for plaque, tartar, and breath issues. The #1 recommendation.', 
    price: 41.99, 
    original: '$69.99', 
    badge: 'bundle' 
  },
  { 
    id: 'prod_gel',
    img: 'https://sc02.alicdn.com/kf/A4f6ae71b1391487b976222636267592dC.png', 
    tag: '✨ New Arrival', 
    title: 'Pet Dental Gel (120g)', 
    desc: 'Chicken flavor formula that cats love! Apply directly to teeth or mix with food to soften tartar and reduce plaque.', 
    price: 16.99, 
    original: '$24.99', 
    badge: 'new' 
  },
];

export default function Products() {
  const [loading, setLoading] = useState(null);

  const handleCheckout = async (product) => {
    setLoading(product.id);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: [{
            title: product.title,
            price: product.price,
            quantity: 1,
            image: product.img
          }]
        }),
      });

      const { id, error } = await response.json();

      if (error) {
        alert(`Error: ${error.message}`);
        setLoading(null);
        return;
      }

      // If we had the publishable key, we would use it here:
      // const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      // await stripe.redirectToCheckout({ sessionId: id });
      
      // For now, since we're using Vercel + API, we'll inform the user:
      console.log('Checkout Session Created:', id);
      alert('Checkout initiated! (Note: Stripe publishable key is required to complete the redirect)');
      
    } catch (err) {
      console.error('Checkout failed:', err);
      alert('Checkout failed. Please check the console for details.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: '#F8FAFC', minHeight: '100vh' }}>
      {/* Nav */}
      <nav style={{ background: '#fff', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5', textDecoration: 'none' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Home</a>
          <a href="/products" style={{ color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>Products</a>
          <a href="/about" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Contact Us</a>
      </nav>

      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)', padding: '4rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '0.5rem' }}>🛍️ Product Center</h1>
        <p style={{ color: '#475569', fontSize: '1.25rem', fontWeight: 500 }}>Top-rated pet dental care products in the USA market</p>
      </div>

      {/* Products Grid */}
      <section style={{ padding: '5rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem' }}>
          {products.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.06)', transition: 'all 0.3s' }}>
              <div style={{ width: '100%', height: 260, overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <span style={{ display: 'inline-block', background: '#DCFCE7', color: '#15803D', padding: '0.4rem 1rem', borderRadius: 50, fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.75rem' }}>{p.tag}</span>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.75rem', color: '#1E293B' }}>{p.title}</h3>
                <p style={{ color: '#64748B', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.75rem', fontWeight: 800, color: '#4F46E5' }}>${p.price}</span>
                  <span style={{ fontSize: '1.1rem', color: '#94A3B8', textDecoration: 'line-through' }}>{p.original}</span>
                </div>
                <button 
                  onClick={() => handleCheckout(p)}
                  disabled={loading === p.id}
                  style={{ 
                    width: '100%', 
                    padding: '1rem', 
                    background: loading === p.id ? '#94A3B8' : '#4F46E5', 
                    color: '#fff', 
                    border: 'none', 
                    borderRadius: 10, 
                    fontSize: '1.1rem', 
                    fontWeight: 700, 
                    cursor: loading === p.id ? 'not-allowed' : 'pointer', 
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                    transition: 'all 0.2s'
                  }}
                >
                  {loading === p.id ? 'Processing...' : 'Buy Now'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1E293B', color: '#94A3B8', padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</div>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>© 2026 PawSmile Dental. USA Professional Pet Dental Care Brand</p>
      </footer>
    </div>
  );
}
