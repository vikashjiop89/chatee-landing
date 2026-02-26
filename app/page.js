"use client";

export default function Home() {
  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      background: "linear-gradient(135deg,#7b2ff7,#f107a3)",
      minHeight: "100vh",
      padding: "40px 20px",
      color: "#fff",
      textAlign: "center"
    }}>

      {/* HERO SECTION */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        <h1 style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "20px"
        }}>
          Connect Live with Verified Users Instantly!
        </h1>

        <p style={{
          fontSize: "20px",
          opacity: 0.9,
          marginBottom: "30px"
        }}>
          Private video calls with verified profiles.
          Chat, meet and enjoy live conversations safely!
        </p>

        <a href="/ChateeLiveConnect.apk" download>
          <button style={{
            padding: "16px 40px",
            fontSize: "18px",
            background: "linear-gradient(90deg,#00c6ff,#0072ff)",
            border: "none",
            borderRadius: "50px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}>
            Download Now
          </button>
        </a>

        <p style={{ marginTop: "15px", opacity: 0.8 }}>
          ⭐ 4.8/5 • Loved by 5,000+ Users
        </p>

      </div>

      {/* FEATURES SECTION */}
      <div style={{
        marginTop: "80px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1000px",
        marginInline: "auto"
      }}>

        {[
          { title: "Verified Profiles", desc: "Only real users verified for safe calls." },
          { title: "Private Video Calls", desc: "HD one-to-one video anytime, anywhere." },
          { title: "Secure & Fun", desc: "Chat safely with verified members only." },
          { title: "Instant Connect", desc: "Start live conversations in seconds." }
        ].map((item, index) => (
          <div key={index} style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            padding: "25px",
            borderRadius: "20px",
            boxShadow: "0 8px 25px rgba(0,0,0,0.2)"
          }}>
            <h3 style={{ marginBottom: "10px" }}>{item.title}</h3>
            <p style={{ opacity: 0.9 }}>{item.desc}</p>
          </div>
        ))}

      </div>

      {/* BOTTOM CTA */}
      <div style={{ marginTop: "80px" }}>
        <h2 style={{ marginBottom: "20px" }}>Ready to Connect?</h2>

        <a href="/ChateeLiveConnect.apk" download>
          <button style={{
            padding: "18px 50px",
            fontSize: "20px",
            background: "linear-gradient(90deg,#00c6ff,#0072ff)",
            border: "none",
            borderRadius: "50px",
            color: "#fff",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
          }}>
            Download Now
          </button>
        </a>

        <p style={{ marginTop: "40px", opacity: 0.7 }}>
          © 2026 Chatee Live Connect. All rights reserved.
        </p>
      </div>

    </main>
  );
}
