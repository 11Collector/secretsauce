"use client";

import { useState } from "react";
import { Cpu, Briefcase, Zap, Award, ChevronDown, ChevronUp, Clock, Database, Globe } from "lucide-react";

type PhilosophySection = {
  id: string;
  phase: string;
  label: string;
  content: string;
  icon: React.ReactNode;
};

const philosophySections: PhilosophySection[] = [
  {
    id: "research",
    phase: "01 · User Focus",
    label: "ตั้งเป้าหมายจากการตอบสนองความต้องการของผู้ใช้",
    icon: <Briefcase size={14} />,
    content:
      "ทำความเข้าใจว่าหน้าแอปที่จะสร้างแก้ปัญหาอะไรให้ผู้ใช้ เพื่อหลีกเลี่ยงการเสียเวลาเขียนโค้ดฟีเจอร์ยาวเหยียดที่สุดท้ายแล้วไม่มีใครอยากเข้ามาใช้งาน",
  },
  {
    id: "ai-proto",
    phase: "02 · AI-Assisted Prototyping",
    label: "ใช้ AI ร่างระบบและช่วยตรวจสอบเบื้องต้น",
    icon: <Cpu size={14} />,
    content:
      "ใช้ AI เข้ามาช่วยไกด์โครงสร้างโค้ด ร่าง Component หรือหาไลบรารีที่เหมาะสมกับไอเดียอย่างรวดเร็ว เพื่อย่นเวลาการขึ้นหน้าเว็บตัวอย่างให้จับต้องได้จริงไวขึ้น",
  },
  {
    id: "core-build",
    phase: "03 · Coding Next.js & React",
    label: "ลงมือเขียนโค้ดและวางโครงสร้างหน้าเว็บ",
    icon: <Zap size={14} />,
    content:
      "เขียนเว็บด้วย Next.js, React และ TypeScript คอนเนคเตอร์ข้อมูล และปรับแต่ง CSS ให้แสดงผลได้อย่างราบรื่น ใช้งานได้จริงและโหลดเร็วแบบเป็นสากล",
  },
  {
    id: "growth-loop",
    phase: "04 · Social Loop & Sharing",
    label: "ดีไซน์แชร์การ์ดและปุ่มชวนเพื่อนเล่นระบบ",
    icon: <Award size={14} />,
    content:
      "ทำระบบสร้างรูปภาพผลลัพธ์ (แชร์การ์ด) และใส่ฟังก์ชันปุ่มส่งต่อโซเชียลเพื่อช่วยให้โปรเจกต์เข้าถึงคนได้เพิ่มขึ้นผ่านการปากต่อปากของผู้ใช้จริง",
  },
  {
    id: "measure",
    phase: "05 · Simple Analytics",
    label: "เช็คสถิติการใช้งานจริงเพื่อนำมาแก้ไขปรับปรุง",
    icon: <Database size={14} />,
    content:
      "ดูสถิติจริงว่าจุดไหนของเว็บที่คนใช้งานเยอะหรือติดขัด จากนั้นนำฟีดแบ็กหรือข้อผิดพลาดนั้นมาแก้ไขโค้ดและพัฒนาฟลอว์การใช้งานหน้าเว็บให้ดียิ่งขึ้น",
  },
];

const techStacks = [
  {
    category: "Frontend Development",
    skills: "React, Next.js, TypeScript, Tailwind CSS, SVG & Canvas API for Interactive Graphics",
  },
  {
    category: "Backend & Databases",
    skills: "Firebase (Authentication, Cloud Firestore, Hosting), Web APIs Integration",
  },
  {
    category: "AI & Optimization Tools",
    skills: "LLMs (Gemini, Claude), Prompt Engineering, Git/GitHub, Vercel, SEO, Core Web Vitals Audit",
  },
];

