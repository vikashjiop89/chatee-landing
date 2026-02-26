"use client";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-[#0f0f14] via-[#141420] to-[#0f0f14] text-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center text-center px-5 pt-14 pb-16">

        <div className="mb-3">
          <span className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
            ● Girls Online Now
          </span>
        </div>

        <h1 className="text-3xl font-bold leading-snug mb-3">
          Private 1-to-1 Video Calls
          <br />
          With Verified Indian Girls
        </h1>

        <p className="text-gray-400 text-base max-w-sm mb-6">
          Recharge and start your secure private video call instantly.
          Simple. Direct. Private.
        </p>

        <a
          href="#download"
          className="bg-gradient-to-r from-pink-500 to-red-500 px-8 py-3 rounded-full text-lg font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition"
        >
          Start Private Call
        </a>

        {/* PHONE MOCKUP */}
        <div className="relative mt-12">

          {/* Glow background */}
          <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-full"></div>

          {/* Phone frame */}
          <div className="relative w-64 h-[520px] bg-black rounded-[40px] border-[6px] border-gray-800 shadow-2xl overflow-hidden">

            {/* Screen */}
            <img
              src="/ss1.png"
              alt="App Screen"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </section>

      {/* SCREENSHOT PREVIEW */}
      <section className="px-5 pb-16">

        <h2 className="text-xl font-semibold text-center mb-6">
          App Preview
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          <img src="/ss1.png" className="w-48 rounded-2xl shadow-lg snap-center" />
          <img src="/ss2.png" className="w-48 rounded-2xl shadow-lg snap-center" />
          <img src="/ss3.png" className="w-48 rounded-2xl shadow-lg snap-center" />
        </div>

      </section>

      {/* FEATURES */}
      <section className="px-5 pb-24 text-center">

        <h2 className="text-xl font-semibold mb-6">
          Why Choose This App?
        </h2>

        <div className="space-y-4 text-gray-300 text-base">
          <p>🔒 Secure & Private 1-to-1 Calls</p>
          <p>💎 Verified Profiles</p>
          <p>⚡ Instant Recharge & Access</p>
          <p>📱 Smooth Android Experience</p>
        </div>

      </section>

      {/* STICKY DOWNLOAD */}
      <div
        id="download"
        className="fixed bottom-0 w-full bg-[#111118] border-t border-white/10 p-4"
      >
        <a
          href="#"
          className="block text-center bg-gradient-to-r from-pink-500 to-red-500 py-3 rounded-full text-lg font-semibold shadow-md"
        >
          Download Now & Start Calling
        </a>
      </div>

    </main>
  );
}
