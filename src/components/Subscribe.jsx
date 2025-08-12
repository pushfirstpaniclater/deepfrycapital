import React from 'react';

const Subscribe = () => {
  return (
    <section id="subscribe" className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border border-white/10 p-8 bg-white/5">
        <h2 className="text-2xl font-bold">Get the grease signal</h2>
        <p className="text-sm text-zinc-300 mt-1">One or two emails a week. No spam. Pure fryer heat.</p>
        <form className="mt-6 flex gap-3" action="https://formspree.io/f/your-id" method="POST">
          <input 
            required 
            type="email" 
            name="email" 
            placeholder="you@midnight.xyz" 
            className="flex-1 rounded-xl bg-zinc-900 border border-white/10 px-4 py-3 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-neon"
          />
          <button className="rounded-xl bg-grease/90 text-zinc-900 text-sm px-5 font-semibold hover:bg-grease">Join the Grease List</button>
        </form>
        <p className="mt-3 text-xs text-zinc-400">By subscribing, you agree to get emails from Deepfrycapital. <span className="opacity-60">Unsubscribe anytime.</span></p>
      </div>
    </section>
  );
};

export default Subscribe;
