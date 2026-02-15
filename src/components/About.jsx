import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Zap, Shield, Terminal } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    About Me
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Education */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-brand-cyan/50 transition-all group"
                    >
                        <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <GraduationCap className="text-brand-cyan" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">B.Tech Cybersecurity</h3>
                        <p className="text-gray-400 text-sm">Dayananda Sagar University (2022-2026)</p>
                        <p className="text-brand-cyan font-mono text-sm mt-2">CGPA: 7.85</p>
                    </motion.div>

                    {/* Card 2: Pro Member */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-brand-purple/50 transition-all group"
                    >
                        <div className="w-12 h-12 bg-brand-purple/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Zap className="text-brand-purple" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Pro Member</h3>
                        <p className="text-gray-400 text-sm">Active Pro Version User. Dedicated to continuous upskilling and mastering new technologies.</p>
                    </motion.div>

                    {/* Card 3: Cyber Focus */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-blue-500/50 transition-all group"
                    >
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Shield className="text-blue-500" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Cyber Focus</h3>
                        <p className="text-gray-400 text-sm">Specializing in VAPT, Risk Management, and Embedded System Security.</p>
                    </motion.div>

                    {/* Card 4: Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 }}
                        className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-green-500/50 transition-all group"
                    >
                        <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Terminal className="text-green-500" size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Tech Stack</h3>
                        <p className="text-gray-400 text-sm mb-2">Python, Linux (CLI), Pandas, SQL</p>
                        <div className="flex gap-2">
                            <div className="h-1 flex-1 bg-green-500/30 rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-green-500"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
