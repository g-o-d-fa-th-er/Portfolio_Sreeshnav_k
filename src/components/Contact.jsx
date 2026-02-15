import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left: Profile & Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                    <div className="relative w-48 h-48 mb-6">
                        <div className="absolute inset-0 bg-brand-cyan/20 rounded-full blur-[40px] animate-pulse"></div>
                        <img
                            src="/profile_v2.jpg (2).jpeg"
                            alt="Sreeshnav K"
                            className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                        />
                    </div>

                    <h2 className="text-4xl font-bold mb-4">Sreeshnav K</h2>
                    <p className="text-gray-400 mb-8 max-w-sm">
                        Open for Internships and Freelance Security Projects.
                        Let's secure your digital presence.
                    </p>

                    <div className="space-y-4 w-full max-w-sm">
                        {/* Email Card */}
                        <a href="mailto:sreeshnav.k.kurup@gmail.com" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                            <div className="p-3 bg-brand-cyan/10 rounded-lg group-hover:scale-110 transition-transform">
                                <Mail className="text-brand-cyan" size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                                <p className="text-white text-sm">sreeshnav.k.kurup@gmail.com</p>
                            </div>
                        </a>

                        {/* Phone Card */}
                        <a href="tel:+916363690473" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group">
                            <div className="p-3 bg-brand-purple/10 rounded-lg group-hover:scale-110 transition-transform">
                                <Phone className="text-brand-purple" size={20} />
                            </div>
                            <div className="text-left">
                                <p className="text-xs text-gray-500 uppercase font-bold">Phone</p>
                                <p className="text-white text-sm">+91 6363690473</p>
                            </div>
                        </a>

                        {/* Social Row */}
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all flex justify-center items-center gap-2">
                                <Linkedin size={20} /> LinkedIn
                            </a>
                            <a href="#" className="flex-1 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-[#333] hover:text-white text-gray-400 transition-all flex justify-center items-center gap-2">
                                <Github size={20} /> GitHub
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8"
                >
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="Name" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                            <input type="email" placeholder="Email" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors" />
                        <textarea rows="4" placeholder="Your Message..." className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan transition-colors"></textarea>

                        <button className="w-full py-4 bg-gradient-to-r from-brand-cyan to-brand-purple rounded-xl font-bold text-white shadow-lg shadow-brand-cyan/25 hover:shadow-brand-cyan/40 hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
