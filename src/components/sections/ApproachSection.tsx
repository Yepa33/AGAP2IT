"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function ApproachSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textContainerRef.current) return;

    const paragraphs = textContainerRef.current.querySelectorAll("p, div, ul");
    
    paragraphs.forEach((el) => {
      gsap.fromTo(
        el,
        { color: "rgba(255, 255, 255, 0.15)" },
        {
          color: "rgba(255, 255, 255, 1)",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section 
      id="entreprise" 
      ref={sectionRef}
      className="relative pb-32 pt-20 bg-bg-main text-white font-sans px-6 md:px-12 z-0"
    >
      <div className="container mx-auto px-0 md:px-12">
         
         <div className="flex flex-col gap-12">
            <div>
               <p className="font-bold text-sm tracking-widest mb-4 uppercase">
                 <span className="text-accent-secondary">1.</span> <span className="text-white">L'entreprise</span>
               </p>
               <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-accent-secondary leading-[1.1] tracking-tight max-w-5xl">
                 L'ADN d'Agap2
               </h2>
            </div>
            
            <div 
              ref={textContainerRef}
              className="pl-0 md:pl-32 flex flex-col gap-12 mt-8 text-xl md:text-3xl font-light leading-[1.4] max-w-6xl tracking-wide"
            >
               <div>
                 <p className="mb-6 text-accent-secondary font-bold uppercase text-xl md:text-2xl tracking-widest border-l-4 border-accent-secondary pl-6">
                   Un leader européen à taille humaine
                 </p>
                 <p>
                   Agap2 n’est pas qu’une simple ESN, c’est une communauté de 4 500 passionnés répartis en Europe. <br className="hidden md:block" />
                   Ce qui vous distingue ? Votre capacité à allier la force d'un grand groupe à l'agilité d'une start-up. 
                   Chez agap2IT, Vous formez une unité de 900 consultants (dont 300 en France) dédiée exclusivement 
                   aux défis technologiques de demain.
                 </p>
               </div>

               <div>
                 <p className="mb-6 text-accent-secondary font-bold uppercase text-xl md:text-2xl tracking-widest border-l-4 border-accent-secondary pl-6">
                   Le partenariat plutôt que la simple prestation
                 </p>
                 <p className="mb-8">
                   Quand vous parlez de vos consultants, vous ne parlez pas de "ressources", mais d'Agapiens.
                   Votre succès repose sur une équation simple :
                 </p>
                 
                 <ul className="list-none space-y-6 opacity-90">
                    <li className="flex items-start gap-4">
                      <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                      <span>
                        <span className="font-bold">Proximité</span> 
                        <span> : un management présent et un accompagnement réel.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                      <span>
                        <span className="font-bold">Confiance</span> 
                        <span> : des relations de long terme avec vos clients historiques.</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="text-[#ffcc00] mt-[0.6em] text-[10px] flex-shrink-0">●</span>
                      <span>
                        <span className="font-bold">Excellence</span> 
                        <span> : une exigence technique constante sur vos piliers (Cloud, Data, App, Cybersécurité et IA).</span>
                      </span>
                    </li>
                  </ul>
               </div>
            </div>
         </div>

      </div>
    </section>
  );
}
