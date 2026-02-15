import React from 'react';
import { motion } from 'framer-motion';

import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

import PerspectiveGridBackground from './components/PerspectiveGridBackground';

function App() {
    return (
        <div className="bg-cyber-black min-h-screen text-white font-sans selection:bg-brand-cyan/30 selection:text-white overflow-x-hidden relative">

            {/* Perspective Grid Background */}
            <PerspectiveGridBackground />



            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-cyber-black/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-brand-cyan to-brand-purple bg-clip-text text-transparent">
                        SREESHNAV K.
                    </div>
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
                        <a href="#hero" className="hover:text-brand-cyan transition-colors">Home</a>
                        <a href="#about" className="hover:text-brand-cyan transition-colors">About</a>
                        <a href="#skills" className="hover:text-brand-cyan transition-colors">Skills</a>
                        <a href="#experience" className="hover:text-brand-cyan transition-colors">Experience</a>
                        <a href="#projects" className="hover:text-brand-cyan transition-colors">Projects</a>
                        <a href="#contact" className="hover:text-brand-cyan transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            <main className="relative z-10">
                <Hero />
                <About />
                <Skills />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </main>

            <ChatWidget />

            <footer className="relative z-10 py-8 text-center text-gray-600 text-xs border-t border-white/5 bg-cyber-black">
                <p>© 2026 Sreeshnav K. Security Clearance: LEVEL 5.</p>
            </footer>
        </div>
    );
}

export default App;
