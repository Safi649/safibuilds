export default function Home() {
  return (
    <div className="font-sans">

      {/* LOGIN/REGISTER NAVIGATION */}
      <div className="bg-gray-100 text-right p-4">
        <a href="/admin/login" className="font-bold mr-4 text-blue-700 hover:underline">🔐 Admin Login</a>
        <a href="/admin/register" className="font-bold text-green-700 hover:underline">🆕 Register</a>
      </div>

      {/* HERO BANNER */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Welcome to SafiBuilds 🚀
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fadeIn delay-200">
            Build beautiful, modern websites — no code required.
          </p>
          <a
            href="/admin/register"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition"
          >
            Get Started for Free
          </a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose SafiBuilds?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { icon: '⚙️', title: 'Drag & Drop Builder', desc: 'Build pages visually without touching code.' },
            { icon: '📱', title: 'Fully Responsive', desc: 'Your site looks amazing on all devices.' },
            { icon: '🔐', title: 'Secure Hosting', desc: 'Protected with SSL & global CDN performance.' },
            { icon: '🚀', title: 'Blazing Fast', desc: 'Optimized for speed and SEO from day one.' }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2">{item.icon} {item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-20 px-6 text-center bg-gray-50">
        <h2 className="text-3xl font-bold mb-10">Templates by Industry</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {['SaaS', 'Doctor', 'Restaurant', 'Hospital', 'Ecommerce', 'Education'].map((industry, idx) => (
            <button
              key={idx}
              className="px-6 py-2 border rounded-lg text-sm font-medium bg-white hover:bg-gray-100"
            >
              {industry}
            </button>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {[
            { title: 'Free', price: 'PKR 0', features: ['Basic Templates', 'Limited Access'] },
            { title: 'Pro', price: 'PKR 999/mo', features: ['All Templates', 'Priority Support'] },
            { title: 'Elite', price: 'PKR 2999/mo', features: ['Custom Designs', '1-on-1 Help'] }
          ].map((plan, idx) => (
            <div key={idx} className="border rounded-xl p-6 w-80 shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-2xl font-semibold text-blue-700 mb-4">{plan.price}</p>
              <ul className="text-gray-700 mb-4 list-disc pl-5">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <button className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <p>Email: <a href="mailto:safi65225@gmail.com" className="text-blue-600 underline">safi65225@gmail.com</a></p>
        <p>Phone: <span className="text-gray-800 font-medium">+923489085366</span></p>
        <a href="https://wa.me/923489085366" target="_blank" rel="noopener noreferrer">
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition">
            WhatsApp Us
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © 2025 SafiBuilds.com — All rights reserved
      </footer>
    </div>
  );
}
