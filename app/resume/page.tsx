"use client";

import { Printer, Mail, Globe, Instagram } from "lucide-react";

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function ResumePage() {
  return (
    <>
      {/* Print button — hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50 flex gap-2">
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 bg-[#E50914] hover:bg-[#c5000f] text-white text-sm font-semibold rounded-lg transition-colors shadow-lg"
        >
          <Printer size={15} />
          Export PDF
        </button>
        <a
          href="/"
          className="flex items-center gap-2 px-4 py-2 bg-[#1F1F1F] hover:bg-[#2a2a2a] text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-colors border border-[#333]"
        >
          ← Back to Portfolio
        </a>
      </div>

      {/* Resume body */}
      <div className="min-h-screen print:min-h-0 bg-[#F0F0F0] text-[#111] font-sans print:p-0 print:bg-white">
        <div className="overflow-x-auto py-4 px-2 print:p-0">
        <div
          className="resume-doc mx-auto bg-white shadow-2xl print:shadow-none flex flex-col"
          style={{ height: "1123px", width: "794px" }}
        >
          {/* ── HEADER ─────────────────────────────────── */}
          <header className="bg-[#0B0B0B] text-white px-8 pt-6 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-5">
                {/* Profile photo */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden border-2 border-[#E50914]/40 hidden sm:block">
                  <img
                    src="/profile.jpg"
                    alt="ธนวัฒน์ หล่อวิทยโอฬาร"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-[#E50914]/15 border border-[#E50914]/25 rounded-full mb-3">
                    <span className="w-1.5 h-1.5 bg-[#E50914] rounded-full" />
                    <span className="text-[#E50914] text-[10px] font-semibold tracking-widest uppercase">
                      Self-Taught Web Builder &amp; Creator Resume
                    </span>
                  </div>
                  <h1 className="text-3xl font-bold leading-tight tracking-tight">
                    ธนวัฒน์ หล่อวิทยโอฬาร
                  </h1>
                  <p className="text-[#A3A3A3] text-base mt-0.5">
                    ธนวัฒน์ (ฟุ้ย) · Self-Taught Web Builder &amp; Creator
                  </p>
                  <p className="text-[#E50914] text-sm font-medium mt-2">
                    วิศวกรคอมพิวเตอร์สายธุรกิจ (อดีต AE) ที่เรียนรู้เขียนเว็บด้วยตนเองและใช้ AI ช่วยสร้างโปรเจกต์ที่มีผู้เล่นออนไลน์จริง
                  </p>
                </div>
              </div>

              {/* Contact block */}
              <div className="flex flex-col gap-1.5 text-right print:text-right sm:text-right text-left sm:flex-shrink-0">
                {[
                  { icon: <Mail size={12} />, text: "emotion.tuii@gmail.com" },
                  { icon: <XIcon />, text: "@FuiiThanawat" },
                  { icon: <Instagram size={12} />, text: "@upskillwithfuii" },
                  { icon: <Globe size={12} />, text: "upskilleveryday.com" },
                ].map((c) => (
                  <div key={c.text} className="flex items-center gap-1.5 justify-start sm:justify-end text-[#A3A3A3] text-xs">
                    <span className="text-[#555]">{c.icon}</span>
                    {c.text}
                  </div>
                ))}
              </div>
            </div>
          </header>

          {/* ── BODY ──────────────────────────────────── */}
          <div className="grid grid-cols-[200px_1fr] print:grid-cols-[180px_1fr] flex-1 min-h-0">

            {/* LEFT COLUMN */}
            <aside className="bg-[#F7F7F7] px-5 py-5 border-r border-[#E8E8E8]">

              {/* Education */}
              <section className="mb-4">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  การศึกษา
                </h2>
                <div>
                  <p className="font-bold text-[11px] text-[#111] leading-snug">
                    วิศวกรรมคอมพิวเตอร์
                  </p>
                  <p className="text-[10px] text-[#444] mt-0.5 leading-snug">
                    จุฬาลงกรณ์มหาวิทยาลัย
                  </p>
                  <p className="text-[9px] text-[#888] mt-1">
                    Chulalongkorn University
                  </p>
                </div>
              </section>

              {/* Product Stats */}
              <section className="mb-4">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-2 border-b border-[#E50914]/20 pb-1">
                  Product Stats
                </h2>
                <div className="flex flex-col gap-1.5">
                  {[
                    { n: "120K+", l: "Users (แบบประเมิน)" },
                    { n: "5+", l: "Interactive Apps" },
                    { n: "18.9K+", l: "Followers (X/Tiktok/IG/FB)" },
                    { n: "3.3M", l: "Top Thread Views" },
                    { n: "30+", l: "Tech/Self-Dev Articles" },
                  ].map((s) => (
                    <div key={s.l} className="flex items-center justify-between">
                      <span className="text-[11px] text-[#555]">{s.l}</span>
                      <span className="font-bold text-[11px] text-[#111]">{s.n}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Skills */}
              <section className="mb-4">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-2 border-b border-[#E50914]/20 pb-1">
                  ทักษะหลัก
                </h2>
                <div className="flex flex-col gap-1">
                  {[
                    "AI-Assisted Coding",
                    "Next.js & React.js",
                    "TypeScript & Tailwind",
                    "Firebase Integration",
                    "Cloud Firestore (NoSQL)",
                    "Content & Marketing",
                    "Product Sharing Loop",
                    "Structured Solver",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-[#E50914] rounded-full flex-shrink-0" />
                      <span className="text-[10px] text-[#444]">{s}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Languages */}
              <section className="mb-4">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-2 border-b border-[#E50914]/20 pb-1">
                  ภาษา
                </h2>
                <div className="flex flex-col gap-1.5">
                  {[
                    { lang: "ภาษาไทย", level: "Native" },
                    { lang: "English", level: "Working (Read/Listen)" },
                  ].map((l) => (
                    <div key={l.lang}>
                      <div className="flex justify-between mb-0.5">
                        <span className="text-[10px] text-[#444]">{l.lang}</span>
                        <span className="text-[9px] text-[#888]">{l.level}</span>
                      </div>
                      <div className="h-1 bg-[#E0E0E0] rounded-full">
                        <div
                          className="h-1 bg-[#E50914] rounded-full"
                          style={{ width: l.level === "Native" ? "100%" : "65%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tools & Infra */}
              <section>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  เครื่องมือและอินฟราฯ
                </h2>
                <div className="flex flex-wrap gap-1">
                  {["Git/GitHub", "Vercel", "Firebase", "Cloud Firestore", "LLMs (Gemini/Claude)", "SEO Tools"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 bg-[#E8E8E8] text-[9px] text-[#555] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[9px] text-[#888] mt-2">
                  พัฒนาและดูแลระบบ upskilleveryday.com ทั้งหมดด้วยตนเอง
                </p>
              </section>
            </aside>

            {/* RIGHT COLUMN */}
            <main className="px-8 py-7 print:px-7 print:py-6">

              {/* Summary */}
              <section className="mb-7">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  เกี่ยวกับผม
                </h2>
                <p className="text-[11px] text-[#333] leading-relaxed">
                  วิศวกรคอมพิวเตอร์สายธุรกิจจากจุฬาฯ (อดีต AE) ที่ศึกษาเรียนรู้การเขียนเว็บด้วยตนเอง โดยใช้อภิสิทธิ์ความช่วยเหลือจาก AI ในการไกด์เขียนโค้ดและช่วยแก้บั๊ก เพื่อสร้างโปรเจกต์ออนไลน์ที่ใช้งานง่ายและดึงดูดผู้เล่น
                </p>
                <p className="text-[11px] text-[#333] leading-relaxed mt-2">
                  ผมเริ่มการทำงานจากการเป็น Account Executive (AE) ดูแลระบบและลูกค้าที่ Settrade ก่อนจะใช้เวลาว่างลองศึกษาเรียนรู้เขียนเว็บ และพัฒนาโปรเจกต์ของตัวเองอย่าง upskilleveryday.com จนสร้างเครื่องมือ Interactive หลากหลายชิ้นที่มีคนเข้ามาเล่นและบอกต่อสะสมกว่า 120,000 คน พร้อมทำคอนเทนต์ออนไลน์ที่มีผู้ติดตามรวมทุกช่องทางกว่า 18.9K+ คน
                </p>
              </section>

              {/* Experience */}
              <section className="mb-7">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-4 border-b border-[#E50914]/20 pb-1">
                  ประสบการณ์
                </h2>

                {/* Job 1 */}
                <div className="mb-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-[12px] text-[#111]">
                        Web Creator &amp; Builder (Self-Taught)
                      </h3>
                      <p className="text-[10px] text-[#E50914] font-medium">
                        upskilleveryday.com · Personal Side Project (พัฒนาและเรียนรู้ด้วยตนเอง)
                      </p>
                    </div>
                    <span className="text-[9px] text-[#888] flex-shrink-0 mt-0.5">
                      2023 – Present
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1 mt-2">
                    {[
                      "พัฒนาเว็บแอปพลิเคชันด้วย Next.js, React, TypeScript และ Tailwind CSS ให้รองรับหน้าจอมือถือและโหลดหน้าเว็บได้รวดเร็ว",
                      "สร้างแบบทดสอบจิตวิทยา DISC คำนวณคะแนนแบบ Real-time บนบราวเซอร์ และแสดงผลลัพธ์เป็นภาพ Radar Chart ด้วยกราฟิกแบบ SVG",
                      "ทำระบบพรีวิวและปุ่มส่งต่อโซเชียลเพื่อชวนให้ผู้เล่นเกิดความอยากนำไปแชร์ต่อ จนมียอดผู้เข้ามากรอกประเมินจริงออนไลน์สะสมกว่า 120,000 คน",
                      "เรียนรู้และใช้งานเครื่องมือ Generative AI (เช่น Gemini, Claude) เพื่อช่วยเขียนโครงสร้างโค้ด ค้นหารูรั่วของโปรแกรม และช่วยไล่บั๊กในการรันงานส่งโปรดักต์ตัวอย่างออกสู่ตลาดได้อย่างรวดเร็ว",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 bg-[#E50914] rounded-full flex-shrink-0 mt-[5px]" />
                        <span className="text-[10px] text-[#444] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Job 2 */}
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-bold text-[12px] text-[#111]">
                        Account Executive (AE)
                      </h3>
                      <p className="text-[10px] text-[#666] font-medium">
                        Settrade (ในเครือตลาดหลักทรัพย์แห่งประเทศไทย)
                      </p>
                    </div>
                    <span className="text-[9px] text-[#888] flex-shrink-0 mt-0.5">
                      ก่อนหน้า
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1 mt-2">
                    {[
                      "ดูแลความสัมพันธ์และประสานงานกับกลุ่มลูกค้าโบรกเกอร์และสถาบันการเงินในการใช้งานระบบเทรดและแอปพลิเคชัน Streaming",
                      "รวบรวมความต้องการ (Requirements) และ Pain Points ของผู้ใช้งานจริงเพื่อนำมาสรุปและประสานงานร่วมกับทีมพัฒนาระบบ (Tech Team) เพื่อปรับปรุงฟีเจอร์",
                      "นำเสนอขายบริการระบบเทรดของบริษัท และจัดทำคู่มือการใช้งานระบบ (User Manual) เพื่อช่วยอธิบายกระบวนการใช้งานโปรดักต์การเงินให้เข้าใจง่าย",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-1.5">
                        <span className="w-1 h-1 bg-[#555] rounded-full flex-shrink-0 mt-[5px]" />
                        <span className="text-[10px] text-[#444] leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </section>

              {/* Content Highlights */}
              <section className="mb-7">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  X Threads Highlight
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "DISC Tool & Interaction Design", views: "3.3M views" },
                    { title: "Side Hustle Framework", views: "2.5M views" },
                    { title: "La Glace Brand Analysis", views: "1.1M views" },
                    { title: "Lesson Learned Case Study", views: "1M views" },
                    { title: "Money Mindset", views: "850K views" },
                    { title: "Financial Misconceptions", views: "628K + 605K views" },
                  ].map((t) => (
                    <div
                      key={t.title}
                      className="flex items-center justify-between gap-2 bg-[#F7F7F7] rounded px-2.5 py-1.5 border border-[#E8E8E8]"
                    >
                      <span className="text-[9px] text-[#444] leading-tight">{t.title}</span>
                      <span className="text-[9px] font-bold text-[#E50914] flex-shrink-0">{t.views}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Goal */}
              <section>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  เป้าหมายอาชีพ (Career Goal)
                </h2>
                <p className="text-[11px] text-[#333] leading-relaxed">
                  ผมมีความตั้งใจที่จะนำความรู้ด้านการเขียนโค้ดบวกกับความคุ้นเคยในการใช้ AI ช่วยพัฒนาโปรแกรม มาทำงานสร้างสรรค์ผลิตภัณฑ์ เว็บแอปพลิเคชัน หรือเครื่องมือที่ผู้ใช้งานได้รับประโยชน์และพึงพอใจในการเข้าใช้งาน พร้อมเรียนรู้เทคโนโลยีใหม่ๆ และสอดแทรกมุมคิดด้านคอนเทนต์หรือการแนะนำปากต่อปากเพื่อเป็นแรงเสริมขับเคลื่อนทีม
                </p>
              </section>
            </main>
          </div>

          {/* ── FOOTER ────────────────────────────────── */}
          <footer className="bg-[#0B0B0B] px-10 py-4 print:px-8 flex items-center justify-between">
            <p className="text-[#555] text-[9px]">
              ธนวัฒน์ หล่อวิทยโอฬาร · emotion.tuii@gmail.com
            </p>
            <p className="text-[#333] text-[9px]">
              Portfolio: upskilleveryday.com · X: @FuiiThanawat
            </p>
          </footer>
        </div>
        </div>
      </div>

      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: A4 portrait;
          }
          html, body {
            margin: 0;
            padding: 0;
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          /* Force document to exactly A4 */
          .resume-doc {
            width: 210mm !important;
            height: 297mm !important;
            min-height: 297mm !important;
            max-height: 297mm !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
          }
        }
      `}</style>
    </>
  );
}
