import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { siteConfig } from "@/app/lib/site-config";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body>
        <Header />
        <main className="min-h-[calc(100vh-80px)]">{children}</main>
        <Footer socialLinks={siteConfig.socialLinks} />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
