import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
    "Certified Ethical Hacker (CEH)",
    "Google Cybersecurity Certificate",
    "NPTEL Digital Forensics",
    "AWS Workshop"
];

const Certifications = () => {
    return (
        <section className="py-12 bg-black border-y border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-electric-purple/5 pointer-events-none"></div>

            <div className="flex w-full">
                <motion.div
                    className="flex gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...certs, ...certs, ...certs, ...certs].map((cert, idx) => (
                        <div key={idx} className="flex items-center gap-4 text-gray-400 font-mono text-lg uppercase tracking-wider">
                            <Award className="text-electric-purple" size={20} />
                            <span>{cert}</span>
                            <span className="text-neon-cyan">///</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
