import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#hero" className="flex items-center gap-2">
          <span className="relative inline-flex">
            <span className="h-3 w-3 rounded-full bg-cyan-400 blur-[2px]" />
            <span className="absolute inset-0 h-3 w-3 rounded-full bg-fuchsia-500 opacity-70 mix-blend-screen animate-pulse" />
          </span>
          <span className="text-lg font-semibold tracking-wide bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
            CosmoFare
          </span>
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#programs" className="text-white/80 hover:text-white transition-colors">Programs</a>
          <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          <a href="#programs" className="px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-black font-medium hover:from-cyan-400 hover:to-fuchsia-400 transition-colors">
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
}
