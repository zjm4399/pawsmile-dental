'use client';

export default function About() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: 0, background: '#F8FAFC', minHeight: '100vh' }}>
      <nav style={{ background: '#fff', padding: '1rem 2rem', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#4F46E5', textDecoration: 'none' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</a>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="/" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Home</a>
          <a href="/products" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Products</a>
          <a href="/about" style={{ color: '#4F46E5', fontWeight: 500, textDecoration: 'none' }}>About</a>
          <a href="/contact" style={{ color: '#64748B', fontWeight: 500, textDecoration: 'none' }}>Contact</a>
        </div>
        <a href="/contact" style={{ background: '#4F46E5', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 8, textDecoration: 'none', fontWeight: 600 }}>Contact Us</a>
      </nav>

      <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #FDF4FF)', padding: '6rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>🐾 About PawSmile</h1>
        <p style={{ fontSize: '1.4rem', color: '#475569', maxWidth: 800, margin: '0 auto', fontWeight: 500 }}>We believe every pet deserves a healthy, white smile</p>
      </div>

      <section style={{ padding: '5rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: '4rem', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', color: '#4F46E5' }}>💡 Our Story</h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#475569', marginBottom: '1.5rem' }}>PawSmile was born from a routine vet check. In 2022, our founder Dr. Chen was taking his Golden Retriever "Mochi" for a checkup when the vet revealed that Mochi already had early-stage tartar and needed professional cleaning.</p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#475569', marginBottom: '1.5rem' }}>That experience made us realize—pet oral health is a severely neglected issue. Statistics show over 80% of dogs and 70% of cats over 3 years old have some form of dental disease, yet most pet owners are unaware.</p>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.9, color: '#475569' }}>We decided to change that. PawSmile was born. We collaborated with top US veterinary oral health experts to develop safe, effective, and easy-to-use dental care products, allowing every pet owner to provide professional care at home.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginBottom: '4rem' }}>
          {[
            { icon: '✅', title: 'VOHC Certified', desc: 'All products are certified by the Veterinary Oral Health Council (VOHC), ensuring safety and effectiveness.' },
            { icon: '🌿', title: 'Natural Formula', desc: '100% natural ingredients, free from alcohol, preservatives, and artificial colors. Absolutely safe for pets.' },
            { icon: '🔬', title: 'Science-Backed', desc: 'Every product undergoes rigorous clinical testing with real data supporting its results.' },
            { icon: '💙', title: 'Giving Back', desc: '1% of our sales are donated to animal protection organizations to help more stray animals.' },
          ].map((v, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '2.5rem', boxShadow: '0 4px 15px rgba(0,0,0,0.04)', border: '1px solid #F1F5F9' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{v.icon}</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: '#1E293B' }}>{v.title}</h3>
              <p style={{ color: '#64748B', fontSize: '1rem', lineHeight: 1.7 }}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
          {[
            { num: '50,000+', label: 'Satisfied Users' },
            { num: '4.9★', label: 'Average Rating' },
            { num: '2022', label: 'Brand Founded' },
            { num: '15+', label: 'Countries Served' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 20, padding: '2rem', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', border: '1px solid #F1F5F9' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#4F46E5' }}>{s.num}</div>
              <div style={{ color: '#64748B', fontSize: '1rem', fontWeight: 600, marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ background: '#fff', padding: '6rem 2rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 800, marginBottom: '4rem' }}>👨‍⚕️ Our Expert Team</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', maxWidth: 1000, margin: '0 auto' }}>
          {[
            { avatar: '👨‍⚕️', name: 'Dr. Michael Chen', role: 'Co-founder / DVM', bio: '15 years of veterinary experience specializing in pet oral health research with over 10 published papers.' },
            { avatar: '👩‍🔬', name: 'Dr. Sarah Johnson', role: 'Chief Scientist', bio: 'PhD in Veterinary Medicine from UC Davis, VOHC certified reviewer, and core of our product development.' },
            { avatar: '🧑‍💼', name: 'Alex Rivera', role: 'CEO', bio: 'Former Amazon Pet Category Manager with 10 years of e-commerce experience focused on DTC brand building.' },
          ].map((t, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: 140, height: 140, background: 'linear-gradient(135deg, #4F46E5, #818CF8)', borderRadius: '50%', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', boxShadow: '0 10px 20px rgba(79, 70, 229, 0.2)' }}>{t.avatar}</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem', color: '#1E293B' }}>{t.name}</div>
              <div style={{ color: '#4F46E5', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>{t.role}</div>
              <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: 'linear-gradient(135deg, #4F46E5, #6366F1)', padding: '6rem 2rem', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }}>🎯 Our Mission</h2>
        <p style={{ fontSize: '1.4rem', opacity: 0.95, maxWidth: 850, margin: '0 auto', lineHeight: 1.8, fontWeight: 500 }}>To enable every pet owner to simply and effectively care for their pet's oral health. No more letting dental issues compromise a pet's quality of life. Give every pet a healthy, happy smile.</p>
      </div>

      <footer style={{ background: '#1E293B', color: '#94A3B8', padding: '4rem 2rem 3rem', textAlign: 'center' }}>
        <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#fff', marginBottom: '1rem' }}>Paw<span style={{ color: '#F59E0B' }}>Smile</span>🐾</div>
        <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>© 2026 PawSmile Dental. USA Professional Pet Dental Care Brand</p>
      </footer>
    </div>
  );
}
