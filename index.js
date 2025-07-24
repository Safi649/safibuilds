export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px' }}>
      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', padding: '60px 0' }}>
        <h1 style={{ fontSize: '40px' }}>Build Stunning Websites with SafiBuilds</h1>
        <p style={{ fontSize: '18px', margin: '20px 0' }}>
          All-in-one platform for web creation — fast, modern, and powerful.
        </p>
        <button style={{ padding: '10px 20px', fontSize: '16px', background: '#111', color: '#fff', border: 'none', borderRadius: '6px' }}>
          Get Started
        </button>
      </section>

      {/* FEATURES SECTION */}
      <section style={{ padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Why Choose SafiBuilds?</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 200px', background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
            <h3>⚙️ Drag & Drop Builder</h3>
            <p>Build pages visually without touching code.</p>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
            <h3>📱 Fully Responsive</h3>
            <p>Your site looks amazing on all devices.</p>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
            <h3>🔐 Secure Hosting</h3>
            <p>Protected with SSL & global CDN performance.</p>
          </div>
          <div style={{ flex: '1 1 200px', background: '#f5f5f5', padding: '20px', borderRadius: '10px' }}>
            <h3>🚀 Blazing Fast</h3>
            <p>Optimized for speed and SEO from day one.</p>
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', marginBottom: '30px' }}>Templates by Industry</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
          {['SaaS', 'Doctor', 'Restaurant', 'Hospital', 'Ecommerce', 'Education'].map((industry) => (
            <button key={industry} style={{ padding: '10px 20px', borderRadius: '6px', border: '1px solid #333', background: '#fff' }}>
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section style={{ padding: '60px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Pricing Plans</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          {[
            { title: 'Free', price: 'PKR 0', features: ['Basic Templates', 'Limited Access'] },
            { title: 'Pro', price: 'PKR 999/mo', features: ['All Templates', 'Priority Support'] },
            { title: 'Elite', price: 'PKR 2999/mo', features: ['Custom Designs', '1-on-1 Help'] }
          ].map(plan => (
            <div key={plan.title} style={{ flex: '1 1 250px', border: '1px solid #ccc', borderRadius: '10px', padding: '20px' }}>
              <h3>{plan.title}</h3>
              <p><strong>{plan.price}</strong></p>
              <ul>
                {plan.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button style={{ marginTop: '10px', padding: '8px 16px', background: '#000', color: '#fff', border: 'none', borderRadius: '6px' }}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section style={{ padding: '60px 0', textAlign: 'center' }}>
        <h2>Contact Us</h2>
        <p>Email: <a href="mailto:safi65225@gmail.com">safi65225@gmail.com</a></p>
        <p>Phone: +923489085366</p>
        <a href="https://wa.me/923489085366" target="_blank" rel="noopener noreferrer">
          <button style={{ padding: '10px 20px', marginTop: '10px', borderRadius: '6px', backgroundColor: '#25D366', color: 'white', border: 'none' }}>
            WhatsApp Us
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ textAlign: 'center', padding: '20px', borderTop: '1px solid #ccc' }}>
        <p>© 2025 SafiBuilds.com — All rights reserved</p>
      </footer>
    </div>
  );
}
