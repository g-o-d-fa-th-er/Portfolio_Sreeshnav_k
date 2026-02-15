import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Network Traffic Analysis & IDS",
        type: "Project Alpha",
        desc: "A Machine Learning system that detects DDoS attacks and intrusions in real-time.",
        tags: ["ML", "Python", "Networking"]
    },
    {
        title: "Web Vulnerability Scanner",
        type: "Project Beta",
        desc: "Automated security reporting tool integrating Python scripts with OWASP ZAP.",
        tags: ["Security", "Automation", "OWASP"]
    },
    {
        title: "Password Cracking Toolkit",
        type: "Project Gamma",
        desc: "Educational tool for hash analysis and brute-force testing dynamics.",
        tags: ["Forensics", "Cryptography", "Python"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 max-w-7xl mx-auto z-10 relative">
            <h2 className="text-3xl font-bold font-mono text-neon-cyan mb-12 text-center glitch-text" data-text="CURRENT OPERATIONS">
                CURRENT OPERATIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <Tilt key={index} tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05} transitionSpeed={1000} className="h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="glass-card p-8 h-full rounded-xl flex flex-col justify-between group hover:shadow-[0_0_30px_rgba(0,229,255,0.1)] transition-all cursor-pointer"
                        >
                            <div>
                                <span className="text-neon-cyan font-mono text-xs tracking-wider border border-neon-cyan/30 px-2 py-1 rounded mb-4 inline-block">
                                    {project.type}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                                    {project.desc}
                                </p>
                            </div>
                            <div>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs text-gray-500 font-mono">#{tag}</span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <button className="text-white hover:text-neon-cyan transition-colors"><Github size={20} /></button>
                                    <button className="text-white hover:text-neon-cyan transition-colors"><ExternalLink size={20} /></button>
                                </div>
                            </div>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Projects;
