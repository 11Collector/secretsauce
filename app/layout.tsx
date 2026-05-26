import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ฟุ้ย ธนวัฒน์ หล่อวิทยโอฬาร | Content Creator & Platform Builder",
  description:
    "นักสร้างเนื้อหาที่เชื่อมโยงธุรกิจ ความคิด และการพัฒนาตนเอง — สมัครตำแหน่ง Content Creator at The Standard / The Secret Sauce",
  keywords: [
    "Content Creator",
    "Business Content",
    "Content Platform",
    "The Secret Sauce",
    "The Standard",
    "ฟุ้ย ธนวัฒน์",
    "Thanawat",
  ],
  authors: [{ name: "ฟุ้ย ธนวัฒน์ หล่อวิทยโอฬาร" }],
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "https://secretsauce-portfolio.vercel.app",
    siteName: "ฟุ้ย ธนวัฒน์ — Portfolio",
    title: "ฟุ้ย ธนวัฒน์ หล่อวิทยโอฬาร | Content Creator & Platform Builder",
    description:
      "นักสร้างเนื้อหาที่เชื่อมโยงธุรกิจ ความคิด และการพัฒนาตนเอง สมัครตำแหน่ง Content Creator at The Standard / The Secret Sauce",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ฟุ้ย ธนวัฒน์ หล่อวิทยโอฬาร — Content Creator Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ฟุ้ย ธนวัฒน์ หล่อวิทยโอฬาร | Content Creator & Platform Builder",
    description:
      "นักสร้างเนื้อหาที่เชื่อมโยงธุรกิจ ความคิด และการพัฒนาตนเอง",
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
