import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left z-10"
                >

                    <h2 className="text-xl font-medium text-brand-cyan mb-2">
                        Hi, I'm
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-white to-brand-purple">
                        SREESHNAV K
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-white font-medium mb-6">
                        Cybersecurity Analyst <span className="text-gray-500">|</span> <span className="text-brand-purple">VAPT Specialist</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-lg mb-8">
                        Motivated and detail-oriented Security Researcher with hands-on experience in <span className="text-white">Vulnerability Assessment</span> and <span className="text-white">Penetration Testing</span>. Dedicated to securing digital infrastructures through proactive threat hunting and automated security tooling.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <a href="#projects" className="px-8 py-3 bg-brand-cyan text-black font-bold rounded-lg hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all">
                            Explore Projects
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-white/5 border border-white/10 text-white font-medium rounded-lg hover:bg-white/10 transition-all backdrop-blur-md">
                            Contact Me
                        </a>
                    </div>
                </motion.div>

                {/* Right: Floating Profile */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center items-center z-10"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-[80px] animate-pulse"></div>

                        {/* Profile Image Wrapper for Cropping & Border */}
                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_100px_rgba(6,182,212,0.4)] z-0">
                            <img
                                src="/profile_v2.jpg (2).jpeg"
                                alt="Sreeshnav K"
                                className="w-full h-full object-cover object-[50%_20%] scale-110 brightness-110 contrast-115 hover:scale-115 transition-transform duration-700 rendering-pixelated"
                                style={{ imageRendering: 'high-quality' }}
                            />
                        </div>

                        {/* Floating Glass Pills */}
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 px-4 py-2 bg-brand-black/80 backdrop-blur-md border border-white/10 rounded-full text-sm font-bold shadow-lg text-white"
                        >
                            🛡️ VAPT
                        </motion.div>
                        <motion.div
                            animate={{ y: [10, -10, 10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 -left-12 px-4 py-2 bg-brand-black/80 backdrop-blur-md border border-white/10 rounded-full text-sm font-bold shadow-lg text-white"
                        >
                            🐍 Python Dev
                        </motion.div>
                        <motion.div
                            animate={{ y: [-5, 5, -5] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-8 right-10 px-4 py-2 bg-brand-black/80 backdrop-blur-md border border-white/10 rounded-full text-sm font-bold shadow-lg text-white"
                        >
                            🔓 Ethical Hacker
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
