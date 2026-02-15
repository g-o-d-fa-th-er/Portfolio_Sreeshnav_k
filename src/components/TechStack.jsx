import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Server, Cpu } from 'lucide-react';

const categories = [
    {
        title: "Security Tools",
        icon: <Shield size={24} className="text-accent-blue" />,
        skills: ["OWASP ZAP", "Wireshark", "Nmap", "Burp Suite"]
    },
    {
        title: "Languages",
        icon: <Code size={24} className="text-accent-purple" />,
        skills: ["Python (Advanced)", "C++", "Java", "SQL"]
    },
    {
        title: "Domains",
        icon: <Server size={24} className="text-green-500" />,
        skills: ["Threat Analysis", "VAPT", "Anomaly Detection", "IoT Security"]
    },
    {
        title: "Emerging Tech",
        icon: <Cpu size={24} className="text-orange-500" />,
        skills: ["Blockchain", "Large Language Models (LLM)"]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const TechStack = () => {
    return (
        <section id="skills" className="py-24 px-6 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Technical Proficiency
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)" }}
                            className="bg-slate-800/20 border border-slate-800 rounded-xl p-6 hover:bg-slate-800/40 transition-all group backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: idx * 0.2 }}
                                    className="p-3 bg-slate-900 rounded-lg group-hover:bg-slate-800 transition-colors"
                                >
                                    {cat.icon}
                                </motion.div>
                                <h3 className="font-semibold text-xl group-hover:text-white transition-colors">{cat.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {cat.skills.map((skill, sIdx) => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-center gap-2 group-hover:text-gray-300 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-accent-blue transition-colors"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;
