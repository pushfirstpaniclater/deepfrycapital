import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 text-xs text-zinc-500 flex items-center justify-between">
        <span>© <span id="year"></span> Deepfrycapital. All grease reserved.</span>
        <a href="https://z.cash/" className="hover:text-grease">Privacy</a>
      </div>
    </footer>
  );
};

export default Footer;
