"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { RecruitSection } from "@/components/sections/RecruitSection";
import { Footer } from "@/components/layout/Footer";

export default function HomeClient() {
  const pathname = usePathname();

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      "/entreprise": "entreprise",
      "/agencedebordeaux": "bordeaux",
      "/metier": "metier",
      "/conclusion": "conclusion",
    };

    const targetId = sectionMap[pathname];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <ApproachSection />
      <StatsSection />
      <PortfolioSection />
      <TeamSection />
      
      <div className="relative bg-[#1322ab] w-full overflow-hidden">
        <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="page-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#page-noise)"/>
          </svg>
        </div>
        <div className="relative z-10 w-full">
          <RecruitSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
