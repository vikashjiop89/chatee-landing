"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [usersOnline, setUsersOnline] = useState(8243);

  // Fake live counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setUsersOnline((prev) => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(180deg,#1a0026,#2d004d,#000)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "100px"
    }}>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "40px 20px" }}>

        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Meet Beautiful Girls <br /> Live Video Instantly
        </h1>

        <p style={{ marginTop: "10px", opacity: 0.8 }}>
          🟢 {usersOnline}+ Users Online Now
        </p>

        <p style={{ marginTop: "5px", fontSize: "14px", opacity: 0.7 }}>
          Private • Secure • Verified Profiles
        </p>

      </div>

      {/* GIRL PROFILE PREVIEW */}
      <div style={{
        display: "flex",
        gap: "15px",
        overflowX: "auto",
        padding: "0 20px"
      }}>

        {["girl1.jpg","girl2.jpg","girl3.jpg"].map((img, i) => (
          <div key={i} style={{
            minWidth: "140px",
            background: "#111",
            borderRadius: "20px",
            padding: "8px",
            boxShadow: "0 10px 30px rgba(255,0,120,0.4)"
          }}>
            <img
              src={`/${img}`}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "15px"
              }}
            />
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "6px",
              fontSize: "13px"
            }}>
              <span style={{
                width: "8px",
                height: "8px",
                background: "limegreen",
                borderRadius: "50%",
                marginRight: "6px"
              }}></span>
              Live Now
            </div>
          </div>
        ))}

      </div>

      {/* PHONE MOCKUP */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <img
          src="/phone.png"
          style={{
            width: "75%",
            maxWidth: "320px",
            borderRadius: "30px",
            boxShadow: "0 20px 50px rgba(255,0,120,0.5)"
          }}
        />
      </div>

      {/* SCREENSHOTS */}
      <div style={{ padding: "30px 20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
          App Preview
        </h2>

        <div style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto"
        }}>
          <img src="/ss1.png" style={{ width: "140px", borderRadius: "20px" }} />
          <img src="/ss2.png" style={{ width: "140px", borderRadius: "20px" }} />
          <img src="/ss3.png" style={{ width: "140px", borderRadius: "20px" }} />
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ padding: "0 20px", fontSize: "14px", opacity: 0.9 }}>
        ✔ Instant Match  
        <br />
        ✔ 100% Private Calls  
        <br />
        ✔ HD Video Quality  
        <br />
        ✔ Safe & Secure  
      </div>

      {/* STICKY DOWNLOAD BUTTON */}
      <div style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        background: "#000",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 -5px 20px rgba(0,0,0,0.5)"
      }}>
        <a href="/app.apk" style={{
          background: "linear-gradient(90deg,#ff0055,#ff4d00)",
          padding: "14px 40px",
          borderRadius: "50px",
          color: "#fff",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "16px",
          boxShadow: "0 10px 30px rgba(255,0,120,0.6)"
        }}>
          🔥 Start Live Video Chat
        </a>
      </div>

    </div>
  );
        }
