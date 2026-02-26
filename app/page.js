"use client";
import "./page.css";
import { useState } from "react";

export default function Home() {

  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    const link = document.createElement("a");
    link.href = "/chatee.apk";
    link.download = "chatee.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 1500);
  };

  return (
    <div className="container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Chatee</div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Meet New People Instantly</h1>
          <p>
            Start real-time video chats with verified users worldwide.
          </p>

          <button onClick={handleDownload} className="download-btn">
            {downloading ? "Downloading..." : "Download for Android"}
          </button>

          <div className="rating">
            ⭐⭐⭐⭐⭐ 4.8 Rating • 25K+ Downloads
          </div>
        </div>

        <div className="phone">
          <div className="screen">
            <img src="/app.png" alt="App Preview" />
          </div>
        </div>
      </section>

      {/* WHY */}
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

        <button onClick={handleDownload} className="download-btn big">
          {downloading ? "Downloading..." : "Download Now"}
        </button>
      </section>

      <footer>
        © 2026 Chatee App. All rights reserved.
      </footer>

      {/* STICKY DOWNLOAD */}
      <div className="sticky-download">
        <button onClick={handleDownload} className="download-btn">
          {downloading ? "Downloading..." : "Download App"}
        </button>
      </div>

    </div>
  );
        }
