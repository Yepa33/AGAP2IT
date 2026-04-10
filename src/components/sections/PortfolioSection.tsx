"use client";

import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  client: string;
  tech: string;
  imageUrl: string;
  description: string;
  wrapperClassName?: string;
  gradientFrom?: string;
  customTransform?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

function ProjectCard({ title, client, tech, imageUrl, description, wrapperClassName, customTransform, isHovered, onMouseEnter, onMouseLeave }: ProjectCardProps) {
  
  // When hovered, the card breaks out of its 3D perspective and faces the camera flat, scaling up.
  const animatedTransform = isHovered 
    ? customTransform + " translateY(-10px) scale(1.05)"
    : customTransform;

  return (
    <div 
      className={cn("absolute w-[300px] h-[430px] transition-all duration-700 ease-out group cursor-pointer", wrapperClassName)}
      style={{ transform: animatedTransform, transformStyle: "preserve-3d", zIndex: isHovered ? 100 : undefined }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
        {/* OUTER NEON BORDER WRAPPER */}
        <div className="w-full h-full cyber-dr-outer rounded-[32px] p-[2.5px] bg-[linear-gradient(135deg,_#43465e_0%,_#6e7fba_30%,_#ffcc00_65%,_#ffcc00_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_45px_100px_rgba(0,0,0,0.8)] transition-shadow duration-500">
           
           {/* MID DARK GAP (the thick black border) */}
           <div className="w-full h-full cyber-dr-mid rounded-[30px] p-[10px] bg-[#0c1021]/95 backdrop-blur-xl">
              
              {/* INNER BLUE CONTENT */}
              <div className="w-full h-full cyber-dr-inner rounded-[22px] relative overflow-hidden bg-[#1c2df0]">
                 
                 {/* Integral Blue Base + Noise + Shadow */}
                 <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none z-0">
                   <svg width="100%" height="100%">
                     <filter id="page-noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/></filter>
                     <rect width="100%" height="100%" filter="url(#page-noise)"/>
                   </svg>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0b1791]/80 to-transparent z-0 pointer-events-none" />

                 <div className="relative z-20 flex flex-col h-full w-full p-6">
                    {/* Header */}
                    <div className="flex justify-between items-start">
                       <h3 className="text-white font-bold text-xl drop-shadow-md">{client}</h3>
                       <div className="w-8 h-8 rounded-full border-[1.5px] border-[#ffcc00] flex items-center justify-center text-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.3)]">
                         <ShieldCheck className="w-4 h-4" />
                       </div>
                    </div>
                    
                    {/* Center Image */}
                    <div className="flex-1 w-full flex items-center justify-center relative mt-3 mb-3">
                       <div className="absolute inset-0 bg-contain bg-center bg-no-repeat drop-shadow-2xl" style={{ backgroundImage: `url(${imageUrl})` }} />
                    </div>
                    
                    {/* Bottom Info */}
                    <div className="mt-auto">
                       <p className="text-[#8fb3ff] font-bold text-[16px] mb-3">{title}</p>
                       <p className="text-white text-[14px] leading-[1.3] font-sans font-medium mb-5 opacity-95">
                         {description}
                       </p>
                       <div className="text-white/70 text-[11px] leading-[1.3] font-sans">
                         {tech}
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
    </div>
  );
}

