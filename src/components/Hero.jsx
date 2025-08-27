import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const SPLINE_SRC = 'https://unpkg.com/@splinetool/viewer@1.9.30/build/spline-viewer.js';
const SPLINE_URL = 'https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode';

export default function Hero() {
  const [ready, setReady] = useState(false);
  const injectedRef = useRef(false);

  useEffect(() => {
    if (injectedRef.current) return; // prevent double injection in strict mode
    injectedRef.current = true;

    if (!customElements.get('spline-viewer')) {
      const script = document.createElement('script');
      script.src = SPLINE_SRC;
      script.type = 'module';
      script.async = true;
      script.onload = () => setReady(true);
      document.head.appendChild(script);
    } else {
      setReady(true);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(168,85,247,0.25),transparent_60%)]" />

      <div className="absolute inset-0">
        {/* Fallback gradient background in case Spline isn't ready */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-0' : 'opacity-100'} bg-gradient-to-b from-[#0a0418] via-[#050510] to-black`} />
        {/* Spline background */}
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`}>
          {/* eslint-disable-next-line react/no-unknown-property */}
          <spline-viewer url={SPLINE_URL} style={{ width: '100%', height: '100%' }} eventTarget="document"></spline-viewer>
        </div>
        {/* subtle overlay to enhance contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 flex flex-col items-start">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300 drop-shadow-[0_0_20px_rgba(147,51,234,0.35)]">
            Space Travel, Reimagined
          </span>
          <span className="mt-3 block text-white/90 text-2xl sm:text-3xl font-medium">
            Affordable passages to a breathtaking cosmos.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-6 max-w-2xl text-white/75 text-lg">
          Board our next-gen cruisers and glide along neon starlanes. Transparent pricing, cinematic views, and gravity-soft hops between worlds.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-10 flex flex-wrap gap-4">
          <a
            id="book"
            href="#pricing"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 transition shadow-[0_0_30px_rgba(168,85,247,0.45)]">
            Book a Seat
          </a>
          <a
            href="#programs"
            className="px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition">
            Explore Programs
          </a>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-white/70 text-sm">
          <Stat label="Carbon-Neutral Burns" value="100%" />
          <Stat label="Average Ticket" value="$2.4k" />
          <Stat label="Safety Rating" value="A+" />
          <Stat label="Satisfied Travelers" value="12k+" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl px-4 py-3">
      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
      <div className="text-lg font-semibold text-white">{value}</div>
    </div>
  );
}
