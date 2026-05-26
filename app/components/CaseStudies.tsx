"use client";

import React, { useState } from "react";
import {
  Search,
  Database,
  PenTool,
  TrendingUp,
  ChevronRight,
  Zap,
  Star,
  Target,
  Lightbulb,
} from "lucide-react";

type CaseStudy = {
  id: number;
  label: string;
  problem: string;
  insight: string;
  steps: {
    icon: React.ReactNode;
    label: string;
    detail: string;
  }[];
  outcome: string;
  outcomeHighlight: string;
  tags: string[];
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    label: "DISC Tool",
    problem:
      "แบบประเมิน DISC ที่มีในตลาดส่วนใหญ่น่าเบื่อ ซับซ้อน และผลที่ได้ไม่ Actionable — คนทำแล้วก็ลืม",
    insight:
      "คนไม่ต้องการรู้แค่ว่าตัวเองเป็น Type อะไร — คนต้องการรู้ว่า 'แล้วผมควรทำอะไรต่อ?' นั่นคือ gap ที่ทุก tool พลาด",
    steps: [
      {
        icon: <Search size={16} />,
        label: "1. พบ Pain Point",
        detail:
          "ทดลองใช้ DISC tools ในตลาดกว่า 10 อัน ทั้งไทยและต่างประเทศ — ทุกอันหยุดที่ 'คุณคือ Type D' แต่ไม่มีใครบอกว่า 'แล้วควรพัฒนาอะไร?' หรือ 'ควรทำงานกับคน Type S อย่างไร?' นั่นคือ content gap ที่ชัดเจน",
      },
      {
        icon: <Database size={16} />,
        label: "2. Research & Design",
        detail:
          "ศึกษา Gamification Psychology, Behavioral Nudge Design, และ UX ของ tools ที่คนติดใช้จริง (Duolingo, 16Personalities) — แล้ว map กับ DISC research จาก Wiley เพื่อออกแบบ question flow ใหม่ทั้งหมดที่ผู้ใช้รู้สึก engage ไม่ใช่แค่กรอกแบบฟอร์ม",
      },
      {
        icon: <PenTool size={16} />,
        label: "3. Build & Iterate",
        detail:
          "เพิ่ม result page ใหม่ที่มี 3 layer: ด้านแข็ง → จุดระวัง (ด้านมืด) → วิธีทำงานกับคน type อื่น พร้อม visual ที่ share-worthy — แล้ว iterate ต่อเนื่องจาก feedback ของผู้ใช้จริง",
      },
      {
        icon: <TrendingUp size={16} />,
        label: "4. Result",
        detail:
          "มีผู้ใช้จริงกว่า 120,000 คน บน X — feedback ส่วนใหญ่บอกว่าผลแม่น ผู้ใช้ spontaneously แชร์ให้เพื่อน สร้าง organic growth แบบ word-of-mouth Thread ที่เล่ากระบวนการสร้างได้ 3.3M Views",
      },
    ],
    outcome:
      "DISC Tool ที่คนแชร์ต่อเพราะ 'โดนใจ' และ 'มีประโยชน์จริง' — ไม่ใช่แค่ fun quiz ที่ทำแล้วลืม",
    outcomeHighlight: "3.3M Views",
    tags: ["DISC", "Product Design", "UX", "Gamification", "Self-Dev"],
  },
  {
    id: 2,
    label: "XP Gamification",
    problem:
      "upskilleveryday.com มี Content และ Tools ที่ดี แต่คนอ่านแล้วปิด — ไม่มี mechanism ที่ทำให้คนรู้สึกว่า 'กำลังเติบโต' และอยากกลับมาซ้ำ",
    insight:
      "คนไม่ขาดแรงจูงใจเรื่องการพัฒนาตัวเอง — คนขาด Feedback Loop ที่บอกว่า 'ฉันกำลัง Progress' นั่นคือสิ่งที่ Game เข้าใจมาตลอด",
    steps: [
      {
        icon: <Search size={16} />,
        label: "1. พบ Root Cause",
        detail:
          "วิเคราะห์ว่าทำไม self-dev content ถึงถูกอ่านแล้วลืม — Root Cause ไม่ใช่เรื่อง content quality แต่คือไม่มี Progress Indicator ที่ trigger dopamine feedback loop เหมือนที่ game และ social media ทำได้ดี",
      },
      {
        icon: <Database size={16} />,
        label: "2. Gamification Research",
        detail:
          "ศึกษา Octalysis Framework ของ Yu-kai Chou, Duolingo streak mechanics, และ RPG progression system — distill เป็น 3 mechanic หลักที่ใช้ได้กับ self-dev: XP Points, Skill Tree, และ Level Badge ตามสายที่ผู้ใช้สนใจ (Finance / Leadership / Mindset)",
      },
      {
        icon: <PenTool size={16} />,
        label: "3. System Design",
        detail:
          "ออกแบบ XP Economy: อ่านบทความ → XP, ทำ Assessment Tool → XP bonus, เก็บ Skill Points แยกตาม category, unlock Level Badge เมื่อถึง threshold — ทั้งหมดนี้สร้าง Progress Dashboard ที่ผู้ใช้อยากกลับมาดูซ้ำ",
      },
      {
        icon: <Zap size={16} />,
        label: "4. Vision & Next Step",
        detail:
          "Platform ที่คนกลับมาซ้ำไม่ใช่เพราะ notification — แต่เพราะอยากเก็บ XP, ดู Skill Tree ของตัวเอง และ unlock Badge ใหม่ เป้าหมายคือทำให้ Self-Development รู้สึกเหมือนเล่น RPG ที่ตัวเอกคือตัวผู้ใช้เอง",
      },
    ],
    outcome:
      "Product Vision: Self-Dev Platform ที่ให้ความรู้สึก rewarding ทุก session — เพราะการเติบโตควรรู้สึกได้จริง ไม่ใช่แค่รู้สึกว่า 'ควรทำ'",
    outcomeHighlight: "Retention ↑",
    tags: ["Gamification", "Product Design", "UX", "Retention", "upskilleveryday.com"],
  },
];

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const cs = caseStudies[active];

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-red/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            03 · Case Studies
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            เบื้องหลัง
            <span className="red-gradient-text"> ความคิด</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            ผมเริ่มจาก Problem ที่เจ็บปวดจริง — ไม่ใช่ไอเดียในอากาศ
            นี่คือกระบวนการคิดและสร้างของผม 2 เคส
          </p>
        </div>

        {/* Case selector */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {caseStudies.map((item, i) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(i);
                setActiveStep(null);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                active === i
                  ? "bg-brand-red text-white"
                  : "bg-dark-600 text-neutral-400 hover:text-white hover:bg-dark-500"
              }`}
            >
              {i === 0 ? <Target size={14} /> : <Star size={14} />}
              Case {i + 1}: {item.label}
            </button>
          ))}
        </div>

        {/* Case study detail */}
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left: problem / insight / outcome */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Problem */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-dark-500 rounded flex items-center justify-center">
                  <Search size={11} className="text-neutral-400" />
                </div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider">
                  Problem ที่พบ
                </p>
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed font-medium">
                {cs.problem}
              </p>
            </div>

            {/* Core Insight */}
            <div className="glass-card rounded-xl p-5 border-brand-red/20 bg-brand-red/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-5 h-5 bg-brand-red/20 rounded flex items-center justify-center">
                  <Lightbulb size={11} className="text-brand-red" />
                </div>
                <p className="text-neutral-500 text-xs uppercase tracking-wider">
                  Core Insight
                </p>
              </div>
              <p className="text-white text-sm leading-relaxed font-semibold">
                "{cs.insight}"
              </p>
            </div>

            {/* Outcome */}
            <div className="glass-card rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-dark-500 rounded flex items-center justify-center">
                    <TrendingUp size={11} className="text-neutral-400" />
                  </div>
                  <p className="text-neutral-500 text-xs uppercase tracking-wider">
                    ผลลัพธ์
                  </p>
                </div>
                <span className="text-brand-red font-bold text-sm">
                  {cs.outcomeHighlight}
                </span>
              </div>
              <p className="text-neutral-200 text-sm leading-relaxed">
                {cs.outcome}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 bg-dark-600 text-neutral-400 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: process steps */}
          <div className="lg:col-span-3">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">
              กระบวนการทำงาน — คลิกแต่ละขั้นเพื่อดูรายละเอียด
            </p>
            <div className="flex flex-col gap-3">
              {cs.steps.map((step, i) => (
                <div
                  key={i}
                  className={`glass-card rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                    activeStep === i
                      ? "border-brand-red/30 bg-brand-red/5"
                      : "hover:border-dark-400/80"
                  }`}
                  onClick={() => setActiveStep(activeStep === i ? null : i)}
                >
                  <div className="flex items-center gap-4 p-4">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        activeStep === i
                          ? "bg-brand-red/20 text-brand-red"
                          : "bg-dark-600 text-neutral-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="text-white font-semibold text-sm flex-1">
                      {step.label}
                    </span>
                    <ChevronRight
                      size={16}
                      className={`text-neutral-600 transition-transform duration-300 ${
                        activeStep === i ? "rotate-90" : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeStep === i
                        ? "max-h-48 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-neutral-300 text-sm leading-relaxed px-4 pb-4">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process flow */}
            <div className="mt-6 glass-card rounded-xl p-5">
              <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">
                กระบวนการสร้าง Content ของผม
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {["Spot Problem", "Research", "Synthesize", "Build / Write", "Iterate", "Publish", "Measure"].map(
                  (step, i, arr) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-dark-600 text-neutral-300 text-xs rounded font-medium whitespace-nowrap">
                        {step}
                      </span>
                      {i < arr.length - 1 && (
                        <ChevronRight size={12} className="text-neutral-700 flex-shrink-0" />
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
