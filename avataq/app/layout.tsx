import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AVATAQ.AI — The Future of Autonomous Execution",
  description:
    "Build Faster. Scale Smarter. Operate with AI. AVATAQ.AI creates autonomous AI teams that design, build, automate, and scale your business.",
  keywords: [
    "AI agents",
    "agentic AI",
    "autonomous execution",
    "AI startup",
    "business automation",
    "AVATAQ",
  ],
  openGraph: {
    title: "AVATAQ.AI — The Future of Autonomous Execution",
    description: "Build Faster. Scale Smarter. Operate with AI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVATAQ.AI — The Future of Autonomous Execution",
    description: "Build Faster. Scale Smarter. Operate with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
