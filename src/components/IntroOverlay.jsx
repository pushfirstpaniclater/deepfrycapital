import React from 'react';

const IntroOverlay = ({ onEnter }) => {
  return (
    <div id="introOverlay" className="fixed inset-0 z-50 bg-gradient-to-b from-sky-200 to-sky-400 flex items-center justify-center p-6">
      <div className="relative w-full max-w-4xl aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-lg bg-sky-300">
        {/* sky + clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-6 left-6 w-24 h-8 bg-white/80 rounded-full blur-[2px] animate-[cloudDrift_6s_linear_infinite]"></div>
          <div className="absolute top-10 left-40 w-16 h-6 bg-white/80 rounded-full blur-[1px] animate-[cloudDrift_10s_linear_infinite]"></div>
        </div>
        {/* pavement */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-zinc-800 to-zinc-700"></div>
        {/* building / window */}
        <div className="absolute bottom-24 right-12 w-56 h-36 bg-zinc-900 rounded-md border-4 border-zinc-700 shadow-inner"></div>
        <div className="absolute bottom-[7.5rem] right-[4.5rem] w-40 h-20 bg-zinc-800 rounded-sm border border-zinc-600 flex items-center justify-center text-xs text-zinc-300">WINDOW 2</div>
        {/* speaker post */}
        <div className="absolute bottom-24 left-24 w-24 h-40">
          <div className="w-12 h-28 bg-zinc-900 rounded-md border-2 border-zinc-700 mx-auto"></div>
          <div className="w-20 h-8 bg-zinc-800 rounded mx-auto mt-2 border border-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">SPEAKER</div>
        </div>
        {/* car (idle bob) */}
        <div className="absolute bottom-20 left-1/3 w-56 h-20 animate-[carBob_2.6s_ease-in-out_infinite]">
          <div className="w-full h-12 bg-red-600 rounded-t-xl border-2 border-red-800"></div>
          <div className="w-5/6 h-6 bg-red-700 mx-auto -mt-1 rounded-b-lg border-x-2 border-red-800"></div>
          <div className="absolute -bottom-3 left-6 w-10 h-10 bg-zinc-900 rounded-full border-2 border-zinc-700"></div>
          <div className="absolute -bottom-3 right-6 w-10 h-10 bg-zinc-900 rounded-full border-2 border-zinc-700"></div>
        </div>
        {/* CTA */}
        <div className="absolute inset-x-0 bottom-4 text-center">
          <button 
            id="enterBtn" 
            onClick={onEnter}
            className="px-5 py-2 rounded-full bg-zinc-900/90 text-zinc-100 text-sm border border-white/20 shadow-glow"
          >
            PULL UP TO WINDOW 2 — TAP TO ENTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroOverlay;
