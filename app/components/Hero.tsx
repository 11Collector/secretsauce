"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ExternalLink, Play } from "lucide-react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlueprint = () => {
    document.querySelector("#blueprint")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Red accent glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Subtle glow bottom-left */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div
          className={`transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            {/* Left: text content */}
            <div className="flex-1">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-red/10 border border-brand-red/20 rounded-full mb-8">
                <span className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" />
                <span className="text-brand-red text-xs font-medium tracking-wider uppercase">
                  ฟุ้ย · สมัครตำแหน่ง Content Creator · The Standard / The Secret Sauce
                </span>
              </div>

              {/* Main headline */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold leading-[0.95] mb-6">
                <span className="block text-white">ธนวัฒน์</span>
                <span className="block red-gradient-text">หล่อวิทยโอฬาร</span>
              </h1>

              {/* Subhead */}
              <div className="mt-8 max-w-xl">
                <p className="text-neutral-300 text-lg sm:text-xl leading-relaxed">
                  วิศวกรคอมพิวเตอร์ที่ผันตัวมาทำ Content —{" "}
                  <span className="text-white font-semibold">เพราะเชื่อว่าไอเดียที่ดีสื่อสารไม่เก่ง ก็ไม่ต่างจากไม่มีไอเดีย</span>
                </p>
                <p className="text-neutral-500 text-base mt-3 leading-relaxed">
                  จากฝั่ง Marketing & App ที่ Settrade สู่ Content Creator ที่สร้าง ~10M Views บน X
                  — ผมเอา Systems Thinking มาใช้ทำ Content ที่คนไม่แค่อ่าน แต่เอาไปทำต่อ
                </p>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-6 mt-10 mb-10">
                {[
                  { number: "~10M", label: "Total X Views" },
                  { number: "5", label: "Interactive Tools" },
                  { number: "7", label: "Viral Threads" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl sm:text-3xl font-bold text-white">
                      {stat.number}
                    </span>
                    <span className="text-neutral-500 text-xs mt-0.5">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={scrollToPortfolio}
                  className="group flex items-center gap-2 px-6 py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded transition-all duration-200 text-sm"
                >
                  <Play size={16} className="group-hover:scale-110 transition-transform" />
                  ดู Portfolio ของผม
                </button>
                <button
                  onClick={scrollToBlueprint}
                  className="flex items-center gap-2 px-6 py-3 border border-dark-400 hover:border-neutral-500 text-neutral-300 hover:text-white font-medium rounded transition-all duration-200 text-sm"
                >
                  ทำไมผมถึงใช่
                  <ExternalLink size={14} />
                </button>
                <a
                  href="/resume"
                  target="_blank"
                  className="flex items-center gap-2 px-6 py-3 bg-dark-600 hover:bg-dark-500 text-neutral-300 hover:text-white font-medium rounded transition-all duration-200 text-sm"
                >
                  ดาวน์โหลด Resume (PDF)
                </a>
              </div>
            </div>

            {/* Right: profile photo */}
            <div className="flex-shrink-0 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-brand-red/20 blur-2xl scale-110 pointer-events-none" />
                {/* Border ring */}
                <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-brand-red/30 ring-4 ring-dark-600">
                  <img
                    src="/profile.jpg"
                    alt="ธนวัฒน์ หล่อวิทยโอฬาร"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-dark-700 border border-dark-500 rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-xl">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-medium">พร้อมสัมภาษณ์</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-neutral-600 text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown
            size={16}
            className="text-neutral-600 animate-bounce"
          />
        </div>
      </div>

      {/* Bottom marquee */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-dark-600/50 overflow-hidden py-3">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <span key={i} className="text-neutral-700 text-xs tracking-wider mx-8">
                Content Creator · Business Analyst · Platform Builder · Storyteller · The Secret Sauce ·
              </span>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
