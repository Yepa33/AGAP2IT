import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Target, TrendingUp, Crown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  isAgapien: boolean;
  year: string;
  borderColor: string;
  imageUrl: string;
  zIndex: number;
}

export function TeamSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [hoveredPhase, setHoveredPhase] = useState<number | null>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cardsRef.current) return;
    
    const cards = cardsRef.current.children;
    
    Array.from(cards).forEach((card, index) => {
      // Different movement speeds to create the "descending stairs" effect
      const yMove = (index + 1) * 80;
      
      gsap.fromTo(
        card,
        { y: index * 40 }, // Initial staggered positions
        {
          y: yMove,
          ease: "none",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          }
        }
      );
    });
  }, { scope: cardsRef });

  const team: TeamMember[] = [
    {
      name: "Ryadh",
      role: "Software Engineer",
      isAgapien: true,
      year: "2021",
      borderColor: "bg-gradient-to-br from-[#ffcc00] via-[#ffcc00]/20 to-transparent hover:from-[#2741ff] hover:via-[#2741ff] hover:to-[#2741ff]",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
      zIndex: 10,
    },
    {
      name: "Julien",
      role: "Dev C#.Net",
      isAgapien: true,
      year: "2022",
      borderColor: "bg-gradient-to-tr from-[#2741ff] via-[#2741ff]/20 to-transparent hover:from-[#2741ff] hover:via-[#2741ff] hover:to-[#2741ff]",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
      zIndex: 20,
    },
    {
      name: "Elina",
      role: "PMO",
      isAgapien: true,
      year: "2023",
      borderColor: "bg-gradient-to-tl from-[#ffcc00] via-[#ffcc00]/20 to-transparent hover:from-[#2741ff] hover:via-[#2741ff] hover:to-[#2741ff]",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      zIndex: 30, // Center piece, highest z-index
    },
    {
      name: "Maiwen",
      role: "Infographie 3D",
      isAgapien: true,
      year: "2023",
      borderColor: "bg-gradient-to-tr from-[#2741ff] via-[#2741ff]/20 to-transparent hover:from-[#2741ff] hover:via-[#2741ff] hover:to-[#2741ff]",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
      zIndex: 20,
    },
    {
      name: "Fouad",
      role: "Responsable maintenance IT",
      isAgapien: true,
      year: "2020",
      borderColor: "bg-gradient-to-tl from-[#ffcc00] via-[#ffcc00]/20 to-transparent hover:from-[#2741ff] hover:via-[#2741ff] hover:to-[#2741ff]",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      zIndex: 10,
    }
  ];

  return (
    <section id="metier" className="relative pt-24 bg-bg-main overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center">
        <p className="font-bold text-sm tracking-widest uppercase mb-4 text-center">
          <span className="text-accent-secondary">3.</span> <span className="text-white">Le métier</span>
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-accent-secondary text-center mb-6">
          Devenir ingénieur d'affaires chez Agap2IT
        </h2>
        
        <div className="max-w-4xl w-full mb-16 flex flex-col gap-12 text-center items-center">
          <div className="flex flex-col items-center">
            <p className="mb-6 text-white font-bold uppercase text-lg md:text-xl tracking-widest text-center border-l-4 border-accent-secondary pl-6">
              Un parcours de performance et d'intrapreneuriat
            </p>
            <p className="text-white text-[16.5px] leading-[1.8] font-sans opacity-95 max-w-3xl">
              Le rôle d'Ingénieur d’Affaires chez Agap2 est une véritable opportunité pour un junior déterminé. 
              C’est un poste où la personnalité, le tempérament et la résilience priment sur le reste.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white text-[16.5px] leading-[1.8] font-sans opacity-95 max-w-3xl">
              Pour moi, le métier d’ingénieur d’affaires chez Agap2IT est très valorisant. 
              Il répond parfaitement à ce que je recherche : du challenge, de la stimulation, être entouré 
              de personnes inspirantes et avoir des responsabilités. Ces critères sont mes moteurs, 
              c’est pourquoi je suis très motivé pour rejoindre Agap2IT.
            </p>
          </div>
        </div>

        {/* Career Evolution Cards - Harmonized Design */}
        <div className="w-full max-w-6xl mb-[424px] relative">
          
          <div 
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2741ff] rounded-[100%] blur-[120px] transition-opacity duration-700 pointer-events-none z-0",
              hoveredPhase !== null ? "opacity-30" : "opacity-0"
            )}
          />

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 p-4">
            
            {/* Card 1: Court Terme */}
            <div 
              onMouseEnter={() => setHoveredPhase(1)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="group relative w-full h-[540px] transition-all duration-500 ease-out cursor-default hover:-translate-y-2"
            >
              <div className="w-full h-full cyber-dr-outer rounded-[32px] p-[2.5px] bg-[linear-gradient(135deg,_#43465e_0%,_#6e7fba_30%,_#ffcc00_65%,_#ffcc00_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_50px_rgba(39,65,255,0.4)] transition-all duration-500">
                <div className="w-full h-full cyber-dr-mid rounded-[30px] p-[8px] bg-[#0c1021]/95 backdrop-blur-xl">
                  <div className="w-full h-full cyber-dr-inner rounded-[22px] relative overflow-hidden bg-[#1c2df0]">
                    {/* Effects */}
                    <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none z-0">
                      <svg width="100%" height="100%"><filter id="noise-1"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise-1)"/></svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1791]/80 to-transparent z-0 pointer-events-none" />
                    
                    <div className="relative z-20 flex flex-col h-full w-full p-6">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-white/60 font-bold text-[10px] tracking-[0.2em] uppercase">Phase 01</p>
                        <div className="w-10 h-10 rounded-full border-[1.5px] border-[#ffcc00] flex items-center justify-center text-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.3)] bg-[#ffcc00]/5">
                          <Target className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-8">
                        <p className="text-[#ffcc00] font-bold text-xs tracking-widest uppercase mb-2">Court terme (0-1 an)</p>
                        <h3 className="text-white font-bold text-xl mb-4 leading-tight">L'intégration</h3>
                        <p className="text-white/80 text-[12.5px] leading-[1.65] font-sans mb-4">
                          Dès le premier jour, j'intègre un parcours de coaching intensif avec mon responsable.
                        </p>
                        <ul className="list-none space-y-4 text-white/80 text-[12.5px] leading-[1.65] font-sans">
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Apprentissage par l'action :</span> prospection, recrutement, qualification des besoins clients, etc.</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Objectif :</span> construire une équipe de 8 consultants la première année et développer mon portefeuille de compte.</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Outils :</span> accès aux meilleures solutions (Boond Manager, LinkedIn Recruiter, Hello Work, et d’autres).</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Moyen Terme */}
            <div 
              onMouseEnter={() => setHoveredPhase(2)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="group relative w-full h-[540px] transition-all duration-500 ease-out cursor-default hover:-translate-y-2"
            >
              <div className="w-full h-full cyber-dr-outer rounded-[32px] p-[2.5px] bg-[linear-gradient(135deg,_#43465e_0%,_#6e7fba_30%,_#ffcc00_65%,_#ffcc00_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_50px_rgba(39,65,255,0.4)] transition-all duration-500">
                <div className="w-full h-full cyber-dr-mid rounded-[30px] p-[8px] bg-[#0c1021]/95 backdrop-blur-xl">
                  <div className="w-full h-full cyber-dr-inner rounded-[22px] relative overflow-hidden bg-[#1c2df0]">
                    {/* Effects */}
                    <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none z-0">
                      <svg width="100%" height="100%"><filter id="noise-2"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise-2)"/></svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1791]/80 to-transparent z-0 pointer-events-none" />
                    
                    <div className="relative z-20 flex flex-col h-full w-full p-6">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-white/60 font-bold text-[10px] tracking-[0.2em] uppercase">Phase 02</p>
                        <div className="w-10 h-10 rounded-full border-[1.5px] border-[#ffcc00] flex items-center justify-center text-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.3)] bg-[#ffcc00]/5">
                          <TrendingUp className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-8">
                        <p className="text-[#ffcc00] font-bold text-xs tracking-widest uppercase mb-2">Moyen terme (1-3 ans)</p>
                        <h3 className="text-white font-bold text-xl mb-4 leading-tight">Le passage senior</h3>
                        <p className="text-white/80 text-[12.5px] leading-[1.65] font-sans mb-4">
                          Mon évolution se mesure à ma performance et à la taille de mon équipe. Dès que j'atteins 8 consultants en mission, je change de statut :
                        </p>
                        <ul className="list-none space-y-4 text-white/80 text-[12.5px] leading-[1.65] font-sans">
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Passage en senior :</span> je maîtrise l’ensemble des éléments qui me conduisent à ma réussite. L’objectif reste le même : faire croître mon business et pérenniser une relation de confiance avec mon équipe.</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Responsabilité :</span> je suis le seul responsable du suivi de carrière et du management de mes consultants.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Long Terme */}
            <div 
              onMouseEnter={() => setHoveredPhase(3)}
              onMouseLeave={() => setHoveredPhase(null)}
              className="group relative w-full h-[540px] transition-all duration-500 ease-out cursor-default hover:-translate-y-2"
            >
              <div className="w-full h-full cyber-dr-outer rounded-[32px] p-[2.5px] bg-[linear-gradient(135deg,_#43465e_0%,_#6e7fba_30%,_#ffcc00_65%,_#ffcc00_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.6)] group-hover:shadow-[0_0_50px_rgba(39,65,255,0.4)] transition-all duration-500">
                <div className="w-full h-full cyber-dr-mid rounded-[30px] p-[8px] bg-[#0c1021]/95 backdrop-blur-xl">
                  <div className="w-full h-full cyber-dr-inner rounded-[22px] relative overflow-hidden bg-[#1c2df0]">
                    {/* Effects */}
                    <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none z-0">
                      <svg width="100%" height="100%"><filter id="noise-3"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(#noise-3)"/></svg>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1791]/80 to-transparent z-0 pointer-events-none" />
                    
                    <div className="relative z-20 flex flex-col h-full w-full p-6">
                      <div className="flex justify-between items-start mb-4">
                        <p className="text-white/60 font-bold text-[10px] tracking-[0.2em] uppercase">Phase 03</p>
                        <div className="w-10 h-10 rounded-full border-[1.5px] border-[#ffcc00] flex items-center justify-center text-[#ffcc00] shadow-[0_0_15px_rgba(255,204,0,0.3)] bg-[#ffcc00]/5">
                          <Crown className="w-5 h-5" />
                        </div>
                      </div>
                      <div className="mt-8">
                        <p className="text-[#ffcc00] font-bold text-xs tracking-widest uppercase mb-2">Long terme (3 ans +)</p>
                        <h3 className="text-white font-bold text-xl mb-4 leading-tight">L'évolution</h3>
                        <p className="text-white/80 text-[12.5px] leading-[1.65] font-sans mb-4">
                          Chez Agap2, le plafond de verre n'existe pas.
                        </p>
                        <ul className="list-none space-y-4 text-white/80 text-[12.5px] leading-[1.65] font-sans">
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Passage en coach (sales) :</span> à partir de 16 consultants, je transmets mon savoir et commence à encadrer d'autres ingénieurs d’affaires.</span>
                          </li>
                          <li className="flex items-start gap-4">
                            <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                            <span><span className="text-white font-medium">Perspectives :</span> les possibilités sont nombreuses : direction de département ou d'agence, ouverture de nouvelles implantations ou mobilités.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Organic Grid Transition to bottom */}
      <div className="w-full relative grid grid-cols-[repeat(26,minmax(0,1fr))] z-10 mt-10">
         {[...Array(26)].map((_, col) => (
           <div key={`col-${col}`} className="flex flex-col justify-end">
              {[...Array(4)].map((_, rawIdx) => {
                 const row = 3 - rawIdx; // 0 is bottom, 3 is top
                 
                 // Chance of rendering a block decreases as we go up.
                 const chance = row === 0 ? 0.95 : row === 1 ? 0.6 : row === 2 ? 0.3 : 0.05;
                 
                 // Deterministic pseudorandom to prevent SSR hydration errors:
                 const pseudoRand = ((col * 17) + (row * 13)) % 100 / 100; // 0.0 to 0.99
                 
                 // Render empty aspect-square blocker
                 if (pseudoRand > chance) return <div key={row} className="aspect-square w-full" />;
                 
                 const delay = ((col * 7 + row * 11) % 50) / 10; // 0s to 4.9s
                 const duration = 3 + ((col * 3 + row * 19) % 40) / 10; // 3s to 6.9s
                 
                 return (
                   <div 
                     key={row} 
                     className="aspect-square w-full mix-blend-screen animate-organic"
                     style={{ 
                       animationDelay: `${delay}s`,
                       animationDuration: `${duration}s`
                     }} 
                   />
                 )
              })}
           </div>
         ))}
      </div>
    </section>
  );
}
