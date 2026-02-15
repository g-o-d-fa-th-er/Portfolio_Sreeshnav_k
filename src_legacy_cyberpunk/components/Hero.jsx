import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden z-10">
            <div className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl md:text-8xl font-bold font-mono tracking-tighter mb-4 glitch-text"
                    data-text="SREESHNAV K"
                >
                    SREESHNAV K
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl text-neon-cyan font-mono mb-8"
                >
                    Cybersecurity Analyst | Future Interns | Network Defense
                </motion.h2>

                <motion.a
                    href="#projects"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="inline-block px-8 py-3 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black font-bold transition-all duration-300 uppercase tracking-widest hover:shadow-[0_0_20px_#00e5ff]"
                >
                    Initialize System
                </motion.a>
            </div>

            <div className="absolute bottom-10 animate-bounce">
                <span className="text-neon-cyan text-2xl">↓</span>
            </div>
        </section>
    );
};

export default Hero;
