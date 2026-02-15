import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, Activity, Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Cyber Security Intern",
        company: "Future Interns",
        period: "Nov 2025 - Present",
        description: "Conducted VAPT on web apps using Burp Suite. Built Secure File Sharing System (AES-256). Managed SOC tasks in Splunk.",
        tech: ["Burp Suite", "AES-256", "Splunk"]
    },
    {
        role: "Data Science Intern",
        company: "Shamgar Software Solutions",
        period: "Feb 2025 - May 2025",
        description: "Processed large-scale structured datasets using Pandas/NumPy. Automated reporting pipelines.",
        tech: ["Python", "Pandas", "NumPy"]
    },
    {
        role: "Cybersecurity Intern",
        company: "Cothon Solutions",
        period: "Jan 2025 - Feb 2025",
        description: "Developed automated Web Vuln Scanner using Python. Built ML-based Intrusion Detection System (IDS).",
        tech: ["Python", "ML", "IDS"]
    }
];

const MissionLogs = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end end"]
    });

    return (
        <section id="experience" className="py-32 px-6 bg-cyber-black relative" ref={containerRef}>
            <div className="max-w-7xl mx-auto mb-16 flex items-end gap-4 border-b border-gray-800 pb-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest"
                >
                    MISSION_<span className="text-electric-purple">LOGS</span>
                </motion.div>
                <div className="font-mono text-electric-purple/60 mb-2">TraceRoute</div>
            </div>

            <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <motion.div
                    style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                    className="absolute left-0 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-neon-cyan via-electric-purple to-transparent transform md:-translate-x-1/2 z-0"
                />

                {experiences.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className={`relative mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:ml-auto md:pl-12' : 'md:mr-auto md:pr-12 md:text-right'} pl-12 md:pl-0`}
                    >
                        {/* Timeline Node */}
                        <div className={`absolute top-0 w-4 h-4 bg-black border-2 border-neon-cyan rounded-full z-10 
                            ${idx % 2 === 0 ? '-left-[9px] md:left-0 md:-translate-x-1/2' : '-left-[9px] md:right-0 md:translate-x-[50%] md:left-auto'}
                            hover:scale-150 hover:bg-neon-cyan transition-transform duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)]`}
                        ></div>

                        <div className="p-6 bg-slate-900/30 border border-white/10 hover:border-neon-cyan/50 transition-colors group relative overflow-hidden backdrop-blur-sm">
                            {/* Glitch Overlay on Hover */}
                            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            <div className={`flex items-center gap-2 mb-2 font-mono text-xs text-gray-500 ${idx % 2 !== 0 && 'md:justify-end'}`}>
                                <Calendar size={12} />
                                {exp.period}
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-cyan transition-colors font-display tracking-wide">{exp.role}</h3>
                            <h4 className="text-electric-purple font-mono text-sm mb-4">@{exp.company}</h4>

                            <p className="text-gray-400 text-sm leading-relaxed mb-4 font-mono">
                                {exp.description}
                            </p>

                            <div className={`flex flex-wrap gap-2 ${idx % 2 !== 0 && 'md:justify-end'}`}>
                                {exp.tech.map((t, i) => (
                                    <span key={i} className="text-xs px-2 py-1 border border-white/10 text-gray-400 font-mono bg-black/50">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MissionLogs;