export function PortfolioSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const projects = [
    {
      title: "Analyse & Valorisation",
      client: "Data",
      description: "Collecte et valorisation des données pour transformer l’information en leviers de performance et d’innovation stratégique.",
      tech: "Engineering • Analyse • Gouvernance • Stratégie",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      wrapperClassName: "top-[5%] right-[-5%] lg:right-[5%] z-10 opacity-90",
      gradientFrom: "from-white",
      customTransform: "perspective(1200px) translate3d(0, 0, -100px) rotateY(25deg) rotateX(10deg) rotateZ(-8deg) scale(0.85)"
    },
    {
      title: "Performance & Sécurité",
      client: "Infrastructure & Cloud",
      description: "Conception d’infrastructures hybrides et solutions cloud innovantes, garantissant la disponibilité et la résilience des systèmes.",
      tech: "Architecture • Middleware • Cloud • DevOps • Ops",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400",
      wrapperClassName: "bottom-[5%] left-[0%] lg:left-[5%] z-20 opacity-95",
      customTransform: "perspective(1200px) translate3d(0, 0, 50px) rotateY(25deg) rotateX(10deg) rotateZ(-8deg) scale(0.9)"
    },
    {
      title: "Conception & Réalisation",
      client: "Développement & Applications",
      description: "Solutions logicielles sur mesure, intégrant UX/UI, agilité et tests rigoureux pour garantir évolutivité et fiabilité.",
      tech: "Analyse • Dév • Architecture • QA • Intégration",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400",
      wrapperClassName: "top-[20%] left-[20%] lg:left-[30%] z-30 shadow-[0_35px_70px_rgba(0,0,0,0.8)]",
      customTransform: "perspective(1200px) translate3d(0, 0, 150px) rotateY(25deg) rotateX(10deg) rotateZ(-8deg) scale(1)"
    }
  ];
  return (
    <section id="bordeaux" className="relative py-32 px-6 md:px-12 bg-bg-main min-h-screen flex items-center z-20">
      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: 3D Layered Cards + Ambient FX */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
           
           {/* Heavy Flou Jaune */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#ffcc00] opacity-35 blur-[100px] rounded-full pointer-events-none z-0" />

           {/* Pixels Organiques (Multiplied) */}
           <div className="absolute top-[5%] left-[0%] w-[180px] h-[180px] grid grid-cols-4 grid-rows-4 opacity-70 z-0 pointer-events-none">
             <div className="col-start-1 row-start-2 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#1e2ef0', animationDelay: '0.1s', animationDuration: '4s'}} />
             <div className="col-start-3 row-start-1 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#0f1b8a', animationDelay: '2.1s', animationDuration: '5.5s'}} />
             <div className="col-start-2 row-start-4 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#ffcc00', animationDelay: '1.5s', animationDuration: '3.2s'}} />
             <div className="col-start-4 row-start-3 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#3b5af2', animationDelay: '0.8s', animationDuration: '4.8s'}} />
           </div>
           
           <div className="absolute bottom-[0%] right-[10%] w-[200px] h-[200px] grid grid-cols-5 grid-rows-5 opacity-80 z-0 pointer-events-none">
             <div className="col-start-2 row-start-3 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#ffcc00', animationDelay: '1.2s', animationDuration: '3.8s'}} />
             <div className="col-start-4 row-start-2 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#2f4df6', animationDelay: '3.4s', animationDuration: '6s'}} />
             <div className="col-start-1 row-start-5 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#0f1b8a', animationDelay: '0.1s', animationDuration: '5.1s'}} />
             <div className="col-start-5 row-start-4 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#ffcc00', animationDelay: '2.4s', animationDuration: '4.1s'}} />
             <div className="col-start-3 row-start-1 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#1a2bbb', animationDelay: '1.7s', animationDuration: '4.5s'}} />
           </div>

           <div className="absolute bottom-[20%] left-[25%] w-[100px] h-[100px] grid grid-cols-2 grid-rows-2 opacity-60 z-0 pointer-events-none">
             <div className="col-start-2 row-start-1 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#1e2ef0', animationDelay: '0.9s', animationDuration: '3.5s'}} />
             <div className="col-start-1 row-start-2 w-full h-full mix-blend-screen animate-organic" style={{ backgroundColor: '#0f1b8a', animationDelay: '3.1s', animationDuration: '4.2s'}} />
           </div>

           {/* Cards Layered 3D */}
           <div className="absolute inset-0" onMouseLeave={() => setHoveredIdx(null)}>
             {projects.map((proj, idx) => (
                <ProjectCard 
                  key={idx} 
                  {...proj} 
                  isHovered={hoveredIdx === idx}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                />
             ))}
           </div>
        </div>

        {/* Right: Copy & CTA */}
        <div className="flex flex-col items-start gap-8 pl-0 lg:pl-16 relative z-30 w-full">
          <div>
            <p className="font-bold text-sm tracking-widest uppercase mb-4">
              <span className="text-accent-secondary">2. </span> <span className="text-white">L'agence de Bordeaux</span>
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-accent-secondary leading-tight whitespace-nowrap">
               Une force régionale
            </h2>
          </div>

          <div className="flex flex-col gap-10 mt-4 text-white font-sans w-full">
             <div>
               <p className="mb-4 text-white font-bold uppercase text-lg tracking-widest border-l-4 border-accent-secondary pl-6">
                 La synergie entre Industrie & IT
               </p>
               <p className="text-[16px] leading-[1.6] opacity-90 mb-6 font-light">
                 L'agence bordelaise est un hub stratégique de 150 collaborateurs. Sa force réside dans sa dualité :
               </p>
               <ul className="list-none space-y-6 opacity-90 text-[15px]">
                 <li className="flex items-start gap-4">
                   <span className="text-accent-secondary mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                   <span className="leading-[1.6]">
                     <span className="text-white font-bold">Agap2 (Industrie)</span> : le socle historique du groupe.
                   </span>
                 </li>
                 <li className="flex items-start gap-4">
                   <span className="text-accent-secondary mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                   <span className="leading-[1.6]">
                     <span className="text-white font-bold">Agap2IT (Informatique)</span> : une équipe de 40 consultants en pleine expansion, encadrée par une structure de proximité de 5 personnes à l'agence : le responsable du département IT (<span className="text-white">Charles QUILLARD-SMAER</span>), 2 Ingénieurs d’Affaires (<span className="text-white">Margaux QUINTIN</span> et <span className="text-white">Florian ARMENGAUD</span>) et une équipe support.
                   </span>
                 </li>
               </ul>
             </div>

             <div>
               <p className="mb-4 text-white font-bold uppercase text-lg tracking-widest border-l-4 border-accent-secondary pl-6">
                 Les enjeux du territoire Nouvelle-Aquitaine
               </p>
               <div className="flex flex-col gap-6">
                 <p className="text-[16px] leading-[1.6] opacity-90 font-light">
                   Le marché bordelais est stable et fidèle. Votre activité est portée par des comptes emblématiques comme 
                   <span className="text-white font-bold"> Dassault</span> (16 consultants), 
                   <span className="text-white font-bold"> TotalEnergies</span>, 
                   <span className="text-white font-bold"> le Crédit Agricole</span> ou 
                   <span className="text-white font-bold"> Orange</span>.
                 </p>
                 
                 <ul className="list-none opacity-90">
                   <li className="flex items-start gap-4">
                     <span className="text-accent-secondary mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                     <span className="text-[16px] leading-[1.6] font-light">
                       <span className="font-bold text-white">L'enjeu actuel</span> : aujourd’hui, si la relation avec vos comptes historiques est le socle de votre réussite, votre ambition est la conquête. Vous voulez diversifier votre panel client en adressant tous les secteurs d'activité de la région pour devenir l'acteur IT incontournable du Sud-Ouest, en misant sur cette proximité qui fait votre force.
                     </span>
                   </li>
                 </ul>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