export default function TechnicalPhilosophy() {
  const [expanded, setExpanded] = useState<string | null>("research");
  const [showTech, setShowTech] = useState(false);

  return (
    <section id="philosophy" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            04 · Technical Philosophy
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            แนวคิดการทำเว็บของผม —<br />
            <span className="red-gradient-text">เน้นความง่าย ใช้ AI ช่วย และมีคนเล่นจริง</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            ผมเชื่อว่าการทำเว็บแอปพลิเคชันไม่จำเป็นต้องเขียนโค้ดยากๆ หรือซับซ้อนเสมอไป สิ่งสำคัญคือต้องทำงานได้จริง มีประโยชน์ และดีไซน์ให้คนใช้งานได้ง่ายที่สุดโดยอาศัยเครื่องมือ AI มาช่วยทุ่นเวลาเขียนโค้ด
          </p>
        </div>

        {/* Core Pillars Card */}
        <div className="glass-card rounded-2xl overflow-hidden mb-8 border-brand-red/15">
          {/* Section header */}
          <div className="bg-gradient-to-r from-brand-red/15 to-transparent border-b border-dark-600/50 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                  <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">
                    My Development Approach
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-700 text-neutral-400 text-xs rounded-full">
                    ✦ AI-Assisted + Practical Mindset
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">
                  "ใช้ AI ช่วยเขียนระบบให้เร็วขึ้น<br />
                  เพื่อเอาเวลาไปโฟกัสหน้าเว็บและทำให้คนเข้ามาเล่นจริง"
                </h3>
                <p className="text-neutral-400 text-sm mt-2">
                  แนวทางการออกแบบเว็บแอปพลิเคชันที่ใช้งานได้จริงและประหยัดเวลาการทำระบบ
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Clock size={14} />
                  <span>Simple &amp; Fast Build</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Cpu size={14} />
                  <span>AI-Assisted Workflow</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Globe size={14} />
                  <span>User Sharing Loop</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars List */}
          <div className="p-6 border-b border-dark-600/30">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">
              3 หัวใจในการพัฒนาโปรเจกต์ของผม
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "ใช้ AI ช่วยเขียนโค้ด",
                  desc: "หยิบจับเครื่องมือ AI มาช่วยเขียนโครงสร้างและไล่บั๊ก เพื่อประหยัดเวลาและช่วยเสริมในส่วนทักษะที่ผมยังไม่ชำนาญ",
                },
                {
                  title: "เน้นความง่ายและใช้งานได้จริง",
                  desc: "โฟกัสไปที่สิ่งที่ผู้ใช้งานต้องการเล่นจริงๆ โดยไม่ทำให้โค้ดหรือการรันระบบซับซ้อนเกินความจำเป็น",
                },
                {
                  title: "ทำการตลาดและใส่แชร์ลูป",
                  desc: "ดีไซน์หน้าเว็บให้มีปุ่มกดดาวน์โหลดภาพสรุปผล และเขียนคอนเทนต์เชิญชวนผู้เล่น เพื่อให้เว็บไม่เงียบเหงาและมีคนแชร์ปากต่อปาก",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-lg p-4">
                  <p className="text-brand-red font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lifecycle rundown */}
          <div className="p-6">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">
              ขั้นตอนการทำงานและส่งมอบผลิตภัณฑ์ (Product Lifecycle) — คลิกเพื่อดูรายละเอียด
            </p>
            <div className="flex flex-col gap-2">
              {philosophySections.map((section) => (
                <div
                  key={section.id}
                  className={`rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border ${
                    expanded === section.id
                      ? "border-brand-red/30 bg-brand-red/5"
                      : "border-dark-500/50 hover:border-dark-400"
                  }`}
                  onClick={() =>
                    setExpanded(expanded === section.id ? null : section.id)
                  }
                >
                  <div className="flex items-center gap-3 px-4 py-3">
                    <div className="w-7 h-7 rounded-lg bg-dark-600 flex items-center justify-center text-neutral-500 flex-shrink-0">
                      {section.icon}
                    </div>
                    <span className="text-neutral-500 text-xs font-mono w-32 flex-shrink-0 hidden sm:block">
                      {section.phase}
                    </span>
                    <span className="text-white text-sm font-semibold flex-1">
                      {section.label}
                    </span>
                    <div className="text-neutral-600">
                      {expanded === section.id ? (
                        <ChevronUp size={14} />
                      ) : (
                        <ChevronDown size={14} />
                      )}
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      expanded === section.id
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-4 pl-14">
                      <p className="text-neutral-300 text-sm leading-relaxed whitespace-pre-line">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Suggestions */}
        <div className="glass-card rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setShowTech(!showTech)}
          >
            <div>
              <p className="text-white font-semibold">เทคโนโลยีและเครื่องมือที่เชี่ยวชาญ (Tech Stack & Tools)</p>
              <p className="text-neutral-500 text-xs mt-0.5">
                รายการ Frontend, Backend, Database และระบบ AI
              </p>
            </div>
            {showTech ? (
              <ChevronUp size={16} className="text-neutral-500" />
            ) : (
              <ChevronDown size={16} className="text-neutral-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showTech ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 flex flex-col gap-3">
              {techStacks.map((tech, i) => (
                <div key={i} className="flex gap-3 p-3 bg-dark-700 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-neutral-200 text-sm font-semibold">{tech.category}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{tech.skills}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
