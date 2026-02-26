"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 text-white flex flex-col items-center px-4">

      {/* HERO SECTION */}
      <div className="w-full max-w-md text-center pt-10">

        <h1 className="text-3xl font-bold leading-tight">
          India’s Fastest Growing <br /> Private Video Call App
        </h1>

        <p className="mt-3 text-sm opacity-90">
          ⭐ 4.8 Rating • 5,000+ Downloads • Verified Users
        </p>

        {/* Phone Mockup */}
        <div className="mt-8 flex justify-center">
          <div className="w-64 h-[500px] bg-black rounded-[40px] shadow-2xl p-2 rotate-6">
            <img
              src="/phone.png"
              alt="App Preview"
              className="w-full h-full object-cover rounded-[32px]"
            />
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#download"
          className="mt-8 inline-block bg-white text-purple-700 font-semibold px-8 py-4 rounded-full shadow-xl text-lg"
        >
          🚀 Download for Android
        </a>

      </div>

      {/* FEATURES SECTION */}
      <div className="w-full max-w-md mt-16 space-y-4">

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
          ✔ 100% Private Calls
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
          ✔ Real Verified Profiles
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
          ✔ HD Video Quality
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4">
          ✔ Safe & Secure Experience
        </div>

      </div>

      {/* APP PREVIEW SECTION */}
      <div className="w-full max-w-md mt-16 text-center">

        <h2 className="text-2xl font-semibold mb-6">App Preview</h2>

        <div className="flex gap-4 overflow-x-auto pb-4">
          <img src="/ss1.png" className="w-40 rounded-3xl shadow-xl" alt="Screenshot 1" />
          <img src="/ss2.png" className="w-40 rounded-3xl shadow-xl" alt="Screenshot 2" />
          <img src="/ss3.png" className="w-40 rounded-3xl shadow-xl" alt="Screenshot 3" />
        </div>

      </div>

      {/* Sticky Download Button */}
      <div
        id="download"
        className="fixed bottom-0 left-0 w-full bg-black p-4 flex justify-center"
      >
        <a
          href="/app.apk"
          className="bg-green-500 text-white font-bold px-10 py-4 rounded-full text-lg shadow-lg"
        >
          ⬇ Download Now – Free
        </a>
      </div>

      {/* Bottom spacing so content not hidden */}
      <div className="h-24"></div>

    </div>
  );
        }
