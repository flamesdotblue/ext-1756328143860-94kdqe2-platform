import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 justify-between">
          <div>
            <div className="text-lg font-semibold bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent">
              CosmoFare
            </div>
            <p className="mt-1 text-sm text-white/70 max-w-md">
              Licensed private spaceflight operator. Safety-first, wonder-always.
            </p>
          </div>
          <div className="text-sm text-white/80">
            <div>Email: hello@cosmofare.space</div>
            <div className="mt-1">HQ: 42 Nebula Loop, Low Earth Orbit</div>
          </div>
          <div className="flex gap-4 text-sm">
            <a className="hover:text-white/90 text-white/70" href="#programs">Programs</a>
            <a className="hover:text-white/90 text-white/70" href="#pricing">Pricing</a>
            <a className="hover:text-white/90 text-white/70" href="#hero">Top</a>
          </div>
        </div>
        <div className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} CosmoFare. All rights reserved.</div>
      </div>
    </footer>
  );
}
