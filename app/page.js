"use client";

import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="bg-[#0f0f14] text-white min-h-screen font-sans">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-16 pb-20">

        <span className="bg-white/10 px-4 py-1 rounded-full text-sm mb-4">
          ● Girls Online Now
        </span>

        <h1 className="text-4xl font-bold leading-tight mb-4">
          Private 1-to-1 Video Calls <br />
          With Verified Indian Girls
        </h1>

        <p className="text-gray-400 max-w-md mb-6">
          Exclusive access. Secure private calls. Recharge and start instantly.
        </p>

        <a
          href="#download"
          className="bg-gradient-to-r from-pink-500 to-red-500 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Start Private Video Call
        </a>

        <div className="mt-10">
          <img
            src="/phone.png"
            alt="App Preview"
            className="w-72 mx-auto drop-shadow-2xl"
          />
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          See How The App Looks
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <img src="/ss1.png" className="rounded-2xl w-56 shadow-lg" />
          <img src="/ss2.png" className="rounded-2xl w-56 shadow-lg" />
          <img src="/ss3.png" className="rounded-2xl w-56 shadow-lg" />
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 pb-20 text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Why Choose This App?
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>🔒 Secure & Private 1-to-1 Calls</p>
          <p>💎 Verified Indian Profiles</p>
          <p>⚡ Instant Recharge & Access</p>
          <p>📱 Android Exclusive Experience</p>
        </div>
      </section>

      {/* DOWNLOAD */}
      <section
        id="download"
        className="fixed bottom-0 w-full bg-[#0f0f14] p-4 border-t border-white/10"
      >
        <a
          href="#"
          className="block text-center bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded-full font-semibold"
        >
          Download Now & Start Calling
        </a>
      </section>

    </main>
  );
}
