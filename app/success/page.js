export default function SuccessPage() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'system-ui' }}>
      <h1 style={{ color: '#4F46E5', fontSize: '3rem' }}>Thank You! 🐾</h1>
      <p style={{ fontSize: '1.25rem', color: '#475569' }}>Your order has been placed successfully.</p>
      <p>We've sent a confirmation email to you. Your pet's smile is on its way!</p>
      <a href="/" style={{ color: '#4F46E5', fontWeight: 'bold' }}>Return to Home</a>
    </div>
  );
}
