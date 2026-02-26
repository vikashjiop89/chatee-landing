import "./page.css";

export default function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Chatee</div>
      </nav>

      {/* HERO DOWNLOAD SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Meet New People Instantly</h1>
          <p>Start real-time video chats with verified users worldwide.</p>

          <a href="#" className="download-btn">
            Download for Android
          </a>

          <span className="available">Available on Google Play</span>
        </div>

        <div className="phone">
          <div className="screen">
            <div className="avatar"></div>
            <div className="avatar"></div>
            <div className="avatar"></div>
          </div>
        </div>
      </section>

      {/* WHY DOWNLOAD */}
      <section className="why">
        <h2>Why Download Chatee?</h2>

        <div className="why-grid">
          <div className="card">
            <h3>Verified Users</h3>
            <p>Connect only with real and active profiles.</p>
          </div>

          <div className="card">
            <h3>Instant Matching</h3>
            <p>Start chatting within seconds.</p>
          </div>

          <div className="card">
            <h3>Safe & Secure</h3>
            <p>Encrypted and privacy-focused platform.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta">
        <h2>Ready to Start?</h2>
        <a href="#" className="download-btn big">
          Download Now
        </a>
      </section>

      <footer>
        © 2026 Chatee App. All rights reserved.
      </footer>

    </div>
  );
}
