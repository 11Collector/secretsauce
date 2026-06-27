"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";

type Requirement = {
  id: number;
  jd: string;
  match: string;
  detail: string;
  tags: string[];
};

const requirements: Requirement[] = [
  {
    id: 1,
    jd: "เชี่ยวชาญด้าน Frontend Development (React, Next.js, TypeScript, CSS)",
    match: "เขียนหน้าเว็บ (Frontend)",
    detail:
      "ผมสามารถเขียนและสร้างหน้าเว็บทั่วไปด้วย React, Next.js และปรับแต่ง CSS ให้ดูดี ใช้งานได้ดีทั้งบนคอมพิวเตอร์และมือถือเพื่อให้ผู้ใช้งานเปิดเล่นได้สะดวกสบาย",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Frontend"],
  },
  {
    id: 2,
    jd: "เข้าใจระบบการเก็บข้อมูลและการจัดการ Database ทั่วไป",
    match: "ระบบเก็บข้อมูล (Firebase)",
    detail:
      "ผมคุ้นเคยและเข้าใจการใช้งาน Firebase (เช่น Cloud Firestore) ในการเก็บบันทึกข้อมูลคะแนนและสถิติการเล่นแบบสอบถามของผู้ใช้ เพื่อนำมาแสดงผลได้ถูกต้อง",
    tags: ["Firebase", "Cloud Firestore", "NoSQL", "Database"],
  },
  {
    id: 3,
    jd: "มีความเชี่ยวชาญในการใช้ Generative AI (LLMs) เพื่อช่วยในการพัฒนาโค้ด",
    match: "ใช้ AI ช่วยเขียนโค้ด",
    detail:
      "ผมไม่ได้จำโค้ดได้ทั้งหมด แต่ผมชอบใช้ AI (เช่น Gemini, Claude) มาช่วยไกด์โครงสร้างระบบ ค้นหาบั๊ก และเขียนโค้ดทดสอบ เพื่อย่นเวลาการทำงานและแก้ข้อจำกัดของตัวเอง",
    tags: ["AI Tools", "Gemini & Claude", "Problem Solving", "Efficiency"],
  },
  {
    id: 4,
    jd: "มีความสนใจและความเข้าใจในโลกธุรกิจ การลงทุน และการเงิน",
    match: "เข้าใจความต้องการธุรกิจ",
    detail:
      "จากประสบการณ์การทำงานเป็น Account Executive (AE) ดูแลระบบเทรดและลูกค้าสถาบันการเงินที่ Settrade ทำให้ผมเข้าใจมุมมองธุรกิจ การประสานงาน และเป้าหมายการส่งมอบผลิตภัณฑ์ที่ตอบโจทย์ความต้องการของผู้ใช้จริงๆ",
    tags: ["Business Mindset", "Finance", "Settrade", "Side Projects"],
  },
  {
    id: 5,
    jd: "มีมุมมองด้านการทำคอนเทนต์และการเข้าถึงกลุ่มเป้าหมาย (Marketing)",
    match: "ทำคอนเทนต์ & ทำการตลาด",
    detail:
      "ผมชอบคิดหาวิธีเชิญชวนผู้คน และใส่ลูกเล่นปุ่มแชร์ต่อลงโซเชียลมีเดียในตำแหน่งที่เหมาะสม ทำให้เครื่องมือประเมินจิตวิทยาที่ผมสร้างมีผู้ใช้งานแชร์ปากต่อปากถึง 120,000 คน",
    tags: ["Organic Growth", "Social Sharing", "User Psychology", "Content Marketing"],
  },
  {
    id: 6,
    jd: "มีนิสัยรักการวิเคราะห์ข้อมูลและวัดผลจากการใช้งานจริง",
    match: "คอยเช็คฟีดแบ็กคนใช้เว็บ",
    detail:
      "ผมมักดูสถิติจริงหลังบ้านเพื่อเช็คว่าผู้ใช้ชอบใช้งานส่วนไหน หรือจุดใดที่คนเบื่อและปิดเว็บทิ้ง เพื่อจะได้นำมาปรับเปลี่ยนดีไซน์หน้าเว็บให้ใช้งานง่ายขึ้น",
    tags: ["Data Analytics", "UX Improvement", "User Feedback", "Iteration"],
  },
  {
    id: 7,
    jd: "มีทักษะภาษาอังกฤษในระดับดี สามารถศึกษา ค้นคว้า แหล่งข้อมูลต่างประเทศได้",
    match: "อ่านคู่มืออังกฤษได้สบาย",
    detail:
      "ผมคุ้นเคยกับการอ่านคู่มือการเขียนโค้ด การค้นหาตัวอย่างแก้ปัญหาภาษาอังกฤษบนเว็บต่างประเทศ (เช่น Stack Overflow, GitHub) เพื่อเอามาแก้จุดติดขัดในงาน",
    tags: ["English Research", "Tech documentation", "Bilingual"],
  },
  {
    id: 8,
    jd: "มีทักษะในการแก้ปัญหาที่เป็นระบบและความคิดจากรากฐาน (First-Principles)",
    match: "คิดแก้ปัญหาเป็นขั้นตอน",
    detail:
      "พื้นฐานจากคณะวิศวกรรมคอมพิวเตอร์ จุฬาฯ ช่วยสอนให้ผมมองหาต้นเหตุของปัญหา และวิเคราะห์เพื่อแก้โค้ดทีละสเต็ปอย่างมีหลักการ ไม่ใช้วิธีลองเดามั่วๆ ไปเรื่อย",
    tags: ["Problem Solving", "Root Cause Analysis", "Computer Engineering"],
  },
  {
    id: 9,
    jd: "ใส่ใจการทำงานเป็นทีม การจัดทำเอกสาร และสื่อสารทางเทคนิคให้เข้าใจง่าย",
    match: "พูดและอธิบายเข้าใจง่าย",
    detail:
      "จากการที่ผมชอบเขียนสรุปอธิบายเรื่องทักษะและการพัฒนาตัวเองบน X ทำให้ผมถนัดแปลคำศัพท์เทคนิคยากๆ ให้คนทั่วไป หรือฝ่ายธุรกิจเข้าใจความหมายได้รวดเร็ว",
    tags: ["Communication", "Collaboration", "Documentation"],
  },
  {
    id: 10,
    jd: "มี Growth Mindset และความกระหายในการเรียนรู้เทคโนโลยีใหม่ๆ",
    match: "ชอบลองเรียนรู้สิ่งใหม่",
    detail:
      "ผมเป็นคนเปิดรับสิ่งใหม่ตลอดเวลา เครื่องมือตัวไหนหรือสไตล์การเขียนโค้ดแบบไหนที่ไม่เคยทำ ผมก็ยินดีเรียนรู้เพิ่มเติมเพื่อเอามาปรับปรุงงานให้เสร็จสมบูรณ์",
    tags: ["Continuous Learning", "Lifelong Learner", "Adaptability"],
  },
];

