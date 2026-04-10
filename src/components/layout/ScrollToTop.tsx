"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolling down more than 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full",
        "p-[2.5px] bg-gradient-to-tr from-[#ffcc00] via-white to-[#8fb3ff]",
        "hover:-translate-y-1 transition-all shadow-[0_0_20px_rgba(39,65,255,0.4)] group overflow-hidden"
      )}
      aria-label="Remonter en haut"
    >
      <div className="w-full h-full rounded-full bg-[#1322ab] relative flex items-center justify-center overflow-hidden">
        {/* Noise overlay */}
        <div className="absolute inset-0 mix-blend-overlay opacity-50 pointer-events-none">
          <svg width="100%" height="100%">
            <filter id="button-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/>
            </filter>
            <rect width="100%" height="100%" filter="url(#button-noise)"/>
          </svg>
        </div>
        
        <ChevronUp className="w-7 h-7 text-[#8fb3ff] transition-transform relative z-10" strokeWidth={3} />
      </div>
    </button>
  );
}
