"use client";
import { useEffect, useState } from "react";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { label: "Complaints Registered", value: 12847, suffix: "+", icon: "📋", color: "from-blue-500 to-blue-700" },
  { label: "Issues Resolved", value: 10923, suffix: "+", icon: "✅", color: "from-green-500 to-green-700" },
  { label: "Active Departments", value: 8, suffix: "", icon: "🏢", color: "from-purple-500 to-purple-700" },
  { label: "Avg. Response (Hrs)", value: 24, suffix: "h", icon: "⚡", color: "from-orange-500 to-orange-700" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-300/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="live-dot w-2 h-2 bg-green-400 rounded-full inline-block"></span>
              <span className="text-green-300 text-sm font-medium">AI-Powered Detection — Live</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Smart Municipal{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-300">
                Complaint
              </span>{" "}
              System
            </h1>

            <p className="text-blue-100 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Report civic issues instantly using AI. Our YOLO-powered detection automatically identifies{" "}
              <strong className="text-white">potholes, garbage, damaged streetlights,</strong> and{" "}
              <strong className="text-white">drainage overflow</strong> from photos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#ai-detection"
                id="hero-cta-detect"
                className="flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 shadow-xl hover:shadow-orange-500/30 hover:scale-105"
              >
                <span>🤖</span>
                Detect Issue with AI
              </a>
              <a
                href="#how-it-works"
                id="hero-cta-learn"
                className="flex items-center justify-center gap-2 border border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-xl transition-all duration-200 hover:bg-white/10"
              >
                <span>▶</span>
                How It Works
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mt-10">
              {["ISO 27001 Certified", "Govt. Approved", "Data Secured"].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 text-blue-200 text-sm"
                >
                  <span className="text-green-400">✓</span>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual card */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass rounded-2xl p-6 text-white shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-sm text-blue-200">AI Detection Result</span>
                  <span className="bg-green-500/20 text-green-300 text-xs px-2 py-1 rounded-full font-medium">✓ Detected</span>
                </div>
                <div className="bg-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">🕳️</span>
                    <div>
                      <p className="font-bold text-lg">Pothole Detected</p>
                      <p className="text-blue-200 text-sm">Road Maintenance Department</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-blue-200">Confidence</span>
                      <span className="font-semibold">94.7%</span>
                    </div>
                    <div className="confidence-bar">
                      <div className="confidence-fill" style={{ width: "94.7%" }} />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-red-500/20 rounded-lg p-3 text-center">
                    <p className="text-red-300 text-xs mb-1">Priority</p>
                    <p className="text-white font-bold text-sm">HIGH</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                    <p className="text-blue-300 text-xs mb-1">Auto-Assigned</p>
                    <p className="text-white font-bold text-xs">PWD Division</p>
                  </div>
                </div>
                <div className="mt-3 bg-white/5 rounded-lg p-3">
                  <p className="text-blue-200 text-xs">📍 Suggested Action:</p>
                  <p className="text-white text-sm mt-1">Inspect and repair the damaged road surface</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center shadow-xl">
                <span className="text-lg font-bold leading-none">AI</span>
                <span className="text-xs leading-none">Powered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-5 text-center card-hover"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} mb-3 text-2xl`}>
                {stat.icon}
              </div>
              <p className="text-white font-extrabold text-2xl mb-1">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-blue-200 text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
