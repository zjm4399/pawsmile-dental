'use client';

import React, { useState } from 'react';

export default function ProductDetail() {
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  const product = {
    title: "PawSmile™ Dental Water Additive for Dogs & Cats",
    price: 24.99,
    originalPrice: 39.99,
    rating: 4.9,
    reviews: 1248,
    features: [
      "Eliminates Bad Breath Instantly",
      "Reduces Plaque & Tartar Buildup",
      "No Brushing Required - Just Add to Water",
      "Veterinarian Recommended Formula",
      "100% Safe, Natural Ingredients",
      "Odorless & Tasteless"
    ],
    specs: {
      volume: "16 fl oz (473ml)",
      origin: "Made in USA",
      target: "Dogs & Cats of all ages",
      ingredients: "Stabilized Chlorine Dioxide, Sodium Bicarbonate, Potassium Sorbate, Sodium Benzoate, Purified Water"
    }
  };

  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: [{
            title: product.title,
            price: product.price,
            quantity: quantity,
          }]
        }),
      });

      const session = await response.json();
      if (session.id) {
        // Use Stripe JS or window.location
        window.location.href = `https://checkout.stripe.com/pay/${session.id}`;
      } else {
        alert('Payment session creation failed. Please check your Stripe keys.');
      }
    } catch (error) {
      console.error('Checkout Error:', error);
      alert('Error initiating checkout.');
    }
  };

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <a href="/" style={{ color: '#4F46E5', textDecoration: 'none' }}>← Back to Shop</a>
      </nav>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
        {/* Left: Product Images */}
        <div>
          <div style={{ width: '100%', height: 500, background: '#F8FAFC', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10rem', marginBottom: '1rem' }}>
            💧
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[1, 2, 3, 4].map(i => (
              <div key={i} style={{ height: 100, background: '#F8FAFC', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                💧
              </div>
            ))}
          </div>
        </div>

        {/* Right: Product Info */}
        <div>
          <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Best Seller</span>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0 1rem' }}>{product.title}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <div style={{ color: '#F59E0B' }}>{"★".repeat(5)}</div>
            <span style={{ fontWeight: 600 }}>{product.rating}</span>
            <span style={{ color: '#64748B' }}>({product.reviews} reviews)</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800, color: '#4F46E5' }}>${product.price}</span>
            <span style={{ fontSize: '1.25rem', color: '#94A3B8', textDecoration: 'line-through' }}>${product.originalPrice}</span>
            <span style={{ background: '#FEE2E2', color: '#B91C1C', padding: '0.25rem 0.75rem', borderRadius: 50, fontSize: '0.875rem', fontWeight: 700 }}>Save 38%</span>
          </div>

          <p style={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '2rem' }}>
            Transform your pet's oral health with the easiest dental solution ever. Simply add a capful to their water bowl and watch as bad breath disappears and teeth become pearly white. No more struggling with toothbrushes!
          </p>

          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ marginBottom: '1rem' }}>Quantity</h4>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #E2E8F0', width: 'fit-content', borderRadius: 8 }}>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} style={{ padding: '0.75rem 1.5rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.25rem' }}>-</button>
              <span style={{ padding: '0.75rem 1.5rem', borderLeft: '1px solid #E2E8F0', borderRight: '1px solid #E2E8F0', fontWeight: 600 }}>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} style={{ padding: '0.75rem 1.5rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.25rem' }}>+</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button 
              onClick={handleAddToCart}
              style={{ flex: 2, background: '#4F46E5', color: '#fff', border: 'none', padding: '1.25rem', borderRadius: 12, fontSize: '1.125rem', fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 6px rgba(79, 70, 229, 0.2)' }}
            >
              Add to Cart
            </button>

            <button style={{ flex: 1, background: '#fff', border: '2px solid #E2E8F0', padding: '1.25rem', borderRadius: 12, fontSize: '1.5rem', cursor: 'pointer' }}>♡</button>
          </div>

          <div style={{ background: '#F8FAFC', padding: '1.5rem', borderRadius: 12 }}>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>🚚 Free US Shipping Over $39</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>🛡️ 30-Day Money Back</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>✅ VOHC Approved Formula</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ marginTop: '4rem', borderTop: '1px solid #E2E8F0' }}>
        <div style={{ display: 'flex', gap: '3rem' }}>
          {['description', 'features', 'specifications'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{ 
                padding: '1.5rem 0', 
                border: 'none', 
                background: 'none', 
                fontSize: '1.125rem', 
                fontWeight: 700, 
                cursor: 'pointer',
                color: activeTab === tab ? '#4F46E5' : '#94A3B8',
                borderBottom: activeTab === tab ? '3px solid #4F46E5' : '3px solid transparent'
              }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div style={{ padding: '3rem 0' }}>
          {activeTab === 'description' && (
            <div style={{ maxWidth: 800 }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>Oral health is vital to your pet's longevity.</h3>
              <p style={{ color: '#475569', fontSize: '1.125rem', lineHeight: 1.8 }}>
                Studies show that 80% of dogs and 70% of cats show signs of oral disease by the age of 3. If left untreated, oral bacteria can enter the bloodstream and affect the heart, liver, and kidneys. PawSmile™ Dental Water Additive is a professional-grade solution designed to eliminate these risks without the hassle of brushing.
              </p>
            </div>
          )}
          {activeTab === 'features' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {product.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.125rem', color: '#475569' }}>
                  <span style={{ color: '#4F46E5' }}>✓</span> {f}
                </div>
              ))}
            </div>
          )}
          {activeTab === 'specifications' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key}>
                  <div style={{ color: '#94A3B8', fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{key}</div>
                  <div style={{ fontWeight: 600 }}>{value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
