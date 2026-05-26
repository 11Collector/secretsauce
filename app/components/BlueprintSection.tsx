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
    jd: "สร้างและพัฒนาเนื้อหาคุณภาพสูงในหลากหลายฟอร์แมต (บทความ วิดีโอ พอดแคสต์)",
    match: "Multi-Format Creator",
    detail:
      "ผมสร้างเนื้อหาทั้งในรูปแบบบทความเชิงวิเคราะห์ธุรกิจ X Threads และ Interactive Tools โดยปรับ tone และโครงสร้างให้เหมาะกับแต่ละ format — พร้อมเรียนรู้ format ใหม่ที่ทีมต้องการ",
    tags: ["บทความ", "X Threads", "Interactive Tools", "Multi-Format"],
  },
  {
    id: 2,
    jd: "มีความสนใจและความรู้ในด้านธุรกิจ การเงิน หรือการพัฒนาตนเอง",
    match: "Business & Self-Dev Passion",
    detail:
      "ผมเรียนวิศวะจุฬา แล้วไปทำ Marketing และดูแล App ที่ Settrade (ในเครือ SET) — ก่อนจะ pivot มาทำ Content เต็มตัว เส้นทางนี้ทำให้ผมเข้าใจโลกธุรกิจและการเงินแบบที่ลงมือสัมผัสจริง ไม่ใช่แค่อ่านมาจากหนังสือ",
    tags: ["Business", "Finance", "Settrade", "Engineering", "Self-Development"],
  },
  {
    id: 3,
    jd: "วิจัยและวิเคราะห์ข้อมูลเพื่อสร้างเนื้อหาที่ลึกซึ้งและน่าเชื่อถือ",
    match: "Research-Driven Creator",
    detail:
      "วิศวกรไม่เดา — วิศวกรหาข้อมูล แล้ว validate นิสัยนี้ติดมาถึงการทำ Content ผมไม่เริ่มเขียนจนกว่าจะ Cross-reference ข้อมูลจากหลายแหล่ง ทั้ง Research Papers, Industry Reports, และ Primary Sources ก่อนสังเคราะห์เป็น narrative ที่อ่านง่ายและเชื่อถือได้",
    tags: ["Research", "Data Analysis", "Systems Thinking", "Synthesis"],
  },
  {
    id: 4,
    jd: "สร้างเนื้อหาได้หลากหลายรูปแบบ ไม่จำกัดแค่บทความ",
    match: "Format Flexibility",
    detail:
      "ผมทำงานได้กับ Short-form social threads, บทความเชิงลึก, Interactive Tools และ Content สำหรับหลายช่องทาง ปรับโทนและความยาวได้ตามกลุ่มเป้าหมาย — ไม่ยึดติดกับ format เดียว",
    tags: ["Short-form", "บทความ", "Interactive", "Social Media"],
  },
  {
    id: 5,
    jd: "รับฟีดแบ็กและพัฒนาเนื้อหาต่อเนื่อง ทำงานร่วมกับทีมได้ดี",
    match: "Feedback-Loop Mindset",
    detail:
      "ผมสร้างงานคนเดียวเป็นหลัก แต่ใช้ Feedback จาก Community บน X และ upskilleveryday.com เป็น signal ปรับงาน — Draft ที่ดีที่สุดคือ Draft ที่ผ่านการ Iterate จาก real user response ไม่ใช่แค่ความเห็นส่วนตัว",
    tags: ["Self-Directed", "Community Feedback", "Iteration", "Data-Driven"],
  },
  {
    id: 6,
    jd: "ติดตามเทรนด์และนำ Insight มาปรับใช้กับการทำคอนเทนต์",
    match: "Trend Spotter",
    detail:
      "ผมติดตาม Business/Tech/Culture trends อย่างสม่ำเสมอผ่าน หนังสือ, Newsletters, Podcasts ระดับโลก และ Social Listening — แล้ว translate เป็น content angle ที่เข้าถึงคนไทยได้",
    tags: ["Trend Analysis", "Cultural Intelligence", "Local Adaptation"],
  },
  {
    id: 7,
    jd: "มีทักษะภาษาอังกฤษในระดับดี (อ่าน เขียน และพูดได้)",
    match: "Bilingual Communicator",
    detail:
      "ผมอ่านและฟัง Global Sources ได้สบาย — Research Papers, Industry Reports, Podcasts ต่างประเทศล้วนเป็นส่วนหนึ่งของ workflow ทุกวัน การเขียนภาษาอังกฤษทำได้ในระดับสื่อสารและสรุปข้อมูลได้ดี ไม่ใช่ระดับ native แต่เพียงพอสำหรับการ research และทำงาน",
    tags: ["English", "Professional Writing", "Global Sources", "Bilingual"],
  },
  {
    id: 8,
    jd: "มีความคิดสร้างสรรค์และสามารถนำเสนอมุมมองใหม่ ๆ ได้",
    match: "Original Angle Finder",
    detail:
      "ผมชอบเข้าถึงหัวข้อจากมุมที่คนยังไม่ได้พูดถึง — เช่น เชื่อมโยง behavioral science เข้ากับ business strategy หรือนำ case study ต่างประเทศมา localize ให้เข้ากับบริบทไทย",
    tags: ["Creative Thinking", "Unique Angle", "Localization"],
  },
  {
    id: 9,
    jd: "มีประสบการณ์หรือความสนใจในการดำเนินรายการ/งานโปรดักชัน",
    match: "Production Awareness",
    detail:
      "ผมไม่เคยผลิต podcast เอง แต่ฟังและวิเคราะห์โครงสร้างของ The Secret Sauce มาอย่างจริงจัง — เข้าใจว่า flow ของ conversation, timing และ narrative arc ที่ดีเป็นอย่างไร และอยากนำสิ่งที่เรียนรู้นั้นมาใช้จริง",
    tags: ["Podcast Listener", "Narrative Structure", "Story Arc"],
  },
  {
    id: 10,
    jd: "มีความสนใจในรายการ The Secret Sauce และสไตล์ของ The Standard",
    match: "Brand Alignment",
    detail:
      "ผมติดตาม The Secret Sauce มาตั้งแต่ต้น ชื่นชอบสไตล์การเจาะลึกธุรกิจและผู้นำที่ The Standard นำเสนอ ผมเชื่อว่าตัวผมเองมี mindset ตรงกับ brand values นี้โดยธรรมชาติ",
    tags: ["The Secret Sauce", "The Standard", "Brand Values", "Mission Fit"],
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
            ทำไมผมถึง{" "}
            <span className="red-gradient-text">Match</span>{" "}
            กับงานนี้
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            10 คุณสมบัติที่คุณต้องการ กับ 10 หลักฐานว่าผมมีสิ่งเหล่านั้น
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
              <p className="text-white font-semibold">Match Score: 100%</p>
              <p className="text-neutral-500 text-sm">
                ครบ 10 คุณสมบัติตามที่ระบุใน JD
              </p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              Content Strategy ✓
            </span>
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              Business Acumen ✓
            </span>
            <span className="px-3 py-1 bg-dark-600 rounded-full text-xs text-neutral-400">
              Bilingual ✓
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
              <p className="text-neutral-600 text-xs mt-1">Systems Thinking · First-Principles · Data-Driven</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-red/15 border border-brand-red/20 flex items-center justify-center flex-shrink-0">
              <span className="text-brand-red text-sm">💼</span>
            </div>
            <div>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-1">ประสบการณ์ทำงาน</p>
              <p className="text-white font-semibold text-sm">Marketing & App Operations</p>
              <p className="text-neutral-400 text-xs mt-0.5">Settrade (ในเครือ SET)</p>
              <p className="text-neutral-600 text-xs mt-1">Marketing · App Management · Capital Markets</p>
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
