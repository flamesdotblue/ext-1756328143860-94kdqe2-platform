import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2 group">
          <span className="relative">
            <span className="absolute inset-0 blur-md bg-gradient-to-tr from-fuchsia-500 via-sky-400 to-violet-500 opacity-60 group-hover:opacity-90 transition" />
            <Rocket className="relative h-6 w-6 text-transparent bg-clip-text bg-gradient-to-tr from-fuchsia-400 via-sky-300 to-violet-300 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
          </span>
          <span className="text-lg font-semibold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-cyan-200 to-violet-300">AstraFlux</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#programs" className="hover:text-white transition">Programs</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#book" className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-fuchsia-600 to-violet-600 hover:from-fuchsia-500 hover:to-violet-500 transition shadow-[0_0_24px_rgba(168,85,247,0.35)]">Book Now</a>
        </nav>
        <button className="md:hidden px-3 py-1.5 rounded-md border border-white/15 text-white/80 hover:text-white">Menu</button>
      </div>
    </header>
  );
}
