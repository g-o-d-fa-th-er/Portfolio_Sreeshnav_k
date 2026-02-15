import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, Cpu, Radio, Hash, Lock, Terminal } from 'lucide-react';

const categories = [
    {
        id: "SEC-01",
        title: "SECURITY_PROTOCOLS",
        icon: <Shield size={20} />,
        color: "text-neon-cyan",
        border: "border-neon-cyan/50",
        skills: ["OWASP ZAP", "Wireshark", "Nmap", "Burp Suite", "Splunk"]
    },
    {
        id: "DEV-02",
        title: "LANGUAGE_CORE",
        icon: <Code size={20} />,
        color: "text-electric-purple",
        border: "border-electric-purple/50",
        skills: ["Python (Advanced)", "C++", "Java", "SQL"]
    },
    {
        id: "OPS-03",
        title: "OPERATION_DOMAINS",
        icon: <Server size={20} />,
        color: "text-accent-blue",
        border: "border-accent-blue/50",
        skills: ["Threat Analysis", "VAPT", "Digital Forensics", "IoT Security"]
    },
    {
        id: "FUT-04",
        title: "NEXT_GEN_TECH",
        icon: <Cpu size={20} />,
        color: "text-green-400",
        border: "border-green-400/50",
        skills: ["Blockchain Security", "LLM Integration", "Smart Contracts"]
    }
];

const SystemSpecs = () => {
    return (
        <section id="skills" className="py-32 px-6 relative bg-cyber-black">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16 flex items-end gap-4 border-b border-gray-800 pb-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest"
                >
                    SYSTEM_<span className="text-neon-cyan">SPECS</span>
                </motion.div>
                <div className="font-mono text-neon-cyan/60 mb-2">v2.0.26</div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className={`bg-slate-900/40 border ${cat.border} p-6 relative group overflow-hidden`}
                    >
                        {/* Holographic BG */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                        <div className={`absolute top-0 right-0 p-2 font-mono text-xs ${cat.color} opacity-50`}>[{cat.id}]</div>

                        <div className="flex items-center gap-4 mb-8">
                            <div className={`p-3 bg-black/50 border border-white/10 ${cat.color} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                {cat.icon}
                            </div>
                            <h3 className={`font-mono text-xl tracking-wider ${cat.color}`}>{cat.title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill, sIdx) => (
                                <motion.div
                                    key={skill}
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="px-4 py-2 bg-black/40 border border-white/10 text-gray-300 font-mono text-sm relative overflow-hidden group/tag cursor-crosshair"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        <span className={`w-1.5 h-1.5 ${cat.color} bg-current rounded-none`}></span>
                                        {skill}
                                    </span>
                                    {/* Scanline on hover */}
                                    <div className={`absolute inset-0 bg-${cat.color.split('-')[1]} opacity-0 group-hover/tag:opacity-10 transition-opacity`}></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Corner Accents */}
                        <div className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${cat.border}`}></div>
                    </motion.div>
                ))}
            </div>

            {/* Spinning Radar Decoration */}
            <div className="hidden lg:block absolute right-10 bottom-10 opacity-20 pointer-events-none">
                <div className="relative w-64 h-64 border border-neon-cyan/30 rounded-full flex items-center justify-center">
                    <div className="absolute w-full h-0.5 bg-neon-cyan/50 top-1/2 left-0 animate-[spin_4s_linear_infinite]"></div>
                    <div className="w-48 h-48 border border-electric-purple/30 rounded-full"></div>
                    <div className="w-32 h-32 border border-neon-cyan/30 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default SystemSpecs;
