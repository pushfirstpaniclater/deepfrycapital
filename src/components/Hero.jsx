import React from 'react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden scanlines">
      <div 
        className="pointer-events-none absolute inset-0 opacity-30" 
        style={{
          backgroundImage: "radial-gradient(1200px 600px at 50% -10%, rgba(138,255,239,.25), transparent 60%), radial-gradient(800px 400px at 10% 100%, rgba(255, 51, 85, .15), transparent 60%), radial-gradient(900px 500px at 90% 100%, rgba(255, 209, 102, .12), transparent 60%)"
        }}
      ></div>
      <div className="bg-grid bg-[size:16px_16px]">
        <div className="mx-auto max-w-6xl px-4 py-20 md:py-28 text-center">
          <div className="text-[42px] md:text-7xl font-extrabold tracking-[0.06em] neon">$MCJOB</div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#stream" className="rounded-full border border-white/20 px-5 py-2.5 text-sm hover:border-neon hover:text-neon transition">Command Center</a>
            <a href="#gallery" className="rounded-full bg-zinc-100 text-zinc-900 px-5 py-2.5 text-sm font-semibold hover:bg-white transition">Open Gallery</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
