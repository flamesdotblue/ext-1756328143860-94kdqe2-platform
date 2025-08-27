import { Wallet, Rocket, Planet, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'Orbital Daytrip',
    price: 899,
    icon: Rocket,
    blurb: '90-minute ascent to LEO with panoramic cupola views and aurora flyby (conditions permitting).',
    features: ['Window-side seat', 'Zero-G float session', 'Skyline photography kit', 'Reentry soft-landing tech'],
    color: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'Lunar Loop',
    price: 2499,
    icon: Planet,
    blurb: 'Two-night cruise slingshotting around the Moon. Witness the Earthrise in high definition.',
    features: ['Private berth', 'Holo-tour guide', 'Moon-orbit dinner', 'Radiation-shielded lounge'],
    color: 'from-cyan-400 to-sky-500',
  },
  {
    title: 'Asteroid Market Run',
    price: 1499,
    icon: Wallet,
    blurb: 'Trade-post hop across the belt with artisan meteorite crafts and gravity-well cafés.',
    features: ['Cargo allowance', 'Merchant access pass', 'Grav-scooter rental', 'Comet-tail parade (seasonal)'],
    color: 'from-emerald-400 to-teal-500',
  },
  {
    title: 'Starlight Sleeper',
    price: 3299,
    icon: Star,
    blurb: 'Overnight deep-sky voyage through neon starlanes with cabin stasis-comfort.',
    features: ['Private cabin', 'Nebula dining car', 'AI concierge', 'Celestial cinema dome'],
    color: 'from-amber-400 to-rose-500',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.15] bg-[radial-gradient(800px_400px_at_20%_20%,#a855f7,transparent_60%),radial-gradient(600px_300px_at_80%_50%,#22d3ee,transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Choose your trajectory</h2>
          <p className="mt-3 text-white/70">Transparent pricing, stellar service. All fares include taxes, insurance, and carbon offsets.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {programs.map((p, idx) => (
            <ProgramCard key={p.title} {...p} delay={idx * 0.05} />
          ))}
        </div>

        <div id="pricing" className="mt-14 flex flex-wrap items-center gap-4">
          <a href="#book" className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 transition shadow-[0_0_30px_rgba(168,85,247,0.35)]">Reserve your seat</a>
          <p className="text-white/60 text-sm">Flexible payment plans available. Student and educator discounts on request.</p>
        </div>
      </div>
    </section>
  );
}

function ProgramCard({ title, price, icon: Icon, blurb, features, color, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
      <div className={`absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-tr ${color}`} />
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-center gap-3">
          <div className={`h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-tr ${color} text-black/80 shadow-[0_0_30px_rgba(168,85,247,0.35)]`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-3 text-white/70 text-sm flex-1">{blurb}</p>
        <ul className="mt-4 space-y-2 text-white/80 text-sm">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
              {f}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold">${price.toLocaleString()}</div>
            <div className="text-xs text-white/60">per traveler</div>
          </div>
          <a href="#book" className="px-4 py-2 rounded-full border border-white/15 bg-white/10 hover:bg-white/20 transition">Book</a>
        </div>
      </div>
    </motion.article>
  );
}