export default function BlueprintSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="blueprint" className="py-24 relative">
      <div className="section-divider mb-0" />

      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-brand-red/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-14">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            01 · The Blueprint
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            ทักษะและ{" "}
            <span className="red-gradient-text">ประวัติย่อ</span>{" "}
            ของผม
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            10 มิติด้านวิศวกรรม การตลาด และความคุ้นเคยกับการใช้ AI สร้างงานออนไลน์
            — คลิกแต่ละข้อเพื่อดูรายละเอียด
          </p>
        </div>

        {/* Match score banner */}
        <div className="glass-card rounded-xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 flex-shrink-0">
              <svg className="w-16 h-16 -rotate-90" viewBox="0 0 64 64">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#1E1E1E"
                  strokeWidth="4"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  fill="none"
                  stroke="#C8102E"
                  strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * 0.0}`}
                  strokeLinecap="round"
                />
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm">
                10/10
              </span>
            </div>
            <div>
              <p className="text-white font-semibold">AI-Assisted Web Builder</p>
              <p className="text-neutral-500 text-sm">
                ใช้ AI ช่วยพัฒนาโค้ด + ความเข้าใจ Content & Marketing
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              AI-Assisted Build ✓
            </span>
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              Business Acumen ✓
            </span>
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              Content & Marketing ✓
            </span>
          </div>
        </div>

        {/* Background card */}
        <div className="glass-card rounded-xl p-5 mb-8 grid sm:grid-cols-2 gap-5">
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
              <span className="text-brand-red text-sm">🎓</span>
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">การศึกษา</p>
              <p className="text-white font-semibold text-sm">วิศวกรรมคอมพิวเตอร์</p>
              <p className="text-neutral-400 text-xs mt-0.5">จุฬาลงกรณ์มหาวิทยาลัย</p>
              <p className="text-neutral-600 text-xs mt-1">Systems Thinking · First-Principles · Tech Foundation</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
              <span className="text-brand-red text-sm">💼</span>
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">การทำงาน &amp; ผลงานส่วนตัว</p>
              <p className="text-white font-semibold text-sm">อดีต AE (Settrade) &amp; ผู้สร้าง upskilleveryday.com</p>
              <p className="text-neutral-400 text-xs mt-0.5">Client Relations (Settrade) &amp; Self-Taught Web Builder</p>
              <p className="text-neutral-600 text-xs mt-1">Client Management · Tech Self-Learning · AI-Assisted Build</p>
            </div>
          </div>
        </div>

        {/* Requirements grid */}
        <div className="grid gap-3">
          {requirements.map((req) => (
            <div
              key={req.id}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                expanded === req.id
                  ? "border-brand-red/30 bg-brand-red/5"
                  : "hover:border-dark-400/80"
              }`}
              onClick={() =>
                setExpanded(expanded === req.id ? null : req.id)
              }
            >
              <div className="flex items-start gap-4 p-4 sm:p-5">
                {/* Number + check */}
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-dark-600 flex items-center justify-center text-xs text-neutral-500 font-bold group-hover:bg-dark-500 transition-colors">
                  {req.id}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <p className="text-neutral-400 text-sm leading-relaxed pr-4">
                      <span className="text-neutral-600 text-xs">JD: </span>
                      {req.jd}
                    </p>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <CheckCircle2
                        size={16}
                        className="text-brand-red flex-shrink-0"
                      />
                      <span className="text-white text-sm font-semibold whitespace-nowrap">
                        {req.match}
                      </span>
                    </div>
                  </div>

                  {/* Expanded detail */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded === req.id
                        ? "max-h-64 mt-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-neutral-300 text-sm leading-relaxed pb-2">
                      {req.detail}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {req.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-brand-red/15 border border-brand-red/20 text-brand-red text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Toggle icon */}
                <div className="flex-shrink-0 text-neutral-600">
                  {expanded === req.id ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
