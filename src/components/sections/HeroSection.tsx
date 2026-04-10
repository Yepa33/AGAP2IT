"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { getAssetPath } from "@/lib/basePath";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 bg-bg-main px-6 md:px-12 z-10">
      
      {/* BACKGROUND PIXELS REBUILT WITH PRECISE GRIDS (Base unit: 70px) */}
      <div className="absolute inset-x-0 top-0 pointer-events-none z-0 px-6 md:px-12">
        <div className="container mx-auto px-0 md:px-12 h-screen relative">
          
          {/* Logo squares removed - now in Navbar component for better alignment */}

          {/* 2. Middle-right staircases behind Spartan hand/head */}
          <div className="absolute top-[18%] right-[26%] w-[350px] h-[280px] grid grid-cols-5 grid-rows-4 gap-0">
            <div className="col-start-2 row-start-1 bg-[#0a1254] opacity-80 animate-organic" style={{ animationDelay: '0.2s', animationDuration: '4.5s'}} />
            <div className="col-start-3 row-start-1 bg-[#0f1b8a] opacity-70 animate-organic" style={{ animationDelay: '1.4s', animationDuration: '3.8s'}} />
            <div className="col-start-1 row-start-2 bg-[#1525a0] opacity-60 animate-organic" style={{ animationDelay: '2.8s', animationDuration: '5.1s'}} />
            <div className="col-start-3 row-start-2 bg-[#1a2bb8] opacity-80 animate-organic" style={{ animationDelay: '2.5s', animationDuration: '5.2s'}} />
            <div className="col-start-4 row-start-2 bg-[#0a1254] opacity-50 animate-organic" style={{ animationDelay: '0.8s', animationDuration: '4.1s'}} />
            <div className="col-start-4 row-start-3 bg-[#0f1b8a] opacity-60 animate-organic" style={{ animationDelay: '1.9s', animationDuration: '3.5s'}} />
            <div className="col-start-5 row-start-3 bg-[#1525a0] opacity-70 animate-organic" style={{ animationDelay: '3.1s', animationDuration: '4.9s'}} />
            <div className="col-start-3 row-start-4 bg-[#1a2bb8] opacity-60 animate-organic" style={{ animationDelay: '0.4s', animationDuration: '4.6s'}} />
          </div>

          {/* 3. Bottom right squares behind Spartan arm (Collé à la marge) */}
          <div className="absolute bottom-[10%] right-0 w-[210px] h-[210px] grid grid-cols-3 grid-rows-3 gap-0">
            <div className="col-start-1 row-start-1 bg-[#0c1875] opacity-60 animate-organic" style={{ animationDelay: '1.1s', animationDuration: '6s'}} />
            <div className="col-start-2 row-start-1 bg-[#1a2bb8] opacity-70 animate-organic" style={{ animationDelay: '2.1s', animationDuration: '3.9s'}} />
            <div className="col-start-2 row-start-2 bg-[#0a145e] opacity-80 animate-organic" style={{ animationDelay: '0.7s', animationDuration: '4.3s'}} />
            <div className="col-start-3 row-start-2 bg-[#0f1b8a] opacity-90 animate-organic" style={{ animationDelay: '3.4s', animationDuration: '5.8s'}} />
            <div className="col-start-2 row-start-3 bg-[#1525a0] opacity-85 animate-organic" style={{ animationDelay: '1.5s', animationDuration: '4.7s'}} />
          </div>

        </div>
      </div>
      
      {/* Ambient Blue Deep Glow - Accentuated */}
      <div className="absolute top-[10%] right-[5%] w-[700px] h-[700px] bg-[#0a18e0] opacity-35 blur-[140px] rounded-full z-0 pointer-events-none" />

      <div className="container mx-auto px-0 md:px-12 grid lg:grid-cols-[1.3fr_0.7fr] gap-0 items-center relative z-10 w-full mb-10 h-full">
        
        {/* Left column: Text Content */}
        <div className="flex flex-col items-start pt-16 z-20">
           <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[6rem] leading-[1.05] font-heading font-bold mb-10 w-full max-w-2xl tracking-normal drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-accent-secondary via-[#ffebb8] to-[#8fb3ff]">
             Résilient,<br />
             ambitieux,<br />
             prêt à être challengé.
           </h1>

           {/* Infobox nested */}
           <div className="ml-0 md:ml-32 max-w-[360px] bg-[#111424]/80 backdrop-blur-md rounded-[20px] p-6 border-[0.5px] border-white/5 relative shadow-xl">
             <div className="text-[#ffcc00] mb-3">
                <ArrowDownRight className="w-5 h-5" strokeWidth={2.5} />
             </div>
             <p className="text-white/85 text-[0.95rem] font-sans font-medium leading-[1.6] tracking-wide">
               Maxime MUSELLEC<br />
               Retour sur notre dernier échange.
             </p>
           </div>
        </div>
        
        {/* RIGHT COLUMN SPARTAN (Shifted further left and ensure it's on top of squares) */}
        <div className="absolute min-h-[90vh] w-[42vw] right-[2vw] bottom-[-12vh] flex justify-center items-end hidden md:flex z-20 pointer-events-none">
          <Image
            src={getAssetPath("/spartiate-home-on-compressed.webp")}
            alt="Spartan Warrior"
            fill
            className="object-contain object-bottom animate-[float_6s_ease-in-out_infinite]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
