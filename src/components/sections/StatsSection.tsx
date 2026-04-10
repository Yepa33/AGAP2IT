"use client";

import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAssetPath } from "@/lib/basePath";

interface StatBoxProps {
  label: string;
  value: string | React.ReactNode;
  colSpan?: 1 | 2;
  boxClassName?: string;
  isCustomValue?: boolean;
}

function StatBox({ label, value, colSpan = 1, boxClassName, isCustomValue = false }: StatBoxProps) {
  return (
    <div 
      className={cn(
        "relative bg-[#0c0f1e]/60 backdrop-blur-md rounded-[32px] border-[1px] border-white/5 p-6 flex items-end justify-between shadow-2xl transition-all duration-300 hover:border-[#2741ff]/40 group h-[150px]",
        colSpan === 2 ? "col-span-1 md:col-span-2" : "col-span-1",
        boxClassName
      )}
    >
      {/* Icon at Top Left */}
      <div className="absolute top-6 left-6 text-[#2741ff]/80">
         <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
      </div>
      
      {isCustomValue ? (
          <div className="w-full h-full flex items-end justify-center pt-4">
             {value}
          </div>
      ) : (
        <div className="flex justify-between items-end w-full gap-4 pt-4">
           <p className="text-[#2741ff] font-bold text-[15px] leading-tight max-w-[140px] mb-1">
             {label === "pays en Europe" ? "Pays en Europe" : label}
           </p>
           <span 
             className="text-6xl md:text-7xl font-heading font-medium text-white tracking-widest leading-none"
             style={{ filter: 'drop-shadow(0 0 10px rgba(39, 65, 255, 0.6))' }}
           >
             {value}
           </span>
        </div>
      )}
    </div>
  );
}

export function StatsSection() {
  return (
    <section id="stats" className="relative pt-48 pb-24 bg-bg-main z-20">
      

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
         
          <div className="flex flex-col gap-12 relative z-10 w-full">
            
            {/* Row 1: Two cards */}
            <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-start">
               <StatBox label="Collaborateurs en Europe" value="950" boxClassName="w-full lg:w-[400px]" />
               <StatBox label="Chiffre d'affaires 2024 (en millions)" value="70" boxClassName="w-full lg:w-[400px]" />
            </div>

            {/* Row 2: Two cards shifted right by (Card Width + Gap) */}
            <div className="flex flex-wrap lg:flex-nowrap gap-10 justify-start lg:ml-[440px]">
               <StatBox label="pays en Europe" value="5" boxClassName="w-full lg:w-[400px]" />
               <StatBox label="Clients conquis" value="200" boxClassName="w-full lg:w-[400px]" />
            </div>

            {/* Row 3: One wide card shifted right by the same amount */}
            <div className="flex justify-start lg:ml-[440px]">
               <StatBox 
                 colSpan={2} 
                 boxClassName="w-full lg:w-[840px]"
                 label="" 
                 isCustomValue={true}
                 value={
                   <div className="flex items-center gap-10 pb-2">
                      <span className="text-3xl md:text-5xl font-heading font-medium text-white tracking-widest" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))' }}>1 manager</span>
                      <span className="text-[14px] font-bold text-[#2741ff] uppercase mt-4 tracking-widest">pour</span>
                      <span className="text-3xl md:text-5xl font-heading font-medium text-white tracking-widest" style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))' }}>10 spartiates</span>
                   </div>
                 }
               />
            </div>
          </div>

          {/* Shield Asset - Very prominent */}
          <div className="absolute top-[-65%] right-[-20%] lg:right-[-20%] z-0 pointer-events-none opacity-90 hidden lg:block">
            <div className="relative h-[950px] w-[950px]">
              <Image
                src={getAssetPath("/bouclier-on-compressed.webp")}
                alt="Cyber-Shield"
                fill
                className="object-contain animate-[float_12s_ease-in-out_infinite]"
              />
            </div>
          </div>
      </div>

    </section>
  );
}
