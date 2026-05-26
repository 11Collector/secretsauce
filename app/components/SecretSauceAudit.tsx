"use client";

import { useState } from "react";
import { Mic, Users, Clock, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";

type EpisodeSection = {
  id: string;
  time: string;
  label: string;
  content: string;
  icon: React.ReactNode;
};

const episodeSections: EpisodeSection[] = [
  {
    id: "hook",
    time: "00:00 – 02:00",
    label: "Opening Hook",
    icon: <Mic size={14} />,
    content:
      "เปิดด้วยคำถามยั่วยุ: 'ถ้าวันนี้คุณตื่นมาแล้วพบว่า Brand ที่คุณสร้างมา 20 ปี กลายเป็นเรื่องตลกบนโซเชียล — คุณจะทำอะไรต่อ?' ก่อนนำเข้าสู่กรณีศึกษา Brand Revival ของแขก โดยไม่บอกชื่อทันที เพื่อสร้าง Curiosity Gap",
  },
  {
    id: "context",
    time: "02:00 – 08:00",
    label: "Context Setting",
    icon: <Clock size={14} />,
    content:
      "Host วาง macro context: ทำไม Brand Resurrection ถึงยากขึ้นในยุค Social Media ที่ 'ความทรงจำแย่' ถูกบันทึกไว้ตลอดไป — นำข้อมูล Brand Trust Survey ของไทยปี 2566 มาอ้างอิง พร้อม briefly mention เคส Global ที่น่าสนใจ (เช่น Abercrombie & Fitch) เพื่อ prime ผู้ฟัง",
  },
  {
    id: "interview",
    time: "08:00 – 40:00",
    label: "Core Interview",
    icon: <Users size={14} />,
    content:
      "Block หลักของการสัมภาษณ์ แบ่งเป็น 3 Act: \n\n(1) The Fall — ให้แขกเล่า 'moment ที่รู้ว่าพัง' โดย Host ไม่ rush แต่ probe deep ด้วย 'what were you thinking at that exact moment?'\n\n(2) The Pivot — process ตัดสินใจ, ใครในทีม push back, ความกลัวที่ซ่อนอยู่\n\n(3) The Return — KPI ที่วัดว่า 'กลับมาได้จริง' และ lesson ที่ apply ได้กับธุรกิจขนาดเล็ก",
  },
  {
    id: "insight",
    time: "40:00 – 50:00",
    label: "Insight Synthesis",
    icon: <Lightbulb size={14} />,
    content:
      "Host สังเคราะห์ 3 takeaway หลักจาก conversation ในแบบที่ผู้ฟังสามารถ apply ได้จริง — ไม่ใช่แค่ recap แต่ต้อง add new angle ที่แขกอาจไม่ได้พูดถึงตรง ๆ เช่น เชื่อมโยงกับ Psychology of Trust Repair หรือ Behavioral Economics ของการ Forgive Brand",
  },
  {
    id: "close",
    time: "50:00 – 55:00",
    label: "Closing & CTA",
    icon: <Mic size={14} />,
    content:
      "ปิดด้วยคำถาม rapid-fire ที่เผย human side ของแขก ก่อน Host ทิ้ง thought สั้น ๆ ว่า 'The Secret Sauce ของ Brand Revival ที่แท้จริงคืออะไร' — เปิดโอกาสให้ผู้ฟัง debate ต่อใน comment / community",
  },
];

const guestOptions = [
  {
    name: "ซีอีโอหรือผู้ก่อตั้ง Brand ไทยที่เคยผ่านวิกฤต PR แต่ฟื้นตัวได้",
    why: "มี first-hand experience + emotional depth ที่ทำให้ episode น่าฟัง",
  },
  {
    name: "Brand Strategist ที่ทำ Turnaround ให้ Corporate หลายเจ้า",
    why: "ให้ทั้ง Framework และ Real Case — ดึง audience ทั้งสาย theory และ practitioner",
  },
  {
    name: "นักจิตวิทยาองค์กรที่ศึกษาเรื่อง Institutional Trust",
    why: "เพิ่ม depth ด้าน behavioral science ที่ไม่ค่อยมีใน podcast ธุรกิจไทย",
  },
];

export default function SecretSauceAudit() {
  const [expanded, setExpanded] = useState<string | null>("hook");
  const [showGuests, setShowGuests] = useState(false);

  return (
    <section id="secret-sauce" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-brand-red/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            04 · The Secret Sauce Special
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            ถ้าผมเข้าทีม —<br />
            <span className="red-gradient-text">ผมจะ contribute แบบนี้</span>
          </h2>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            Mock Episode Proposal ที่ผมคิดกรอบคร่าวๆ แล้วใช้ AI ช่วยต่อยอดให้ละเอียดขึ้น
            — ผมเชื่อว่าการใช้ AI เป็นเครื่องมือคิดคือ skill ที่จำเป็นในยุคนี้
            ไม่ใช่การ outsource ความคิด แต่คือการ amplify มัน
          </p>
        </div>

        {/* Episode card */}
        <div className="glass-card rounded-2xl overflow-hidden mb-8 border-brand-red/15">
          {/* Episode header */}
          <div className="bg-gradient-to-r from-brand-red/15 to-transparent border-b border-dark-600/50 p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse" />
                  <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">
                    Mock Episode Draft
                  </span>
                  <span className="px-2 py-0.5 bg-neutral-700 text-neutral-400 text-xs rounded-full">
                    ✦ คิดกรอบ + ต่อยอดด้วย AI
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">
                  "Brand ที่ตายแล้วฟื้น:<br />
                  เมื่อความไว้วางใจถูกทำลาย จะสร้างกลับมาได้อย่างไร?"
                </h3>
                <p className="text-neutral-400 text-sm mt-2">
                  Episode concept สำหรับ The Secret Sauce · ~55 นาที · Business / Brand Strategy
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-400">
                  <Clock size={14} />
                  <span>55 นาที</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Users size={14} />
                  <span>1 แขกรับเชิญ</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400">
                  <Mic size={14} />
                  <span>Conversational Format</span>
                </div>
              </div>
            </div>
          </div>

          {/* Why this topic */}
          <div className="p-6 border-b border-dark-600/30">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-3">
              ทำไมถึงเลือกประเด็นนี้
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  title: "Timely",
                  desc: "หลายแบรนด์ไทยกำลังเผชิญ Trust Crisis จาก Social Media — เรื่องนี้ 'now' มาก",
                },
                {
                  title: "Universal",
                  desc: "ไม่ว่า SME หรือ Enterprise ล้วนกลัวเรื่อง Brand Damage — กลุ่มเป้าหมายกว้าง",
                },
                {
                  title: "Actionable",
                  desc: "ผู้ฟังจะได้ Framework จริง ๆ ไม่ใช่แค่ inspiring story — ตรงกับ DNA ของ The Secret Sauce",
                },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-lg p-4">
                  <p className="text-brand-red font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-neutral-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Episode rundown */}
          <div className="p-6">
            <p className="text-neutral-500 text-xs uppercase tracking-wider mb-4">
              Episode Rundown — คลิกแต่ละ section เพื่อดู detail
            </p>
            <div className="flex flex-col gap-2">
              {episodeSections.map((section) => (
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
                    <span className="text-neutral-500 text-xs font-mono w-28 flex-shrink-0 hidden sm:block">
                      {section.time}
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

        {/* Guest suggestions */}
        <div className="glass-card rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-5 text-left"
            onClick={() => setShowGuests(!showGuests)}
          >
            <div>
              <p className="text-white font-semibold">แขกรับเชิญที่แนะนำ</p>
              <p className="text-neutral-500 text-xs mt-0.5">
                3 ตัวเลือกพร้อม rationale
              </p>
            </div>
            {showGuests ? (
              <ChevronUp size={16} className="text-neutral-500" />
            ) : (
              <ChevronDown size={16} className="text-neutral-500" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              showGuests ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-5 pb-5 flex flex-col gap-3">
              {guestOptions.map((guest, i) => (
                <div key={i} className="flex gap-3 p-3 bg-dark-700 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 text-brand-red text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-neutral-200 text-sm font-medium">{guest.name}</p>
                    <p className="text-neutral-500 text-xs mt-0.5">{guest.why}</p>
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
