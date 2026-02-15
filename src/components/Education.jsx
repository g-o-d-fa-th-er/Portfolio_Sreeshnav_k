import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            title: "B.Tech (Cybersecurity)",
            place: "Dayananda Sagar University",
            year: "2022 - 2026",
            icon: <GraduationCap size={24} className="text-brand-cyan" />,
            color: "brand-cyan"
        },
        {
            title: "Higher Secondary",
            place: "Kendriya Vidyalaya",
            year: "Completed 2022",
            icon: <BookOpen size={24} className="text-brand-purple" />,
            color: "brand-purple"
        },
        {
            title: "Certifications",
            place: "CEH, Google Cybersecurity",
            year: "NPTEL Digital Forensics",
            icon: <Award size={24} className="text-green-500" />,
            color: "green-500"
        }
    ];

    return (
        <section id="education" className="py-24 px-6 bg-white/2">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Education & Certifications
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {educationData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/30 hover:-translate-y-1 transition-all"
                        >
                            <div className={`w-12 h-12 bg-${item.color}/10 rounded-full flex items-center justify-center mb-4`}>
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-gray-300 font-medium">{item.place}</p>
                            <p className="text-gray-500 text-sm mt-1">{item.year}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
