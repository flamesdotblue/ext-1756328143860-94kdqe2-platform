import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <Navbar />
      <main>
        <Hero />
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
