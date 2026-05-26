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
    id: 101,
    type: "tool",
    category: "Interactive Tool",
    title: "Wheel of Life",
    subtitle: "เครื่องมือวัดสมดุลชีวิต",
    description:
      "เครื่องมือ Interactive ให้ผู้ใช้ประเมินสมดุลชีวิตใน 8 มิติ (สุขภาพ การเงิน ความสัมพันธ์ ฯลฯ) พร้อม visualize ผลเป็น Radar Chart แบบ real-time",
    tags: ["Life Balance", "Self-Assessment", "Interactive"],
    link: "https://www.upskilleveryday.com/tools/wheel-of-life",
    highlight: true,
  },
  {
    id: 102,
    type: "tool",
    category: "Interactive Tool",
    title: "DISC Personality Assessment",
    subtitle: "วิเคราะห์บุคลิกภาพ 4 แบบ",
    description:
      "แบบประเมินส่วนใหญ่น่าเบื่อและไม่ Actionable — ผมเลยสร้างขึ้นมาเอง ฉบับภาษาไทย Interactive มีผู้ใช้จริงกว่า 120,000 คน feedback ส่วนใหญ่บอกว่าผลแม่น",
    tags: ["DISC", "Personality", "Self-Dev"],
    link: "https://www.upskilleveryday.com/tools/disc",
    highlight: true,
  },
  {
    id: 103,
    type: "tool",
    category: "Interactive Tool",
    title: "Money Avatar",
    subtitle: "สไตล์การเงินของคุณคืออะไร?",
    description:
      "เครื่องมือวิเคราะห์ Money Personality ของผู้ใช้ แบ่งออกเป็น Avatar หลายแบบตาม money mindset และพฤติกรรมทางการเงิน พร้อมแผนพัฒนาแต่ละ type",
    tags: ["Finance", "Money Mindset", "Interactive"],
    link: "https://www.upskilleveryday.com/tools/money-avatar",
  },
  {
    id: 104,
    type: "tool",
    category: "Interactive Tool",
    title: "Library of Souls",
    subtitle: "ค้นหาตัวตนผ่านหนังสือ",
    description:
      "Tool แนะนำหนังสือตามบุคลิกภาพและเป้าหมายของผู้ใช้ เชื่อมโยง reading list กับ self-development journey แบบ personalized",
    tags: ["Reading", "Personality", "Curation"],
    link: "https://www.upskilleveryday.com/tools/library-of-souls",
  },
  {
    id: 105,
    type: "tool",
    category: "Interactive Tool",
    title: "คมสัดสัด",
    subtitle: "สร้างคำคมตามความรู้สึกของคุณ",
    description:
      "Interactive Tool ที่ช่วยให้ผู้ใช้สร้างคำคมที่ตรงกับความรู้สึกในแต่ละช่วงเวลา — เปลี่ยนอารมณ์และประสบการณ์ให้กลายเป็นถ้อยคำที่โดนใจ แบบ personalized",
    tags: ["Creative", "Self-Expression", "Interactive"],
    link: "https://www.upskilleveryday.com/tools/khomsatsat",
  },

  // ── X THREADS ────────────────────────────────────────────────────
  {
    id: 201,
    type: "thread",
    category: "X Thread",
    title: "ทำไม DISC Tool ของผมถึงเวิร์ก — กระบวนการออกแบบ Interaction จาก 0",
    subtitle: "Tool Design · User Experience · Iteration",
    description:
      "แบบประเมินส่วนใหญ่น่าเบื่อและ Generic เกินไป — Thread นี้เล่ากระบวนการสร้าง DISC Tool ตั้งแต่ Zero: ออกแบบ UX ใหม่ทั้งหมด, วาง Logic ให้ Actionable, เทสกับ Real Users จนได้ผลที่คนแชร์ต่อ",
    tags: ["DISC", "Product Design", "Interaction"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "3.3M",
    highlight: true,
  },
  {
    id: 202,
    type: "thread",
    category: "X Thread",
    title: "Side Hustle ที่ทำให้คนส่วนใหญ่ล้มเหลว — และวิธีที่ถูกต้อง",
    subtitle: "Side Hustle · Income · Solopreneur",
    description:
      "Thread วิเคราะห์ว่าทำไมคนที่ทำ Side Hustle ส่วนใหญ่ถึงเลิกกลางทาง — พร้อม Framework เลือก Side Hustle ที่เหมาะกับ Strength และ Lifestyle ของตัวเอง",
    tags: ["Side Hustle", "Career", "Income"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "2.5M",
    highlight: true,
  },
  {
    id: 203,
    type: "thread",
    category: "X Thread",
    title: "La Glace ขายแค่ไอศกรีม แต่ทำไมคนต่อคิวชั่วโมง? Brand Analysis",
    subtitle: "Brand Strategy · Customer Experience · Storytelling",
    description:
      "Thread วิเคราะห์ Brand La Glace ว่าทำไมถึงสร้าง Cult Following ได้ — ตั้งแต่ Product Design, Pricing Psychology, Social Proof ไปจนถึง Scarcity Marketing ที่แทบไม่ต้องโฆษณา",
    tags: ["Brand Analysis", "Marketing", "Strategy"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "1.1M",
    highlight: true,
  },
  {
    id: 204,
    type: "thread",
    category: "X Thread",
    title: "Case Study น้องวิน: บทเรียนที่แพงที่สุดจากการทำ Content",
    subtitle: "Case Study · Lesson Learned · Creator Journey",
    description:
      "Thread เล่า Case Study จริงของน้องวิน — Creator ที่ทำทุกอย่างถูกต้องตามสูตรแต่ยังล้มเหลว เจาะลึกว่าเกิดอะไรขึ้นและบทเรียนที่คน Content Creator ทุกคนต้องรู้",
    tags: ["Case Study", "Content", "Creator"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "1M",
  },
  {
    id: 205,
    type: "thread",
    category: "X Thread",
    title: "ความเชื่อผิดๆ เรื่องการเงินที่คนไทยยังเชื่ออยู่",
    subtitle: "Personal Finance · Money Mindset · Financial Literacy",
    description:
      "Thread Debunk ความเชื่อเรื่องเงินที่ถูกปลูกฝังมาตั้งแต่เด็ก — ทำไมสูตร 'ทำงานขยัน + ออมเงิน' ถึงไม่พออีกต่อไป และ Mindset ที่ควรมีแทน",
    tags: ["Finance", "Money Mindset", "Thai"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "628K",
  },
  {
    id: 206,
    type: "thread",
    category: "X Thread",
    title: "Money Mindset ที่คนรวยมีแต่ไม่ค่อยพูดถึง",
    subtitle: "Wealth Psychology · Abundance Mindset · Behavior",
    description:
      "Thread สำรวจ Mindset เรื่องเงินที่คนมี Wealth ระดับสูงมี — ความแตกต่างใน Belief System, Risk Tolerance และวิธีมอง 'ค่าของเงิน' ที่ต่างจาก Average Person",
    tags: ["Money Mindset", "Wealth", "Psychology"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "850K",
  },
  {
    id: 207,
    type: "thread",
    category: "X Thread",
    title: "สิ่งที่เรียนรู้จากการขายออนไลน์ครั้งแรก — ผิดพลาดทุกอย่างที่เป็นไปได้",
    subtitle: "E-Commerce · Online Selling · First Experience",
    description:
      "Thread เล่าประสบการณ์ขายออนไลน์ครั้งแรกแบบตรงไปตรงมา — เลือกสินค้าผิด, ตั้งราคาผิด, Marketing ผิด พร้อมสิ่งที่ควรทำต่างออกไปถ้าเริ่มใหม่ได้",
    tags: ["E-Commerce", "Online Selling", "Lesson Learned"],
    link: "https://x.com/FuiiThanawat/status/2049128393728475587",
    views: "605K",
  },

  // ── ARTICLES ─────────────────────────────────────────────────────
  {
    id: 1,
    type: "article",
    category: "Self-Development",
    title: "Let Them Theory: เมื่อ 'ปล่อยให้เขาทำ' คือทางเลือกที่ฉลาดที่สุด",
    subtitle: "Mel Robbins' framework แปลเป็นภาษาชีวิตจริง",
    description:
      "บทความวิเคราะห์ Let Them Theory ของ Mel Robbins ว่าทำไมการหยุดควบคุมผู้อื่นถึงทำให้ชีวิตดีขึ้น พร้อมตัวอย่างการนำไปใช้ในที่ทำงานและความสัมพันธ์",
    tags: ["Psychology", "Self-Dev", "Mel Robbins"],
    link: "https://www.upskilleveryday.com/library/let-them-theory",
    readTime: "7 นาที",
    highlight: true,
  },
  {
    id: 2,
    type: "article",
    category: "Career",
    title: "บีบ 10 ปีประสบการณ์ให้อยู่ใน 10 นาที",
    subtitle: "Learning shortcut สำหรับคนอยากเติบโตเร็ว",
    description:
      "เทคนิคสกัด insight จากประสบการณ์คนอื่น ทำให้การเรียนรู้ accelerate ได้เร็วกว่าการลองผิดลองถูกเอง แบบ framework ที่นำไปใช้ได้จริง",
    tags: ["Career Growth", "Learning", "Productivity"],
    link: "https://www.upskilleveryday.com/library/10-years-experience",
    readTime: "8 นาที",
  },
  {
    id: 3,
    type: "article",
    category: "Life Design",
    title: "Life Design vs Career Planning: ต่างกันอย่างไรและทำไมต้องสนใจ",
    subtitle: "Stanford's Life Design framework สำหรับคนไทย",
    description:
      "เปรียบเทียบ 2 แนวคิดที่คนมักสับสน Life Design คือการออกแบบชีวิตจาก values ส่วน Career Planning คือการวางแผนอาชีพจาก market — และทำไมคุณต้องการทั้งสองอย่าง",
    tags: ["Life Design", "Career", "Stanford"],
    link: "https://www.upskilleveryday.com/library/life-design-vs-career",
    readTime: "9 นาที",
    highlight: true,
  },
  {
    id: 4,
    type: "article",
    category: "Business",
    title: "One Person Business: ธุรกิจคนเดียวที่สร้าง Impact ได้จริง",
    subtitle: "Model ธุรกิจที่เหมาะกับยุค Creator Economy",
    description:
      "วิเคราะห์โมเดล One Person Business ว่าทำไมถึงเหมาะกับยุคนี้ พร้อม framework สร้างรายได้หลายทางโดยไม่ต้องมีทีมใหญ่ — ดึง case studies จากต่างประเทศมา localize",
    tags: ["Business", "Solopreneur", "Creator Economy"],
    link: "https://www.upskilleveryday.com/library/one-person-business",
    readTime: "10 นาที",
  },
  {
    id: 5,
    type: "article",
    category: "Self-Development",
    title: "คู่มือ DISC สำหรับคนอยากอัพสกิล: รู้จักตัวเองก่อนพัฒนาตัวเอง",
    subtitle: "DISC deep-dive ฉบับ practical",
    description:
      "ไกด์ DISC ฉบับครบจบ อธิบายทั้ง 4 สไตล์ (Dominance, Influence, Steadiness, Conscientiousness) พร้อม insight ว่าแต่ละแบบควรพัฒนาอะไร และทำงานร่วมกับคนต่าง type อย่างไร",
    tags: ["DISC", "Leadership", "Team Dynamics"],
    link: "https://www.upskilleveryday.com/library/disc-upskill-guide",
    readTime: "12 นาที",
    highlight: true,
  },
  {
    id: 6,
    type: "article",
    category: "Finance",
    title: "10 วิธีสร้างความมั่งคั่งที่ทุกคนเริ่มได้วันนี้",
    subtitle: "Wealth building สำหรับคนทั่วไป ไม่ต้องรวยก่อน",
    description:
      "สรุป 10 หลักการสร้างความมั่งคั่งที่ผ่านการทดสอบจากนักลงทุนและนักธุรกิจระดับโลก แปลงให้เป็นภาษาง่ายและ actionable สำหรับคนไทย",
    tags: ["Finance", "Wealth", "Investment"],
    link: "https://www.upskilleveryday.com/library/10-ways-to-grow-wealth",
    readTime: "8 นาที",
  },
  {
    id: 7,
    type: "article",
    category: "Leadership",
    title: "ทำไมผู้นำที่ดีต้องการ DISC ทั้ง 4 แบบในทีม",
    subtitle: "Team Composition ที่ชนะไม่ใช่ที่มีคนเก่งที่สุด",
    description:
      "วิเคราะห์ว่าทำไม Team ที่มี DISC หลากหลายถึง outperform ทีม star players — พร้อม framework จัดทีมและ leverage จุดแข็งแต่ละสไตล์อย่างเป็นระบบ",
    tags: ["Leadership", "Team Building", "DISC"],
    link: "https://www.upskilleveryday.com/library/why-leaders-need-all-4-disc-types",
    readTime: "9 นาที",
  },
  {
    id: 8,
    type: "article",
    category: "Business",
    title: "ทำไม Engineer ถึงเก่งธุรกิจมากกว่าที่คนคิด",
    subtitle: "First-Principles Thinking ในโลกธุรกิจ",
    description:
      "นำเสนอมุมมองใหม่ว่า Engineering Mindset (Systems Thinking, Root Cause Analysis, Iterative Testing) คือทักษะที่ทำให้ Engineer สร้างธุรกิจได้โดดเด่น",
    tags: ["Business", "Engineering", "Mental Models"],
    link: "https://www.upskilleveryday.com/library/why-engineers-excel-in-business",
    readTime: "7 นาที",
  },
  {
    id: 9,
    type: "article",
    category: "Self-Development",
    title: "ด้านมืดของบุคลิกภาพ DISC ที่คุณไม่เคยได้ยิน",
    subtitle: "ทุก strength มี shadow ซ่อนอยู่",
    description:
      "เจาะลึก 'ด้านมืด' ของแต่ละ DISC type ที่มักไม่ถูกพูดถึงในคอร์ส — D ที่ domineering เกิน, I ที่ขาด follow-through, S ที่ passive-aggressive, C ที่ paralysis by analysis",
    tags: ["DISC", "Psychology", "Self-Awareness"],
    link: "https://www.upskilleveryday.com/library/dark-side-of-disc-personality",
    readTime: "10 นาที",
    highlight: true,
  },
  {
    id: 10,
    type: "article",
    category: "Self-Development",
    title: "สรุป Courage to Be Disliked: กล้าที่จะถูกเกลียด",
    subtitle: "Adlerian Psychology เปลี่ยนมุมมองชีวิต",
    description:
      "สรุป + วิเคราะห์หนังสือ Courage to Be Disliked ของ Kishimi & Koga ผ่านมุมมอง Adlerian Psychology — ว่าทำไมการ 'ถูกเกลียด' ถึงอาจเป็นสัญญาณว่าคุณกำลังทำสิ่งที่ถูกต้อง",
    tags: ["Book Summary", "Philosophy", "Adler"],
    link: "https://www.upskilleveryday.com/library/courage-to-be-disliked-summary",
    readTime: "11 นาที",
  },
];

const filterTabs = [
  { key: "all", label: "ทั้งหมด", icon: null },
  { key: "tool", label: "Products / Tools", icon: Wrench },
  { key: "thread", label: "X Threads", icon: null, xIcon: true },
  { key: "article", label: "บทความ", icon: FileText },
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
            งานที่ผมทำ
          </h2>
          <p className="text-neutral-400 text-base max-w-xl">
            ทั้งหมดนี้คือของจริงจาก{" "}
            <a
              href="https://www.upskilleveryday.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red hover:underline"
            >
              upskilleveryday.com
            </a>{" "}
            — Platform พัฒนาตนเองที่ผมสร้างและเขียน content เอง
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
            <p className="text-white font-semibold text-sm">อัพสกิลกับฟุ้ย · upskilleveryday.com</p>
            <p className="text-neutral-400 text-xs mt-0.5">
              Platform พัฒนาตนเองครบวงจร — บทความ + Interactive Tools (DISC, Wheel of Life, Money Avatar ฯลฯ)
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
