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
                    Content Creator Application · The Standard / The Secret Sauce
                  </span>
                </div>
                <h1 className="text-3xl font-bold leading-tight tracking-tight">
                  ธนวัฒน์ หล่อวิทยโอฬาร
                </h1>
                <p className="text-[#A3A3A3] text-base mt-0.5">
                  ฟุ้ย · Content Creator &amp; Platform Builder
                </p>
                <p className="text-[#E50914] text-sm font-medium mt-2">
                  วิศวกรคอมพิวเตอร์ที่เอา Systems Thinking มาทำ Content ที่คนนำไปใช้จริง
                </p>
                </div>
              </div>

              {/* Contact block */}
              <div className="flex flex-col gap-1.5 text-right print:text-right sm:text-right text-left sm:flex-shrink-0">
                {[
                  { icon: <Mail size={12} />, text: "emotion.tuii@gmail.com" },
                  { icon: <XIcon />, text: "@FuiiThanawat · ~10M Views" },
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

              {/* Content Stats */}
              <section className="mb-4">
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-2 border-b border-[#E50914]/20 pb-1">
                  Content Stats
                </h2>
                <div className="flex flex-col gap-1.5">
                  {[
                    { n: "~10M", l: "Total X Views" },
                    { n: "7", l: "Viral Threads" },
                    { n: "3.3M", l: "Top Thread Views" },
                    { n: "5", l: "Interactive Tools" },
                    { n: "30+", l: "บทความ Self-Dev" },
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
                    "X / Social Threads",
                    "Business Analysis",
                    "Research & Synthesis",
                    "Interactive UX Design",
                    "Content Structuring",
                    "Data-Driven Storytelling",
                    "Trend Spotting",
                    "Narrative Design",
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

              {/* Technical */}
              <section>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  Technical
                </h2>
                <div className="flex flex-wrap gap-1">
                  {["Next.js", "React", "TypeScript", "Tailwind"].map((t) => (
                    <span key={t} className="px-1.5 py-0.5 bg-[#E8E8E8] text-[9px] text-[#555] rounded">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-[9px] text-[#888] mt-2">
                  Built upskilleveryday.com from scratch
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
                  จบวิศวกรรมคอมพิวเตอร์จากจุฬาฯ แล้วเริ่มต้นอาชีพเป็น Account Executive
                  ที่ตลาดหลักทรัพย์แห่งประเทศไทย — ก่อนจะ pivot มาทำ Content Creator เต็มตัว
                  เพราะเชื่อว่า{" "}
                  <strong className="text-[#111]">
                    ไอเดียที่ดีสื่อสารไม่เก่ง ก็ไม่ต่างจากไม่มีไอเดีย
                  </strong>
                </p>
                <p className="text-[11px] text-[#333] leading-relaxed mt-2">
                  ผมเอา Systems Thinking จากวิศวะมาใช้ทำ Content — วิเคราะห์ก่อน เขียนทีหลัง
                  สร้าง Interactive Tools 5 ชิ้นบน upskilleveryday.com
                  และ Viral X Threads รวม ~10M Views ใน 7 Threads
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
                        Content Creator &amp; Platform Builder
                      </h3>
                      <p className="text-[10px] text-[#E50914] font-medium">
                        upskilleveryday.com · Self-Owned
                      </p>
                    </div>
                    <span className="text-[9px] text-[#888] flex-shrink-0 mt-0.5">
                      2023 – Present
                    </span>
                  </div>
                  <ul className="flex flex-col gap-1 mt-2">
                    {[
                      "สร้าง Interactive Self-Development Tools 5 ชิ้น (DISC Assessment, Wheel of Life, Money Avatar ฯลฯ) จาก 0 ด้วย Next.js + TypeScript",
                      "เขียนบทความเชิงวิเคราะห์ธุรกิจและ Self-Development 30+ บทความ",
                      "สร้าง Viral X Threads รวม ~10M Total Views ใน 7 Threads — สูงสุด 3.3M Views (DISC Tool Thread)",
                      "ออกแบบ Content Strategy ทั้ง Short-form Threads, บทความเชิงลึก, และ Interactive Format",
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
                        Marketing &amp; App Operations
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
                      "ทำการตลาดและดูแล Streaming App ของ Settrade",
                      "จัดทำ User Manual สำหรับการใช้งาน App ให้ผู้ใช้เข้าใจง่าย",
                      "ได้สัมผัสโลก Capital Markets และ Financial Product จากการทำงานจริง",
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

              {/* Why The Secret Sauce */}
              <section>
                <h2 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#E50914] mb-3 border-b border-[#E50914]/20 pb-1">
                  ทำไมถึงอยากร่วมงานกับ The Secret Sauce
                </h2>
                <p className="text-[11px] text-[#333] leading-relaxed">
                  The Secret Sauce คือ Podcast ที่ผมฟังและเรียนรู้จริงๆ ไม่ใช่แค่พูดเพื่อสมัครงาน
                  สไตล์การเจาะลึก Founder Mindset ตรงกับวิธีที่ผมเสพและสร้าง Content มาตลอด
                  — ผมอยากเอา Perspective ของคนที่ผ่านทั้ง Engineering, Capital Markets, และ
                  Creator Economy มาช่วยสร้างเนื้อหาที่ลึกกว่าและ Actionable กว่าที่มีอยู่ในตลาด
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
