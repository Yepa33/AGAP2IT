"use client";

import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="absolute top-0 inset-x-0 z-[100] bg-transparent px-6 md:px-12">
      <div className="container mx-auto px-0 md:px-12 flex items-start justify-between">
        
        {/* Logo Container with background squares behind it for perfect alignment */}
        <div className="w-[140px] h-[140px] flex items-center justify-center relative shrink-0">
          {/* BACKGROUND SQUARES (Moved here for perfect centering) */}
          <div className="absolute top-0 left-0 w-[210px] h-[140px] grid grid-cols-3 grid-rows-2 gap-0 z-0 pointer-events-none">
            {/* 2x2 block for the Logo */}
            <div className="col-start-1 row-start-1 bg-[#1a2bb8] opacity-90 animate-organic" style={{ animationDelay: '0.1s', animationDuration: '6s'}} />
            <div className="col-start-2 row-start-1 bg-[#1a2bb8] opacity-90 animate-organic" style={{ animationDelay: '1.4s', animationDuration: '4.8s'}} />
            <div className="col-start-1 row-start-2 bg-[#1a2bb8] opacity-90 animate-organic" style={{ animationDelay: '3.2s', animationDuration: '5.5s'}} />
            <div className="col-start-2 row-start-2 bg-[#1a2bb8] opacity-90 animate-organic" style={{ animationDelay: '0.8s', animationDuration: '4.2s'}} />
            <div className="col-start-3 row-start-1 bg-[#1a2bb8] opacity-80 animate-organic" style={{ animationDelay: '0.5s', animationDuration: '4.2s'}} />
          </div>

          <Link href="/" className="relative w-[85px] h-[85px] flex items-center justify-center z-10">
            <Image src="/logo-agap2it.png" alt="Logo agap2IT" fill className="object-contain" />
          </Link>
        </div>

        {/* Right Side Wrapping Group to push Links together */}
        <div className="flex items-start">
          {/* Nav Links */}
          <div className="hidden lg:flex items-center gap-10 font-sans font-medium text-[15px] tracking-wide text-white/40 mt-12 mr-6">
            <Link href="/entreprise" className="hover:text-white hover:drop-shadow-[0_0_15px_#2741ff] transition-all">L'entreprise</Link>
            <Link href="/agencedebordeaux" className="hover:text-white hover:drop-shadow-[0_0_15px_#2741ff] transition-all">L'agence de Bordeaux</Link>
            <Link href="/metier" className="hover:text-white hover:drop-shadow-[0_0_15px_#2741ff] transition-all">Le métier</Link>
            <Link href="/conclusion" className="hover:text-white hover:drop-shadow-[0_0_15px_#2741ff] transition-all">Conclusion</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
