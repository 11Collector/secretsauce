"use client";

import React, { useState } from "react";
import { ExternalLink, Play, FileText, Mic, Wrench } from "lucide-react";
// Play and Mic kept for video embed + type icon usage in PortfolioCard

const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

type PortfolioItem = {
  id: number;
  type: "article" | "video" | "podcast" | "tool" | "thread";
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  videoId?: string;
  readTime?: string;
  date?: string;
  highlight?: boolean;
  views?: string;
};

const portfolioItems: PortfolioItem[] = [
  // ── TOOLS / PRODUCTS ─────────────────────────────────────────────
  {
    id: 102,
    type: "tool",
    category: "Interactive App",
    title: "DISC Personality Assessment",
    subtitle: "ระบบประเมินและวิเคราะห์บุคลิกภาพ",
    description:
      "สร้างแบบประเมินบุคลิกภาพภาษาไทยขึ้นมาเองโดยใช้ React รันระบบคำนวณคะแนนและสรุปผลบนเบราว์เซอร์ พร้อมออกแบบให้มี Social share loop จนคนส่งแชร์ต่อและมีผู้เล่นจริงกว่า 120,000 คน",
    tags: ["React", "Custom State Logic", "Growth Loop", "Interactive"],
    link: "https://www.upskilleveryday.com/tools/disc",
    highlight: true,
  },
  {
    id: 101,
    type: "tool",
    category: "Interactive App",
    title: "Wheel of Life",
    subtitle: "เครื่องมือวิเคราะห์สมดุลชีวิต 8 มิติ",
    description:
      "เว็บแอปพลิเคชันที่ช่วยให้ผู้ใช้งานลากประเมินสมดุลชีวิต 8 ด้าน โดยพล็อตผลเป็น Radar Chart ด้วยเทคนิค SVG มีคนคลิกเข้ามาเล่นวัดสมดุลชีวิตตัวเองเรื่อยๆ บนออนไลน์",
    tags: ["Next.js", "SVG Radar Chart", "Responsive UI", "Interactive"],
    link: "https://www.upskilleveryday.com/tools/wheel-of-life",
    highlight: true,
  },
  {
    id: 103,
    type: "tool",
    category: "Interactive App",
    title: "Money Avatar",
    subtitle: "แบบทดสอบสไตล์การเงินเฉพาะบุคคล",
    description:
      "เครื่องมือวิเคราะห์ลักษณะนิสัยทางการเงินของผู้ใช้ พร้อมหน้าจอผลลัพธ์สไตล์ Avatar แนะนำแนวทางการจัดการเงินผ่านการจำลองเหตุการณ์และ Dynamic Branching logic",
    tags: ["TypeScript", "Conditional Logic", "FinTech Concept"],
    link: "https://www.upskilleveryday.com/tools/money-avatar",
  },
  {
    id: 104,
    type: "tool",
    category: "Interactive App",
    title: "Library of Souls",
    subtitle: "ระบบค้นหาหนังสือและเนื้อหาเฉพาะตัว",
    description:
      "แอปพลิเคชันแนะนำหนังสือตามเป้าหมายและการพัฒนาของแต่ละคน ดึงข้อมูลผ่าน Database Schema ที่ออกแบบมาจัดเก็บบันทึกประเภทหนังสือพฒนาตนเอง",
    tags: ["Database Design", "Personalization", "Data Fetching"],
    link: "https://www.upskilleveryday.com/tools/library-of-souls",
  },
  {
    id: 105,
    type: "tool",
    category: "Interactive App",
    title: "คมสัดสัด",
    subtitle: "เครื่องมือสร้างภาพคำคมตามอารมณ์ผู้ใช้",
    description:
      "แอปพลิเคชันสำหรับเจเนอเรตและแชร์รูปภาพคำคม ทำงานโดยใช้ Canvas API เจนภาพฝั่ง Client-side เพื่อให้ผู้ใช้กดดาวน์โหลดเป็นไฟล์รูปภาพได้รวดเร็ว",
    tags: ["Canvas/SVG API", "Client Export", "Frontend Logic"],
    link: "https://www.upskilleveryday.com/tools/khomsatsat",
  },

  // ── X THREADS ────────────────────────────────────────────────────
  {
    id: 201,
    type: "thread",
    category: "Tech & Growth Thread",
    title: "เล่ากระบวนการสร้าง DISC Tool จากศูนย์จนมีผู้ใช้งานจริง 120,000 คน",
    subtitle: "Idea · UX Design · Social Sharing Loop",
    description:
      "แชร์เบื้องหลังการแก้ปัญหาแบบสอบถามทั่วไปที่คนมักทำแล้วเบื่อ โดยดีไซน์ UX ใหม่ เขียนโค้ดรัน Logic คำนวณฝั่ง Client และทำรูปภาพพรีวิวให้แชร์ต่อง่ายจนได้ 3.3M views บน X",
    tags: ["UX Engineering", "Product Design", "Viral Loops"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "3.3M",
    highlight: true,
  },
  {
    id: 202,
    type: "thread",
    category: "Product Growth Thread",
    title: "Side Hustle Framework สำหรับผู้เริ่มต้นทำผลิตภัณฑ์เทคโนโลยี",
    subtitle: "Systems Thinking · Business Strategy · Product Development",
    description:
      "สรุปและวิเคราะห์ Framework การเลือกและพัฒนา Side Project ให้ประสบความสำเร็จเชิงพาณิชย์ โดยประเมินจากทรัพยากร ความถนัด และความต้องการตลาดเพื่อลดความเสี่ยงล้มเหลว",
    tags: ["Systems Thinking", "Business Strategy", "Product Launch"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "2.5M",
    highlight: true,
  },
  {
    id: 203,
    type: "thread",
    category: "Business Strategy Thread",
    title: "La Glace Brand Analysis: กลยุทธ์ Customer Experience ในโลกการตลาด",
    subtitle: "Marketing Psychology · UX Strategy · Community Building",
    description:
      "วิเคราะห์แบรนด์บิวตี้ไทยที่เติบโตอย่างรวดเร็ว ถอดรหัสจิตวิทยาความต้องการของลูกค้าและการสร้าง Cult Following ที่สามารถประยุกต์ใช้กับการออกแบบซอฟต์แวร์ที่ผู้ใช้หลงรัก",
    tags: ["Marketing Psychology", "UX Strategy", "Brand Analysis"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "1.1M",
    highlight: true,
  },
  {
    id: 204,
    type: "thread",
    category: "Case Study Thread",
    title: "Case Study: บทเรียนและข้อผิดพลาดสำคัญในการพัฒนาโปรดักต์เข้าตลาด",
    subtitle: "Product-Market Fit · Lesson Learned · Analytics",
    description:
      "แชร์บทเรียนราคาแพงจากการพัฒนาโปรดักต์ที่ถูกต้องตามตำราแต่ยังไม่ตอบโจทย์ตลาด เจาะลึกการตรวจสอบพฤติกรรมผู้ใช้เพื่อหาจุดบกพร่องที่แท้จริงและแนวทาง pivot",
    tags: ["Product-Market Fit", "Analytics", "Lessons Learned"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "1M",
  },
  {
    id: 205,
    type: "thread",
    category: "Business Mindset Thread",
    title: "Debunk: ความเข้าใจผิดเรื่องการสร้างความมั่นคงทางการเงินในยุคดิจิทัล",
    subtitle: "Financial Literacy · Systems Thinking · Money Mindset",
    description:
      "วิเคราะห์โครงสร้างทางการเงินแบบ First-Principles เพราะเหตุใดหลักสูตรเดิมๆ ถึงใช้ไม่ได้ผลในยุคเศรษฐกิจสร้างสรรค์ และ Mindset ที่จำเป็นในการพัฒนารายได้หลายช่องทาง",
    tags: ["Systems Thinking", "Financial Literacy", "Economics"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "628K",
  },
  {
    id: 206,
    type: "thread",
    category: "Growth Mindset Thread",
    title: "Money Mindset & Wealth Psychology ของผู้สร้างผลิตภัณฑ์ที่ยั่งยืน",
    subtitle: "Risk Tolerance · Growth Mindset · Business Psychology",
    description:
      "สำรวจชุดความคิดของผู้ประกอบการด้านเทคโนโลยี (Tech Solopreneur) เกี่ยวกับการจัดการความเสี่ยง การวิเคราะห์มูลค่าซอฟต์แวร์ และการลงทุนเพื่อการเติบโตระยะยาว",
    tags: ["Growth Mindset", "Wealth Psychology", "Business"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "850K",
  },
  {
    id: 207,
    type: "thread",
    category: "Product Operations Thread",
    title: "ถอดบทเรียนจากการขายออนไลน์ครั้งแรกและการประยุกต์ใช้กับเทคโปรเจกต์",
    subtitle: "Pricing Strategy · E-Commerce Operations · Analytics",
    description:
      "เล่าความผิดพลาดเชิงระบบของการทำ E-Commerce: การตั้งราคาที่ไม่สอดรับกับต้นทุนแฝง การทำการตลาดไร้จุดหมาย พร้อมวิเคราะห์ทางแก้โดยการนำ Data-Driven Operations มาใช้",
    tags: ["E-Commerce", "Data-Driven Ops", "Strategy"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "605K",
  },

  // ── ARTICLES ─────────────────────────────────────────────────────
  {
    id: 1,
    type: "article",
    category: "Growth Mindset",
    title: "Let Them Theory: เมื่อการ 'ปล่อยผ่าน' คือกลยุทธ์การทำทีมที่ทรงพลัง",
    subtitle: "Management Strategy · Mental Models",
    description:
      "บทความประยุกต์ใช้ทฤษฎีจิตวิทยา Let Them Theory ในการทำงานร่วมกับทีมผู้พัฒนาและนักออกแบบ เพื่อปลดล็อกอิสระในการคิดและลดปัญหา Micro-management",
    tags: ["Mental Models", "Team Management", "Psychology"],
    link: "https://www.upskilleveryday.com/library/let-them-theory",
    readTime: "7 นาที",
    highlight: true,
  },
  {
    id: 2,
    type: "article",
    category: "Continuous Learning",
    title: "บีบ 10 ปีประสบการณ์การเรียนรู้ให้เหลือ 10 นาที",
    subtitle: "Learning Acceleration · Knowledge Sharing",
    description:
      "เทคนิคการดึงสาระและแกนความรู้จากผู้เชี่ยวชาญเพื่อเรียนรู้สิ่งใหม่ๆ ได้อย่างรวดเร็ว (Accelerated Learning) ซึ่งจำเป็นมากสำหรับการปรับตัวกับเทคโนโลยีเกิดใหม่",
    tags: ["Accelerated Learning", "Knowledge Sharing", "Productivity"],
    link: "https://www.upskilleveryday.com/library/10-years-experience",
    readTime: "8 นาที",
  },
  {
    id: 3,
    type: "article",
    category: "Product & Career Design",
    title: "Life Design vs Career Planning: ออกแบบชีวิตและทักษะการทำงานด้วย Agile",
    subtitle: "Stanford Design Thinking localized for developers",
    description:
      "นำแนวคิด Design Thinking จากมหาวิทยาลัยสแตนฟอร์ดมา Localization เพื่อใช้ออกแบบเส้นทางทักษะทางอาชีพ โดยมองอาชีพและชีวิตเป็นสิ่งที่จะต้องหมั่นทดลองและประเมินผล",
    tags: ["Design Thinking", "Agile Mindset", "Career Design"],
    link: "https://www.upskilleveryday.com/library/life-design-vs-career",
    readTime: "9 นาที",
    highlight: true,
  },
  {
    id: 4,
    type: "article",
    category: "Business Model",
    title: "One Person Tech Business: การสร้างซอฟต์แวร์และธุรกิจที่สร้างผลลัพธ์ด้วยตัวคนเดียว",
    subtitle: "Solopreneur Economy · Scaling with AI & Automation",
    description:
      "เจาะลึกรูปแบบธุรกิจ One-Person Business ที่ขยายสเกลความเร็วในการพัฒนาและฐานลูกค้าโดยการนำ Generative AI, Cloud Services, และ Automation Tools มาเพิ่มพลังผลผลิต",
    tags: ["Solopreneur", "AI Automation", "Scale"],
    link: "https://www.upskilleveryday.com/library/one-person-business",
    readTime: "10 นาที",
  },
  {
    id: 8,
    type: "article",
    category: "Business Oriented Coding",
    title: "ทำไม Engineer ถึงมีแนวโน้มสร้างและขับเคลื่อนธุรกิจได้โดดเด่น",
    subtitle: "Systems Thinking · Problem Solving · Architecture",
    description:
      "วิเคราะห์ความเชื่อมโยงของ Engineering Mindset (Systems Thinking, Modular Design, Iterative Testing) กับการประกอบธุรกิจ ว่าชุดความคิดแบบวิศวกรส่งผลต่อความเร็วและความเสถียรของโมเดลธุรกิจอย่างไร",
    tags: ["Systems Thinking", "Business Strategy", "Mental Models"],
    link: "https://www.upskilleveryday.com/library/why-engineers-excel-in-business",
    readTime: "7 นาที",
  },
];

const filterTabs = [
  { key: "all", label: "ทั้งหมด", icon: null },
  { key: "tool", label: "Interactive Apps", icon: Wrench },
  { key: "thread", label: "Tech & Growth Threads", icon: null, xIcon: true },
  { key: "article", label: "บทความแนวคิด", icon: FileText },
];

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.type === activeFilter);

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="section-divider mb-0" />
      <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-brand-red/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-10">
          <span className="text-brand-red text-xs font-semibold tracking-widest uppercase block mb-3">
            02 · Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            ผลงานที่ผมสร้าง
          </h2>
          <p className="text-neutral-400 text-base max-w-xl">
            ทั้งหมดนี้คือผลิตภัณฑ์และคอนเทนต์จริงจาก{" "}
            <a
              href="https://www.upskilleveryday.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline"
            >
              upskilleveryday.com
            </a>{" "}
            — แพลตฟอร์มพัฒนาตนเองที่ผมออกแบบ พัฒนาระบบ และขยายฐานผู้ใช้ด้วยตนเอง
          </p>
        </div>

        {/* Site summary strip */}
        <div className="glass-card rounded-xl p-5 mb-8 flex flex-col sm:flex-row sm:items-center gap-4 border-brand-red/15 bg-brand-red/5">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center font-bold text-white text-sm">
              U
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-semibold text-sm">upskilleveryday.com</p>
            <p className="text-neutral-400 text-xs mt-0.5">
              แพลตฟอร์มพัฒนาตนเองแบบ Interactive — รวมเครื่องมือทดสอบจิตวิทยา ระบบ XP Progression และบทความเชิงวิเคราะห์
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0 text-center">
            {[
              { n: "30+", l: "บทความ" },
              { n: "5", l: "Tools" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-white font-bold text-lg leading-none">{s.n}</p>
                <p className="text-neutral-500 text-xs mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
          <a
            href="https://www.upskilleveryday.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 border border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white rounded-lg text-xs font-medium transition-all flex-shrink-0"
          >
            เยี่ยมชมเว็บ <ExternalLink size={11} />
          </a>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.key
                    ? "bg-brand-red text-white"
                    : "bg-dark-600 text-neutral-400 hover:text-white hover:bg-dark-500"
                }`}
              >
                {Icon && <Icon size={14} />}
                {"xIcon" in tab && tab.xIcon && <XIcon />}
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              isPlaying={playingVideo === item.id}
              onPlay={() =>
                setPlayingVideo(playingVideo === item.id ? null : item.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  isPlaying,
  onPlay,
}: {
  item: PortfolioItem;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const typeIcons: Record<string, React.ReactNode> = {
    article: <FileText size={12} />,
    video: <Play size={12} />,
    podcast: <Mic size={12} />,
    tool: <Wrench size={12} />,
    thread: <XIcon />,
  };

  const typeColors: Record<string, string> = {
    article: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    video: "text-red-400 bg-red-400/10 border-red-400/20",
    podcast: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    tool: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    thread: "text-neutral-300 bg-neutral-300/10 border-neutral-300/20",
  };

  const ctaLabel: Record<string, string> = {
    tool: "ลองใช้งาน",
    thread: "ดู Thread",
    article: "อ่านต่อ",
    video: "ดูวิดีโอ",
    podcast: "ฟัง",
  };

  return (
    <article
      className={`glass-card rounded-xl overflow-hidden group hover:border-dark-400/80 transition-all duration-300 flex flex-col ${
        item.highlight ? "ring-1 ring-brand-red/20" : ""
      }`}
    >
      {/* Video embed */}
      {item.type === "video" && item.videoId && (
        <div className="relative aspect-video bg-dark-700 flex-shrink-0">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${item.videoId}?autoplay=1`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              onClick={onPlay}
              className="absolute inset-0 flex items-center justify-center bg-dark-800/80 hover:bg-dark-800/60 transition-colors group/play"
            >
              <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center group-hover/play:scale-110 transition-transform shadow-lg">
                <Play size={20} className="text-white ml-0.5" />
              </div>
            </button>
          )}
        </div>
      )}

      {/* Thread header banner */}
      {item.type === "thread" && (
        <div className="relative bg-dark-700/60 px-5 pt-5 pb-0 flex-shrink-0">
          {item.highlight && (
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light" />
          )}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="w-9 h-9 bg-dark-500 rounded-full flex items-center justify-center text-neutral-300 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </div>
            {item.views && (
              <div className="flex flex-col items-end">
                <span className="text-brand-red font-bold text-xl leading-none">{item.views}</span>
                <span className="text-neutral-500 text-xs mt-0.5">views</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Highlight bar for non-thread, non-video */}
      {item.highlight && item.type !== "video" && item.type !== "thread" && (
        <div className="h-0.5 bg-gradient-to-r from-brand-red to-brand-red-light" />
      )}

      <div className="p-5 flex flex-col flex-1 gap-3">
        {/* Meta row */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded-full border font-medium ${
              typeColors[item.type]
            }`}
          >
            {typeIcons[item.type]}
            {item.category}
          </span>
          {item.date && (
            <span className="text-neutral-600 text-xs">{item.date}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-white font-semibold text-sm leading-snug mb-1 group-hover:text-neutral-100 transition-colors">
            {item.title}
          </h3>
          <p className="text-neutral-500 text-xs mb-2">{item.subtitle}</p>
          <p className="text-neutral-400 text-xs leading-relaxed line-clamp-3">
            {item.description}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {item.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-dark-500 text-neutral-500 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1 border-t border-dark-500">
          {item.readTime && (
            <span className="text-neutral-600 text-xs">
              อ่าน {item.readTime}
            </span>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-brand-red hover:text-brand-red-light text-xs font-medium transition-colors ml-auto"
            >
              {ctaLabel[item.type] ?? "ดู"}{" "}
              <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
