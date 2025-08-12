import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-sm text-zinc-400">X / Twitter</div>
          <a id="xHandle" href="#" className="mt-1 block font-semibold hover:text-grease">@deepfrycapital</a>
          <p className="mt-2 text-xs text-zinc-400">Shitposts, schedules, and alerts.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-sm text-zinc-400">Pump.fun</div>
          <a id="pumpDash" href="#" className="mt-1 block font-semibold hover:text-grease">Token / Dashboard</a>
          <p className="mt-2 text-xs text-zinc-400">Live marketcaps, LP links, and warnings.</p>
        </div>
        <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
          <div className="text-sm text-zinc-400">Email</div>
          <a href="mailto:grease@deepfry.capital" className="mt-1 block font-semibold hover:text-grease">grease@deepfry.capital</a>
          <p className="mt-2 text-xs text-zinc-400">Business, collabs, or fryer confessions.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
