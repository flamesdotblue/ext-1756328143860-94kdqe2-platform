import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" />
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_35%,rgba(0,0,0,0.75)_60%,rgba(0,0,0,0.9)_100%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex min-h-[90vh] items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-white/70">Affordable cosmic adventures</p>
          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight">
            <span className="block bg-gradient-to-br from-cyan-200 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.25)]">
              Space Travel
            </span>
            <span className="block text-white/90">For Everyone</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-white/80 max-w-2xl">
            Experience a trippy galaxy rollercoaster through the cosmos. Neon paths, holographic gradients, and real destinations — priced for explorers, not billionaires.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#programs" className="px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 text-black font-semibold shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:brightness-110 transition">
              View Programs
            </a>
            <a href="#contact" className="px-5 py-3 rounded-full border border-white/20 text-white hover:border-white/40 hover:bg-white/5 transition">
              Get a Quote
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
            <Stat k="24k+" v="Happy Travelers" />
            <Stat k="3-7 days" v="Trip Duration" />
            <Stat k="$7,500" v="Starting Price" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3">
      <div className="text-xl font-semibold text-white">{k}</div>
      <div className="text-xs tracking-wide uppercase text-white/70">{v}</div>
    </div>
  );
}
