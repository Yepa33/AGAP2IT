export function RecruitSection() {
  return (
    <section id="conclusion" className="relative py-32 px-6 md:px-12 text-white min-h-screen flex items-center z-20">
      <div className="container mx-auto px-0 md:px-12 relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-x-16 gap-y-10 items-start">
        
        {/* Row 1 / Col 1: Header (Title) */}
        <div className="flex flex-col items-start lg:col-start-1 lg:row-start-1">
           <p className="font-bold text-sm tracking-widest mb-4 uppercase">
             <span className="text-accent-secondary">4. </span> <span className="text-white normal-case leading-tight">Conclusion</span>
           </p>
           <h2 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl text-accent-secondary leading-[1.1]">
             Cap sur la suite
           </h2>
        </div>

        {/* Row 2 / Col 1: Content (Subtitle + Paragraphs) */}
        <div className="flex flex-col items-start lg:col-start-1 lg:row-start-2 pt-10">
            <p className="mb-8 text-white font-bold uppercase text-lg tracking-widest border-l-4 border-accent-secondary pl-6">
              Ma compréhension de votre vision
            </p>
            <div className="text-white font-sans flex flex-col gap-6">
              <p className="text-[17px] leading-[1.7] font-medium tracking-wide opacity-95">
                À travers nos échanges, j'ai perçu une agence où l'on valorise avant tout le tempérament, l'engagement et la loyauté. Vous cherchez un partenaire de croissance capable de comprendre les enjeux techniques des consultants tout en développant une vision commerciale conquérante.
              </p>
              <p className="text-[17px] leading-[1.7] font-medium tracking-wide opacity-95">
                Je suis prêt à relever ce défi, à intégrer l’agence bordelaise et à contribuer activement à l'ouverture de nouveaux comptes pour faire développer Agap2IT dans toute la région.
              </p>
            </div>
        </div>

        {/* Row 2 / Col 2: Right Side Card Wrapper (Aligned with Content) */}
        <div className="w-full h-full rounded-[24px] bg-gradient-to-r from-[#8fb3ff] via-white/50 to-[#ffcc00] p-[1.5px] relative shadow-[0_30px_60px_rgba(0,0,0,0.25)] lg:col-start-2 lg:row-start-2 mt-12 lg:mt-0">
           <div className="w-full h-full rounded-[23px] relative overflow-hidden flex flex-col p-10">
             
             {/* Opque Base + Noise + Glass to perfectly match page background without gradient bleeding! */}
             <div className="absolute inset-0 bg-[#0e1666] z-0" />
             <div className="absolute inset-0 mix-blend-overlay opacity-60 pointer-events-none z-0">
               <svg width="100%" height="100%">
                 <filter id="card-noise"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch"/></filter>
                 <rect width="100%" height="100%" filter="url(#card-noise)"/>
               </svg>
             </div>
             <div className="absolute inset-0 bg-gradient-to-br from-[#8fb3ff]/10 to-transparent z-0" />

             
             <div className="relative z-10 h-full flex flex-col">
               <div className="mb-10">
                 <p className="mb-8 text-white font-bold uppercase text-lg tracking-widest border-l-4 border-accent-secondary pl-6">
                   Remerciements
                 </p>
                 <p className="text-white text-[17px] leading-[1.7] font-medium tracking-wide opacity-95">
                   Je vous remercie encore pour notre dernier échange. C'était un moment vraiment enrichissant qui m'a permis de confirmer mon envie de rejoindre l'aventure.
                 </p>
                 <p className="text-accent-secondary font-bold text-[14px] mt-6 uppercase tracking-widest">
                   — Maxime Musellec
                 </p>
               </div>

                <div className="flex flex-col gap-6 mt-auto">
                  <a 
                    href="https://www.linkedin.com/in/maxime-musellec/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full px-6 py-4 rounded-xl bg-[#0e1666] text-white font-bold relative inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl group"
                  >
                    <span className="absolute inset-0 rounded-xl border-[1.5px] border-transparent pointer-events-none" style={{ background: "linear-gradient(to right, #ffcc00, rgba(255,255,255,0.5), #8fb3ff) border-box", WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                    <span className="relative z-10">Consulter mon profil</span>
                    <span className="relative z-10 text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-bold group-hover:bg-white/20 transition-colors uppercase">LinkedIn</span>
                  </a>

                  <a 
                    href="/CV_Maxime_Musellec.pdf" 
                    download
                    className="w-full px-6 py-4 rounded-xl bg-[#0e1666] text-white font-bold relative inline-flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-xl group"
                  >
                    <span className="absolute inset-0 rounded-xl border-[1.5px] border-transparent pointer-events-none" style={{ background: "linear-gradient(to right, #8fb3ff, rgba(255,255,255,0.5), #ffcc00) border-box", WebkitMask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
                    <span className="relative z-10">Télécharger mon CV</span>
                    <span className="relative z-10 text-[10px] bg-white/10 px-2 py-0.5 rounded text-white font-bold group-hover:bg-white/20 transition-colors">PDF</span>
                  </a>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}
