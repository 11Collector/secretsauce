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
    label: "DISC Assessment (Product Growth)",
    problem:
      "แบบทดสอบบุคลิกภาพทั่วไปตามอินเทอร์เน็ตส่วนใหญ่ใช้งานยาก มีโฆษณาเยอะ หรือคำถามยาวจนคนกดปิดไปก่อน ทำให้ไม่มีคนอยากเข้ามาเล่นหรือแชร์ต่อให้เพื่อนๆ",
    insight:
      "คนเล่นแบบทดสอบออนไลน์อยากรู้ผลลัพธ์ที่แม่นยำ อ่านเข้าใจง่าย ได้คำแนะนำที่เป็นรูปธรรม และสามารถเซฟรูปภาพสรุปเพื่อไปคุยต่อกับกลุ่มเพื่อนได้สะดวกที่สุด",
    steps: [
      {
        icon: <Search size={16} />,
        label: "1. ค้นพบความต้องการและข้อจำกัด",
        detail:
          "ลองเล่นแบบสอบถามที่มีอยู่ พบว่ามีจุดติดขัด เช่น คำถามเข้าใจยาก หน้าเว็บไม่เหมาะกับมือถือ และไม่มีปุ่มให้คนกดดาวน์โหลดหรือกดแชร์ผลลัพธ์ออกไปง่ายๆ",
      },
      {
        icon: <Database size={16} />,
        label: "2. ออกแบบระบบและการคำนวณ",
        detail:
          "ตั้งคำถามสั้นกระชับ ออกแบบ Flow การเล่นให้จบในไม่กี่นาที และวิจัยหาวิธีใช้โค้ดวาด Radar Chart แบบ SVG ที่โหลดเร็วและไม่หนักระบบ",
      },
      {
        icon: <PenTool size={16} />,
        label: "3. พัฒนาและออกแบบ Interaction",
        detail:
          "เขียนเว็บแอปพลิเคชันด้วย React พัฒนาหน้าแสดงผล Radar Chart ที่วาดด้วยกราฟิก SVG และทำระบบเจเนอเรตรูปภาพสรุปผลให้ผู้เล่นกดเซฟรูปภาพลงเครื่องได้สะดวก",
      },
      {
        icon: <TrendingUp size={16} />,
        label: "4. ผลลัพธ์เชิงการใช้งานและการตอบรับ",
        detail:
          "มีคนเข้ามากรอกเล่นจริงออนไลน์สะสมกว่า 120,000 คน และเกิดกระแสปากต่อปาก มีการแชร์ผลลัพธ์ลงโซเชียล รวมถึงกระทู้สรุปวิธีทำเครื่องมือนี้ได้รับความสนใจสูงถึง 3.3M views บน X",
      },
    ],
    outcome:
      "เครื่องมือประเมิน DISC ฉบับทำเล่นง่ายๆ ที่มีผู้ใช้งานจริงกว่า 120,000 คน โดยเกิดจากการแนะนำปากต่อปากและการทำคอนเทนต์ที่ดี",
    outcomeHighlight: "120K+ Users",
    tags: ["React", "SVG Rendering", "Interaction Design", "Growth Engineering"],
  },
  {
    id: 2,
    label: "XP Gamification Engine (User Retention)",
    problem:
      "ผู้ใช้เข้ามาทำแบบประเมินหรืออ่านบทความแล้วก็ปิดหน้าเว็บหนีไปเลย ขาดความน่าดึงดูดที่ช่วยให้ผู้ใช้อยากแวะเวียนกลับเข้ามาใช้งานใหม่อีกครั้ง",
    insight:
      "ความรู้สึกได้รับรางวัลและการเห็นความก้าวหน้าของตัวเองเหมือนการเก็บเลเวลในเกม (Gamification) เป็นจุดเชิญชวนที่ดีให้ผู้ใช้อยากกลับมาใช้งานซ้ำ",
    steps: [
      {
        icon: <Search size={16} />,
        label: "1. ค้นหาปัจจัยการรักษาผู้ใช้งาน",
        detail:
          "วิเคราะห์ว่าทำไมคนเข้าเว็บพัฒนาตัวเองแล้วไม่กลับมาบ่อยๆ เพราะไม่มีสิ่งที่บันทึกว่าพวกเขาได้เรียนรู้อะไรไปแล้วบ้าง หรือเติบโตขึ้นแค่ไหน",
      },
      {
        icon: <Database size={16} />,
        label: "2. ศึกษาแนวคิดการทำ Gamification",
        detail:
          "ศึกษาแนวคิดการทำ Gamification พื้นฐาน เช่น การแจกคะแนน XP ตามการกระทำ ระบบผังทักษะ (Skill Tree) และตราสัญลักษณ์เพื่อจูงใจคนกลับเข้ามาเช็คสถานะตัวเอง",
      },
      {
        icon: <PenTool size={16} />,
        label: "3. พัฒนาและเชื่อมต่อระบบสะสมแต้ม",
        detail:
          "เขียนระบบจัดการข้อมูลและการสะสมแต้ม XP: อ่านเนื้อหาได้แต้ม ทำแบบทดสอบจิตวิทยาได้แต้มเพิ่มขึ้น และอัปเกรดระดับทักษะแสดงผลบนแดชบอร์ดส่วนตัว",
      },
      {
        icon: <Zap size={16} />,
        label: "4. ผลสัมฤทธิ์และก้าวถัดไป",
        detail:
          "ช่วยแก้ปัญหาเว็บเงียบเหงาให้รู้สึกมีสีสันน่าเล่นมากขึ้น โดยการจำลองการอัพเลเวลเหมือนเล่นเกม ซึ่งช่วยดึงดูดใจผู้ใช้งานเดิมได้ดี",
      },
    ],
    outcome:
      "ช่วยสร้างลูกเล่นเพิ่มเติมให้เว็บน่าสนใจและเป็นรูปธรรมมากขึ้น ดึงดูดให้คนอยากเข้ามาเก็บ XP และดูผลลัพธ์ของตัวเองซ้ำ",
    outcomeHighlight: "Engagement ↑",
    tags: ["Gamification", "Database Schema", "State Management", "User Retention"],
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
            กรณีศึกษา
            <span className="red-gradient-text"> เชิงเทคนิคและการเติบโต</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            เบื้องหลังการพัฒนาผลิตภัณฑ์ที่ตอบโจทย์ความต้องการของผู้ใช้และการตลาดอย่างมีกลยุทธ์
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
                  ปัญหาที่ต้องแก้ไข
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
                  Insight สำคัญ
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
              กระบวนการแก้ปัญหาเชิงโครงสร้าง — คลิกเพื่อดูรายละเอียด
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
