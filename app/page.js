import "./page.css";

export default function Home() {
  return (
    <div className="container">

      <section className="hero">
        <h1>Experience Real-Time Live Connections</h1>
        <p>Secure. Private. Smooth video interaction platform.</p>
        <button>Get Started</button>
      </section>

      <section className="features">
        <div className="card">
          <h3>Verified Profiles</h3>
          <p>Connect with real and trusted users.</p>
        </div>

        <div className="card">
          <h3>HD Video Calls</h3>
          <p>Crystal clear private sessions anytime.</p>
        </div>

        <div className="card">
          <h3>Fast & Secure</h3>
          <p>Optimized and encrypted experience.</p>
        </div>
      </section>

      <footer>
        © 2026 LiveConnect. All rights reserved.
      </footer>

    </div>
  );
}
