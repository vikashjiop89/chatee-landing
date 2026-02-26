"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [usersOnline, setUsersOnline] = useState(8421);

  useEffect(() => {
    const interval = setInterval(() => {
      setUsersOnline((prev) => prev + Math.floor(Math.random() * 4));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top,#2b0036,#120018,#000)",
      color: "#fff",
      fontFamily: "Arial, sans-serif",
      paddingBottom: "110px"
    }}>

      {/* HERO */}
      <div style={{ textAlign: "center", padding: "50px 20px 30px" }}>
        <h1 style={{
          fontSize: "30px",
          fontWeight: "bold",
          lineHeight: "1.3"
        }}>
          🔥 Chat Live With Verified Girls
        </h1>

        <p style={{ marginTop: "10px", fontSize: "15px", opacity: 0.85 }}>
          🟢 {usersOnline}+ Users Online Right Now
        </p>

        <p style={{ fontSize: "13px", opacity: 0.6, marginTop: "5px" }}>
          Private • Secure • Instant Match
        </p>
      </div>

      {/* PROFILE PREVIEW */}
      <div style={{
        display: "flex",
        gap: "16px",
        overflowX: "auto",
        padding: "0 20px"
      }}>
        {["girl1.jpg","girl2.jpg","girl3.jpg"].map((img, i) => (
          <div key={i} style={{
            minWidth: "150px",
            background: "#111",
            borderRadius: "22px",
            padding: "8px",
            boxShadow: "0 0 25px rgba(255,0,120,0.5)"
          }}>
            <img
              src={`/${img}`}
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: "18px"
              }}
            />
            <div style={{
              display: "flex",
              alignItems: "center",
              marginTop: "8px",
              fontSize: "13px"
            }}>
              <span style={{
                width: "9px",
                height: "9px",
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
      <div style={{ textAlign: "center", marginTop: "45px" }}>
        <img
          src="/phone.png"
          style={{
            width: "80%",
            maxWidth: "340px",
            borderRadius: "35px",
            boxShadow: "0 25px 60px rgba(255,0,120,0.6)"
          }}
        />
      </div>

      {/* SCREENSHOTS */}
      <div style={{ padding: "40px 20px 20px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "15px" }}>
          App Preview
        </h2>

        <div style={{
          display: "flex",
          gap: "15px",
          overflowX: "auto"
        }}>
          <img src="/ss1.png" style={{ width: "160px", borderRadius: "22px" }} />
          <img src="/ss2.png" style={{ width: "160px", borderRadius: "22px" }} />
          <img src="/ss3.png" style={{ width: "160px", borderRadius: "22px" }} />
        </div>
      </div>

      {/* FEATURES */}
      <div style={{
        padding: "0 20px",
        fontSize: "14px",
        opacity: 0.9,
        lineHeight: "1.8"
      }}>
        ✔ Instant Match  
        <br />
        ✔ 100% Private Video Calls  
        <br />
        ✔ HD Quality Streaming  
        <br />
        ✔ Safe & Secure  
      </div>

      {/* STICKY CTA */}
      <div style={{
        position: "fixed",
        bottom: "0",
        width: "100%",
        background: "#000",
        padding: "18px",
        textAlign: "center",
        boxShadow: "0 -5px 25px rgba(0,0,0,0.6)"
      }}>
        <a href="/app.apk" style={{
          background: "linear-gradient(90deg,#ff0055,#ff3c00)",
          padding: "16px 50px",
          borderRadius: "60px",
          color: "#fff",
          fontWeight: "bold",
          textDecoration: "none",
          fontSize: "17px",
          boxShadow: "0 0 30px rgba(255,0,120,0.8)",
          animation: "pulse 1.8s infinite"
        }}>
          🚀 Start Live Video Chat
        </a>
      </div>

      {/* Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { box-shadow: 0 0 15px rgba(255,0,120,0.6); }
            50% { box-shadow: 0 0 35px rgba(255,0,120,1); }
            100% { box-shadow: 0 0 15px rgba(255,0,120,0.6); }
          }
        `}
      </style>

    </div>
  );
            }
