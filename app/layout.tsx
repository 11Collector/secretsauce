import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ธนวัฒน์ หล่อวิทยโอฬาร (ฟุ้ย) | Self-Taught Web Builder & Creator",
  description:
    "วิศวกรคอมพิวเตอร์สายธุรกิจ (อดีต AE) ที่เรียนรู้การพัฒนาเว็บด้วยตนเองและใช้ AI ช่วยสร้างสรรค์เครื่องมือออนไลน์ที่มีผู้เล่นจริงกว่า 120,000 คน",
  keywords: [
    "Self-Taught Developer",
    "Web Builder",
    "React",
    "TypeScript",
    "AI-assisted coding",
    "ธนวัฒน์ หล่อวิทยโอฬาร",
    "ฟุ้ย ธนวัฒน์",
  ],
  authors: [{ name: "ธนวัฒน์ หล่อวิทยโอฬาร" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://upskilleveryday.com",
    siteName: "ธนวัฒน์ หล่อวิทยโอฬาร — Portfolio",
    title: "ธนวัฒน์ หล่อวิทยโอฬาร (ฟุ้ย) | Self-Taught Web Builder & Creator",
    description:
      "วิศวกรคอมพิวเตอร์สายธุรกิจ (อดีต AE) ที่เรียนรู้การพัฒนาเว็บด้วยตนเองและใช้ AI ช่วยสร้างสรรค์เครื่องมือออนไลน์ที่มีผู้เล่นจริงกว่า 120,000 คน",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ธนวัฒน์ หล่อวิทยโอฬาร — Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ธนวัฒน์ หล่อวิทยโอฬาร (ฟุ้ย) | Self-Taught Web Builder & Creator",
    description:
      "วิศวกรคอมพิวเตอร์สายธุรกิจ (อดีต AE) ที่เรียนรู้การพัฒนาเว็บด้วยตนเองและใช้ AI ช่วยสร้างโปรดักต์ที่มีผู้ใช้จริงในออนไลน์",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-dark-900 text-neutral-100 antialiased font-sans">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
