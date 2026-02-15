import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Cpu, Cloud, Lock, Hash } from 'lucide-react';

const icons = [
    { name: "Python", icon: <Terminal size={20} /> },
    { name: "OWASP", icon: <Shield size={20} /> },
    { name: "Hacking", icon: <HackIcon /> },
    { name: "Blockchain", icon: <Hash size={20} /> },
    { name: "AWS", icon: <Cloud size={20} /> },
    { name: "Linux", icon: <Cpu size={20} /> }
];

function HackIcon() {
    return <span className="font-mono font-bold text-sm">h4ck</span>;
}

const BentoGrid = () => {
    return (
        <section className="py-20 px-4 md:px-20 max-w-7xl mx-auto z-10 relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

                {/* About Box - Large */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 md:col-span-2 glass-card p-6 flex flex-col justify-center border-l-4 border-l-neon-cyan"
                >
                    <h3 className="text-2xl font-bold font-mono mb-2 text-white">About Me</h3>
                    <p className="text-gray-400 leading-relaxed">
                        Final-Year B.Tech specializing in Vulnerability Assessment and Penetration Testing (VAPT) and Blockchain Security.
                        Currently securing systems at <span className="text-neon-cyan">Future Interns</span>, bringing academic rigor to real-world threat simulation.
                    </p>
                </motion.div>

                {/* Status Box - Small */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="glass-card p-6 flex flex-col items-center justify-center relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-neon-cyan opacity-5 group-hover:opacity-10 transition-opacity"></div>
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse-slow mb-4 shadow-[0_0_10px_#22c55e]"></div>
                    <h4 className="text-xl font-bold font-mono">Status</h4>
                    <p className="text-green-400 mt-2 font-mono text-sm text-center">Online & Open to Work</p>
                </motion.div>

                {/* Skills Matrix - Tall/Wide */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="col-span-1 md:col-span-3 glass-card p-6"
                >
                    <h3 className="text-xl font-bold font-mono mb-6 text-neon-cyan flex items-center gap-2">
                        <Cpu className="text-neon-cyan" /> Skills Matrix
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                        {icons.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5 hover:border-neon-cyan/50 cursor-pointer group">
                                <div className="text-gray-300 group-hover:text-neon-cyan mb-2 transition-colors">
                                    {item.icon}
                                </div>
                                <span className="text-xs font-mono text-gray-400 group-hover:text-white">{item.name}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BentoGrid;
