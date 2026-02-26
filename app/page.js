import "./page.css";

export default function Home() {
  return (
    <div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">LiveConnect</div>
        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1>Connect Instantly With Anyone</h1>
        <p>Secure and seamless real-time communication platform.</p>
        <button>Start Now</button>

        <div className="stats">
          <div>
            <h2>10K+</h2>
            <p>Active Users</p>
          </div>
          <div>
            <h2>99%</h2>
            <p>Uptime</p>
          </div>
          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>
        </div>
      </section>

      {/* PREVIEW SECTION */}
      <section className="preview">
        <div className="preview-box">
          <div className="screen"></div>
        </div>
        <div className="preview-text">
          <h2>Modern & Clean Interface</h2>
          <p>
            Designed with simplicity and performance in mind.
            Optimized for both desktop and mobile.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="card">
          <h3>Verified Profiles</h3>
          <p>Connect with trusted and real users.</p>
        </div>
        <div className="card">
          <h3>HD Video Calls</h3>
          <p>High-quality 1-on-1 communication.</p>
        </div>
        <div className="card">
          <h3>Fast & Secure</h3>
          <p>Optimized and encrypted infrastructure.</p>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial">
        <p>
          “One of the smoothest communication platforms I’ve used.
          Clean design and great performance.”
        </p>
        <h4>— Happy User</h4>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to Experience It?</h2>
        <button>Join Now</button>
      </section>

      <footer>
        © 2026 LiveConnect. All rights reserved.
      </footer>

    </div>
  );
        }
