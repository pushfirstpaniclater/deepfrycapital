import React from 'react';

const Stream = () => {
  return (
    <section id="stream" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Command Center</h2>
        <div className="flex items-center gap-2 text-xs">
          <button id="useBirdeye" className="rounded-full border border-white/20 px-3 py-1">Birdeye</button>
          <button id="useDex" className="rounded-full border border-white/20 px-3 py-1">Dexscreener</button>
        </div>
      </div>
      <div className="grid md:grid-cols-5 gap-6 items-start mt-6">
        <div className="md:col-span-3 space-y-4">
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 shadow-glow">
            <iframe 
              id="chartFrame" 
              className="w-full h-full" 
              title="Token Chart" 
              loading="lazy"
              src="https://birdeye.so/tv-widget/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263?chain=solana&viewMode=pair&chartInterval=15&chartType=CANDLE&theme=dark"
              referrerPolicy="no-referrer" 
              frameBorder="0" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex flex-wrap gap-3">
            <a id="pumpLink" href="https://pump.fun/" target="_blank" rel="noopener" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-neon hover:text-neon">Open on Pump.fun</a>
            <a id="pumpswapLink" href="https://pump.fun/" target="_blank" rel="noopener" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-neon hover:text-neon">Trade on Pump Swap</a>
            <a id="dexscreenerLink" href="https://dexscreener.com/solana" target="_blank" rel="noopener" className="rounded-full border border-white/20 px-4 py-2 text-sm hover:border-neon hover:text-neon">View on Dexscreener</a>
          </div>
        </div>
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-2xl border border-white/10 p-4 bg-white/5">
            <div className="text-xs text-zinc-400">Shift Status</div>
            <div className="mt-1 flex items-center justify-between text-sm">
              <span className="text-zinc-300">Window</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">Pre‑Launch</span>
            </div>
            <div className="mt-3 text-xs text-zinc-400">Schedule: Mon–Fri, 9:00pm–5:00am ESTT (subject to chaos)</div>
          </div>
          <a href="#subscribe" className="inline-flex items-center gap-2 rounded-full bg-grease/90 text-zinc-900 text-sm px-4 py-2 font-semibold shadow-glow hover:bg-grease transition">Get shift alerts</a>
        </div>
      </div>
    </section>
  );
};

export default Stream;
