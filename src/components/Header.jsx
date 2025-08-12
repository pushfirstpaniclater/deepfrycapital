import React from 'react';

const Header = () => {
  return (
    <header className="bg-ketchup top-0 z-40 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-xl tracking-tight font-bold inline-flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-grease animate-pulse"></span>
          Deepfrycapital
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#stream" className="hover:text-grease">Live</a>
          <a href="#gallery" className="hover:text-grease">Gallery</a>
          <a href="#contact" className="hover:text-grease">Contact</a>
        </nav>
        <a href="#subscribe" className="btn-grease">Join Grease List</a>
      </div>
    </header>
  );
};

export default Header;
