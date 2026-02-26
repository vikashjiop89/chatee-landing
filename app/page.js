export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center text-center px-6 pt-20 pb-20">

        {/* Neon Glow Background */}
        <div className="absolute w-72 h-72 bg-pink-600/30 blur-[120px] rounded-full top-20"></div>

        <span className="relative bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4 animate-pulse">
          🔴 LIVE NOW
        </span>

        <h1 className="relative text-3xl font-bold leading-tight mb-4">
          Talk Live With Verified Indian Girls
        </h1>

        <p className="relative text-gray-400 max-w-sm mb-8">
          Private 1-to-1 video calls. Recharge and connect instantly.
          Safe, secure and direct.
        </p>

        <a
          href="#download"
          className="relative bg-gradient-to-r from-pink-500 to-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-lg shadow-red-500/40 active:scale-95 transition"
        >
          Start Live Video Call
        </a>

      </section>

      {/* LIVE PROFILES SECTION */}
      <section className="px-6 pb-20">

        <h2 className="text-xl font-semibold mb-6 text-center">
          Girls Online Right Now
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/ss1.png" className="w-full h-48 object-cover" />
            <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              ● Live
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/ss2.png" className="w-full h-48 object-cover" />
            <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              ● Live
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/ss3.png" className="w-full h-48 object-cover" />
            <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              ● Live
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img src="/ss1.png" className="w-full h-48 object-cover" />
            <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded-full">
              ● Live
            </span>
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 pb-24 text-center">

        <h2 className="text-xl font-semibold mb-6">
          Why Users Love It
        </h2>

        <div className="space-y-4 text-gray-300">
          <p>🔒 Secure Private Calls</p>
          <p>⚡ Instant Recharge & Access</p>
          <p>💎 Verified Profiles</p>
          <p>📱 Smooth Android Experience</p>
        </div>

      </section>

      {/* STICKY DOWNLOAD */}
      <div
        id="download"
        className="fixed bottom-0 w-full bg-[#0a0a0f] border-t border-white/10 p-4"
      >
        <a
          href="#"
          className="block text-center bg-gradient-to-r from-pink-500 to-red-600 py-3 rounded-full text-lg font-semibold shadow-md shadow-red-500/30"
        >
          Download Now
        </a>
      </div>

    </main>
  );
        }
