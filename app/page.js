"use client";

export default function Home() {
  return (
    <main style={{fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center"}}>
      <h1 style={{fontSize: "42px"}}>Chatee</h1>
      <p style={{fontSize: "20px", marginBottom: "20px"}}>
        Private & Secure Video Calling App
      </p>
      <a href="/ChateeLiveConnect.apk" download>
        <button style={{
          padding: "14px 28px",
          fontSize: "18px",
          backgroundColor: "#000",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}>
          Download Now
        </button>
      </a>
    </main>
  );
}
