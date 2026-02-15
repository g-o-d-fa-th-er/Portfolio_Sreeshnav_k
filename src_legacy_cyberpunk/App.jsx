import React from 'react';
import Cursor from './components/Cursor';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-deep-black min-h-screen text-white relative selection:bg-neon-cyan selection:text-black">
      <Cursor />

      {/* Background Matrix/Grid Effect */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-deep-black"></div>
      </div>

      <Hero />
      <BentoGrid />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
