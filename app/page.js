"use client";

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f5f7",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        padding: "20px"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "#fff",
          borderRadius: "30px",
          padding: "25px 20px",
          boxShadow: "0 20px 50px rgba(0,0,0,0.1)"
        }}
      >
        {/* APP HEADER */}
        <div style={{ textAlign: "center" }}>
          <img
            src="/phone.png"
            alt="App Preview"
            style={{ width: "80%", maxWidth: "280px", marginBottom: "20px" }}
          />

          <h1 style={{ fontSize: "22px", marginBottom: "8px" }}>
            Chatee - Live Video Call
          </h1>

          <p style={{ fontSize: "14px", color: "#666" }}>
            ⭐ 4.8 Rating • 5,000+ Downloads
          </p>
        </div>

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: "14px",
            marginTop: "20px",
            color: "#444",
            lineHeight: "1.6"
          }}
        >
          Connect live with verified users instantly. Enjoy private and
          secure video calls anytime, anywhere.
        </p>

        {/* SCREENSHOTS SECTION */}
        <h3 style={{ marginTop: "25px", fontSize: "16px" }}>
          App Preview
        </h3>

        <div
          style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            paddingBottom: "10px",
            marginTop: "10px"
          }}
        >
          <img src="/ss1.png" style={{ width: "120px", borderRadius: "15px" }} />
          <img src="/ss2.png" style={{ width: "120px", borderRadius: "15px" }} />
          <img src="/ss3.png" style={{ width: "120px", borderRadius: "15px" }} />
        </div>

        {/* FEATURES */}
        <ul style={{ fontSize: "14px", marginTop: "20px", color: "#444" }}>
          <li>✔ 100% Private Calls</li>
          <li>✔ Verified Profiles</li>
          <li>✔ HD Video Quality</li>
          <li>✔ Secure & Encrypted</li>
        </ul>

        {/* DOWNLOAD BUTTON */}
        <a href="/ChateeLiveConnect.apk" download>
          <button
            style={{
              width: "100%",
              padding: "14px",
              marginTop: "25px",
              fontSize: "16px",
              background: "#000",
              border: "none",
              borderRadius: "50px",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Download Now
          </button>
        </a>

        <p style={{ fontSize: "11px", marginTop: "10px", color: "#777", textAlign: "center" }}>
          Only for Android Devices
        </p>
      </div>
    </main>
  );
        }
