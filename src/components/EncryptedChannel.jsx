import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Terminal } from 'lucide-react';

const EncryptedChannel = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Transmission sent:", formState);
    };

    return (
        <section id="contact" className="py-32 px-6 bg-cyber-black relative overflow-hidden">
            {/* Section Header */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block"
                >
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest mb-4">
                        ENCRYPTED_<span className="text-neon-cyan">CHANNEL</span>
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-electric-purple to-transparent"></div>
                    <p className="font-mono text-gray-400 mt-4">Initialize secure handshake for collaboration.</p>
                </motion.div>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="p-6 border border-white/10 bg-slate-900/30 backdrop-blur-sm relative group">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-neon-cyan group-hover:h-full transition-all duration-300"></div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-neon-cyan mt-1" />
                            <div>
                                <h3 className="font-display text-lg text-white mb-1">FREQUENCY</h3>
                                <a href="mailto:sreeshnav.k.kurup@gmail.com" className="font-mono text-gray-400 hover:text-white transition-colors break-all">sreeshnav.k.kurup@gmail.com</a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-white/10 bg-slate-900/30 backdrop-blur-sm relative group">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-electric-purple group-hover:h-full transition-all duration-300"></div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-electric-purple mt-1" />
                            <div>
                                <h3 className="font-display text-lg text-white mb-1">SIGNAL</h3>
                                <a href="tel:+916363690473" className="font-mono text-gray-400 hover:text-white transition-colors">+91 6363690473</a>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 border border-white/10 bg-slate-900/30 backdrop-blur-sm relative group">
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1 h-12 bg-white group-hover:h-full transition-all duration-300"></div>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-white mt-1" />
                            <div>
                                <h3 className="font-display text-lg text-white mb-1">BASE_STATION</h3>
                                <p className="font-mono text-gray-400">Bengaluru, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Terminal Form */}
                <div className="bg-black border border-white/20 p-2 rounded shadow-2xl">
                    <div className="flex items-center gap-2 px-2 py-1 bg-white/5 border-b border-white/10 mb-2">
                        <Terminal size={12} className="text-gray-500" />
                        <span className="text-xs font-mono text-gray-500">user@admin:~/send-message</span>
                    </div>

                    <form onSubmit={handleSubmit} className="p-4 space-y-4 font-mono text-sm">
                        <div className="space-y-1">
                            <label className="text-neon-cyan block">$ identify_identity <span className="animate-pulse">_</span></label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-none focus:ring-0 text-white p-0 placeholder-gray-800"
                                placeholder="Enter Name"
                                value={formState.name}
                                onChange={e => setFormState({ ...formState, name: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-electric-purple block">$ target_frequency</label>
                            <input
                                type="email"
                                className="w-full bg-transparent border-none focus:ring-0 text-white p-0 placeholder-gray-800"
                                placeholder="Enter Email"
                                value={formState.email}
                                onChange={e => setFormState({ ...formState, email: e.target.value })}
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-green-500 block">$ upload_transmission</label>
                            <textarea
                                rows="4"
                                className="w-full bg-transparent border-none focus:ring-0 text-white p-0 resize-none placeholder-gray-800"
                                placeholder="Write message..."
                                value={formState.message}
                                onChange={e => setFormState({ ...formState, message: e.target.value })}
                            ></textarea>
                        </div>

                        <button className="mt-4 px-6 py-2 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-black transition-colors w-full uppercase tracking-widest font-bold">
                            // EXECUTE_SEND
                        </button>
                    </form>
                </div>
            </div>

            <footer className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center text-gray-600 font-mono text-xs">
                <div>SYSTEM STATUS: NORMAL // © 2026 SREESHNAV K.</div>
                <div className="mt-2">BUILT_ON: REACT // TAILWIND // FRAMER_MOTION</div>
            </footer>
        </section>
    );
};

export default EncryptedChannel;
