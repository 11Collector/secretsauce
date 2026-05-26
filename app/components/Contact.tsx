"use client";

import { useState } from "react";
import {
  Send,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  Download,
  CheckCircle,
} from "lucide-react";

const TikTokIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.84 4.84 0 0 1-1.01-.07z"/>
  </svg>
);

const socialLinks = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "emotion.tuii@gmail.com",
    href: "mailto:emotion.tuii@gmail.com",
    desc: "ตอบกลับภายใน 24 ชั่วโมง",
  },
  {
    icon: <Instagram size={18} />,
    label: "Instagram",
    value: "@upskillwithfuii",
    href: "https://www.instagram.com/upskillwithfuii/",
    desc: "Self-Dev Content & Reels",
  },
  {
    icon: <TikTokIcon />,
    label: "TikTok",
    value: "@upskillwithfuii",
    href: "https://www.tiktok.com/@upskillwithfuii",
    desc: "Short-form ความรู้รายวัน",
  },
  {
    icon: <Facebook size={18} />,
    label: "Facebook",
    value: "Tanawat L.",
    href: "https://www.facebook.com/tanawatl/",
    desc: "Personal page",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    label: "X (Twitter)",
    value: "@FuiiThanawat",
    href: "https://x.com/FuiiThanawat",
    desc: "ความคิดและ insights",
  },
  {
    icon: <Youtube size={18} />,
    label: "Website",
    value: "upskilleveryday.com",
    href: "https://www.upskilleveryday.com",
    desc: "Platform + Interactive Tools",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mlgvpabe", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งครับ");
      }
    } catch {
      alert("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งครับ");
    }
    setSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-red/6 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            05 · Contact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            ถ้าสนใจ — ผมอยู่ตรงนี้ครับ
          </h2>
          <p className="text-neutral-400 text-base max-w-md mx-auto leading-relaxed">
            ยินดีคุยทุกช่องทาง ไม่ว่าจะเป็นคำถาม feedback
            หรือนัดสัมภาษณ์ — ผมตอบไวครับ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Contact form */}
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <h3 className="text-white font-semibold text-lg mb-6">
              ส่งข้อความถึงผม
            </h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
                <div className="w-16 h-16 bg-brand-red/15 rounded-full flex items-center justify-center">
                  <CheckCircle size={28} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-white font-semibold text-lg">
                    ส่งแล้ว ขอบคุณมากครับ!
                  </p>
                  <p className="text-neutral-400 text-sm mt-1">
                    ผมจะตอบกลับภายใน 24 ชั่วโมงครับ
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-brand-red text-sm hover:underline"
                >
                  ส่งข้อความอีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-neutral-400 text-xs mb-1.5 font-medium">
                      ชื่อ *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="คุณเคน นครินทร์"
                      className="w-full bg-dark-700 border border-dark-400 rounded-lg px-4 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-neutral-400 text-xs mb-1.5 font-medium">
                      อีเมล *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="email@thestandard.co"
                      className="w-full bg-dark-700 border border-dark-400 rounded-lg px-4 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-red/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-neutral-400 text-xs mb-1.5 font-medium">
                    ข้อความ *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="สวัสดีครับ ผมสนใจอยากคุยกับคุณเพิ่มเติมเกี่ยวกับ..."
                    className="w-full bg-dark-700 border border-dark-400 rounded-lg px-4 py-2.5 text-white text-sm placeholder-neutral-600 focus:outline-none focus:border-brand-red/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-brand-red hover:bg-brand-red-dark text-white font-semibold rounded-lg transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      กำลังส่ง...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      ส่งข้อความ
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right: Social links + resume */}
          <div className="flex flex-col gap-4">
            {/* Resume download */}
            <div className="glass-card rounded-xl p-5 flex items-center justify-between gap-4 border-brand-red/15 bg-brand-red/5">
              <div>
                <p className="text-white font-semibold">ดาวน์โหลด Resume</p>
                <p className="text-neutral-400 text-xs mt-0.5">
                  Web · Print-to-PDF · อัปเดตล่าสุด พ.ค. 2568
                </p>
              </div>
              <a
                href="/resume"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-brand-red hover:bg-brand-red-dark text-white text-sm font-medium rounded-lg transition-colors flex-shrink-0"
              >
                <Download size={14} />
                ดู Resume
              </a>
            </div>

            {/* Social links */}
            <div className="flex flex-col gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-dark-400/80 transition-all group"
                >
                  <div className="w-10 h-10 bg-dark-600 group-hover:bg-dark-500 rounded-lg flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors flex-shrink-0">
                    {social.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{social.label}</p>
                    <p className="text-neutral-500 text-xs truncate">{social.value}</p>
                  </div>
                  <p className="text-neutral-600 text-xs hidden sm:block text-right flex-shrink-0 max-w-[120px]">
                    {social.desc}
                  </p>
                </a>
              ))}
            </div>

            {/* Availability badge */}
            <div className="glass-card rounded-xl p-4 flex items-center gap-3">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-neutral-200 text-sm font-medium">
                  พร้อมรับการสัมภาษณ์
                </p>
                <p className="text-neutral-500 text-xs">
                  ยินดีนัดคุยทั้งออนไลน์และออฟไลน์ · กรุงเทพฯ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-dark-600/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-600 text-xs">
          <p>© 2567 ฟุ้ย · ธนวัฒน์ หล่อวิทยโอฬาร — สร้างด้วย Next.js &amp; Tailwind CSS</p>
          <p>
            Built for{" "}
            <span className="text-neutral-500">The Standard / The Secret Sauce</span>{" "}
            Application
          </p>
        </div>
      </div>
    </section>
  );
}
