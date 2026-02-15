import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        role: "Cyber Security Intern",
        company: "Future Interns",
        period: "Nov 2025 - Jan 2026",
        desc: "Specializing in VAPT and Secure File Sharing. Implemented AES-256 encryption for data protection."
    },
    {
        role: "Data Science Intern",
        company: "Shamgar Solutions",
        period: "Feb 2025 - May 2025",
        desc: "Built robust Data Pipelines and optimized SQL queries for large-scale data analysis."
    },
    {
        role: "Cybersecurity Intern",
        company: "Cothon Solutions",
        period: "Jan 2025 - Feb 2025",
        desc: "Deployed Web Vulnerability Scanners and configured Intrusion Detection Systems (IDS)."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l-2 border-brand-cyan/30 ml-4 md:ml-12 space-y-12">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Glowing Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-black border-2 border-brand-cyan shadow-[0_0_10px_#06b6d4] group-hover:scale-125 transition-transform"></div>

                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-brand-cyan/50 transition-all group">
                                <span className="text-brand-cyan text-sm font-mono mb-2 block">{exp.period}</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-cyan transition-colors">{exp.role}</h3>
                                <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
