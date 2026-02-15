import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "SENTINEL ZERO",
        tech: "Streamlit, Scikit-learn, Pydeck",
        desc: "Autonomous Zero-Day Defense System. achieved 98.8% detection accuracy & <0.02s latency. Features 3D Global Threat Visualization and Self-Healing Firewall Rules.",
        links: {
            github: "https://github.com/g-o-d-fa-th-er/Sentinel-Zero",
            demo: "https://sentinel-zero-xe9unpg7rvnhjy7vuv6t9g.streamlit.app/"
        },
        highlight: true
    },
    {
        title: "Web Vulnerability Scanner",
        tech: "Python, OWASP ZAP",
        desc: "Automated tool for detecting SQLi & XSS. Generates comprehensive PDF reports."
    },
    {
        title: "Network Traffic IDS",
        tech: "ML, Scikit-learn",
        desc: "Real-time Intrusion Detection System capable of identifying DDoS patterns with 94% accuracy."
    },
    {
        title: "IoT Vehicle Tracking",
        tech: "GPS, SQL, Hardware",
        desc: "Live telemetry dashboard with geofencing and historical route analysis."
    },
    {
        title: "Phishing Simulation Tool",
        tech: "Python, SMTP",
        desc: "Educational tool for organizations to test and improve employee security awareness."
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-16 text-center"
                >
                    Key Projects
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all group ${proj.highlight ? 'border-brand-cyan/70 shadow-[0_0_30px_rgba(6,182,212,0.15)] md:col-span-2' : 'hover:border-brand-cyan/50'}`}
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors flex items-center gap-2">
                                        {proj.title}
                                        {proj.highlight && <span className="text-xs px-2 py-1 rounded bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/30">FEATURED</span>}
                                    </h3>
                                    {proj.highlight && <p className="text-gray-400 text-xs mt-1">Status: Ongoing Development</p>}
                                </div>
                                <div className="flex gap-3">
                                    <a href={proj.links?.github || "#"} target="_blank" rel="noopener noreferrer">
                                        <Github className="text-gray-500 hover:text-white cursor-pointer transition-colors" size={20} />
                                    </a>
                                    <a href={proj.links?.demo || "#"} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="text-gray-500 hover:text-white cursor-pointer transition-colors" size={20} />
                                    </a>
                                </div>
                            </div>

                            <p className="text-brand-purple font-mono text-sm mb-4">{proj.tech}</p>
                            <p className="text-gray-400 leading-relaxed font-light mb-4">{proj.desc}</p>

                            {proj.highlight && (
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-white/10">
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Detection</p>
                                        <p className="text-brand-cyan font-bold">98.8%</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Latency</p>
                                        <p className="text-brand-cyan font-bold">&lt;0.02s</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Model</p>
                                        <p className="text-white text-sm">Unsupervised Ensemble</p>
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase">Defense</p>
                                        <p className="text-white text-sm">Self-Healing</p>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
