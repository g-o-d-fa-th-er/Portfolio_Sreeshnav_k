import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Database, Bug, Lock } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const projects = [
    {
        title: "Web Vuln Scanner",
        desc: "Automated scanning system with PDF reporting.",
        tech: ["Python", "Flask", "OWASP ZAP"],
        icon: <Bug size={24} />,
        links: { github: "#", demo: "#" }
    },
    {
        title: "Network Traffic Analysis",
        desc: "Detects DDoS and intrusions in real-time.",
        tech: ["ML", "Scikit-learn", "Wireshark"],
        icon: <Activity size={24} />,
        links: { github: "#", demo: "#" }
    },
    {
        title: "Phishing Simulation",
        desc: "Educational platform for conducting controlled phishing tests.",
        tech: ["Python", "SMTP"],
        icon: <Lock size={24} />,
        links: { github: "#", demo: "#" }
    },
    {
        title: "Password Cracking Toolkit",
        desc: "Educational tool for brute-force analysis.",
        tech: ["Python", "Hashlib"],
        icon: <Terminal size={24} />,
        links: { github: "#", demo: "#" }
    },
    {
        title: "IoT Vehicle Tracking",
        desc: "Real-time fleet management.",
        tech: ["GPS", "Python", "SQL"],
        icon: <Cpu size={24} />,
        links: { github: "#", demo: "#" }
    }
];

import { Activity } from 'lucide-react';

const Arsenal = () => {
    return (
        <section id="projects" className="py-32 px-6 bg-cyber-black">
            {/* Section Header */}
            <div className="max-w-7xl mx-auto mb-16 flex items-end gap-4 border-b border-gray-800 pb-4">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest"
                >
                    PROJECT_<span className="text-neon-cyan">ARSENAL</span>
                </motion.div>
                <div className="font-mono text-neon-cyan/60 mb-2">Deployments</div>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, idx) => (
                    <Tilt
                        key={idx}
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        transitionSpeed={1000}
                        scale={1.02}
                        className="h-full"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="h-full bg-slate-900/20 border border-white/10 p-8 relative group overflow-hidden flex flex-col"
                        >
                            {/* Scanning Effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-white/5 rounded-lg text-neon-cyan border border-white/10 group-hover:text-white group-hover:bg-neon-cyan transition-colors">
                                    {project.icon}
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
                                    <a href={project.links.demo} className="text-gray-400 hover:text-white transition-colors"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors font-display tracking-wider">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm font-mono mb-6 flex-grow ">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="text-xs font-mono text-electric-purple">
                                        #{t}
                                    </span>
                                ))}
                            </div>

                            {/* Hover Border Glow */}
                            <div className="absolute inset-0 border border-transparent group-hover:border-neon-cyan/30 transition-colors pointer-events-none"></div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Arsenal;
