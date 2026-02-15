import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: "Security Tools",
        skills: ["OWASP ZAP", "Burp Suite", "Wireshark", "Splunk", "Nmap", "Metasploit"],
        color: "brand-cyan"
    },
    {
        title: "Programming",
        skills: ["Python (Advanced)", "C++", "SQL", "Bash Scripting", "JavaScript"],
        color: "brand-purple"
    },
    {
        title: "Domains",
        skills: ["VAPT", "Threat Analysis", "Blockchain Forensics", "Network Security", "Cryptography"],
        color: "blue-500"
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Technical Arsenal
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-all"
                        >
                            <h3 className={`text-xl font-bold mb-6 text-${cat.color === 'blue-500' ? 'blue-500' : cat.color}`}>{cat.title}</h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:text-white hover:border-white/30 hover:scale-105 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
