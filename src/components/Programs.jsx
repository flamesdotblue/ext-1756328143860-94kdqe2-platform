import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Wallet, Globe2, Star } from 'lucide-react';

const programs = [
  {
    title: 'Orbital Hop',
    desc: 'A two-orbit joyride above Earth with window-side views and microgravity playtime.',
    price: 7500,
    icon: Rocket,
    perks: ['2-3 hours total', 'Training included', 'View sunrise from space'],
  },
  {
    title: 'Lunar Flyby',
    desc: 'Swing past the Moon on a glowing neon trajectory. No landing, all awe.',
    price: 39900,
    icon: Globe2,
    perks: ['3-4 days', 'Deluxe cabin', 'Moonrise selfies'],
  },
  {
    title: 'Station Weekend',
    desc: 'Dock at a private station for a weekend in orbit with cosmic cuisine and games.',
    price: 58900,
    icon: Star,
    perks: ['2 nights in orbit', 'VR stargazing', 'Zero-G arcade'],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-28">
      <BackgroundFX />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-200 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
              Reasonably Priced Voyages
            </span>
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl">
            Pick your path along our liquid-gradient lanes. All packages include safety training, suits, snacks, and stellar vibes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <ProgramCard key={p.title} p={p} i={i} />)
          )}
        </div>

        <div id="pricing" className="mt-14 flex flex-col md:flex-row items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/80">
            <Wallet className="h-4 w-4 text-cyan-300" />
            Transparent pricing. No billionaire tax.
          </div>
          <a href="#contact" className="md:ml-auto px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-500 text-black font-semibold hover:brightness-110 transition">
            Talk to Flight Advisor
          </a>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ p, i }) {
  const Icon = p.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden"
    >
      <Glow />
      <div className="flex items-start gap-4">
        <div className="relative">
          <div className="h-12 w-12 rounded-xl bg-black/60 border border-white/10 flex items-center justify-center">
            <Icon className="h-6 w-6 text-cyan-300" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold tracking-tight">{p.title}</h3>
          <p className="mt-1 text-sm text-white/80">{p.desc}</p>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <div>
          <div className="text-3xl font-extrabold">
            <span className="bg-gradient-to-r from-cyan-200 to-fuchsia-300 bg-clip-text text-transparent">${p.price.toLocaleString()}</span>
          </div>
          <div className="text-xs uppercase tracking-wide text-white/60">per traveler</div>
        </div>
        <a href="#contact" className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">Select</a>
      </div>
      <ul className="mt-4 space-y-1.5 text-sm text-white/80">
        {p.perks.map(perk => (
          <li key={perk} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-400" />
            {perk}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function BackgroundFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}

function Glow() {
  return (
    <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-3xl opacity-0 hover:opacity-100 transition">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/10 via-fuchsia-500/10 to-violet-500/10 blur-xl" />
    </div>
  );
}
