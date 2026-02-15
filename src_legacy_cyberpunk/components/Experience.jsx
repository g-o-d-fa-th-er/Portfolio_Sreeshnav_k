import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Future Interns",
        role: "Cyber Security Intern",
        date: "Nov 2025 - Present",
        desc: "Threat simulation, risk management, and defense protocols."
    },
    {
        company: "Shamgar Solutions",
        role: "Data Science Intern",
        date: "Feb 2025 - May 2025",
        desc: "Managed structured data and ensured operational accuracy."
    },
    {
        company: "Cothon Solutions",
        role: "Cybersecurity Intern",
        date: "Jan 2025 - Feb 2025",
        desc: "Built Web Vulnerability Scanners and Intrusion Detection Systems."
    }
];

const Experience = () => {
    return (
        <section className="py-20 px-4 max-w-4xl mx-auto z-10 relative">
            <h2 className="text-3xl font-bold font-mono text-neon-cyan mb-12 text-center glitch-text" data-text="EXPERIENCE LOGS">
                EXPERIENCE LOGS
            </h2>
            <div className="relative border-l-2 border-white/10 ml-6 md:ml-12 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-neon-cyan shadow-[0_0_10px_#00e5ff]"></div>
                        <div className="glass-card p-6 rounded-lg hover:border-neon-cyan/50 transition-colors">
                            <span className="font-mono text-xs text-neon-cyan mb-1 block">{exp.date}</span>
                            <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                            <h4 className="text-gray-400 font-mono text-sm mb-3">@ {exp.company}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
