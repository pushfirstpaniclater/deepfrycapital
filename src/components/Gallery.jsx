import React from 'react';

const Gallery = () => {
  const galleryItems = [
    { title: "Industrial grill • burgers", filename: "grill-burgers.jpg" },
    { title: "Fryer baskets • oil shimmer", filename: "fryer-baskets.jpg" },
    { title: "Heat lamps • tray line", filename: "heat-lamps.jpg" },
    { title: "Soda fountain • condensation", filename: "soda-fountain.jpg" },
    { title: "Drive‑thru headset • menu board", filename: "headset-menu.jpg" },
    { title: "Wrapping station • paper stack", filename: "wrap-station.jpg" }
  ];

  return (
    <section id="gallery" className="mx-auto max-w-6xl px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gallery</h2>
        <span className="text-xs text-zinc-400">Drop your images in later — placeholders shown</span>
      </div>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <figure key={index} className="rounded-2xl border border-white/10 overflow-hidden bg-gradient-to-b from-zinc-800 to-zinc-900">
            <div className="aspect-[16/9] flex items-center justify-center text-zinc-400">{item.title}</div>
            <figcaption className="p-4 text-xs text-zinc-400">{item.filename}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
