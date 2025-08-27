export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
        <p>© {new Date().getFullYear()} AstraFlux Interstellar. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Terms</a>
          <span className="text-white/30">•</span>
          <a href="#" className="hover:text-white">Privacy</a>
          <span className="text-white/30">•</span>
          <a href="mailto:crew@astraflux.space" className="hover:text-white">crew@astraflux.space</a>
        </div>
      </div>
    </footer>
  );
}
