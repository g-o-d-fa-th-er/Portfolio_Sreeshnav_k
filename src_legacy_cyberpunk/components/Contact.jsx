import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="py-20 px-4 border-t border-white/10 bg-black/50 z-10 relative">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-mono text-white mb-8 glitch-text" data-text="ESTABLISH CONNECTION">
                    ESTABLISH CONNECTION
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="glass-card p-6 rounded-lg text-left">
                        <h3 className="text-neon-cyan font-bold mb-4 font-mono">CONTACT INFO</h3>
                        <div className="space-y-4">
                            <a href="mailto:sreeshnav.k.kurup@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors">
                                <Mail size={18} /> sreeshnav.k.kurup@gmail.com
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Phone size={18} /> +91 6363690473
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin size={18} /> Bengaluru, India
                            </div>
                            <a href="https://linkedin.com/in/sreeshnav-k-7794a0325" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-neon-cyan transition-colors">
                                <Linkedin size={18} /> LinkedIn Profile
                            </a>
                        </div>
                    </div>

                    <form className="glass-card p-6 rounded-lg text-left space-y-4">
                        <h3 className="text-neon-cyan font-bold mb-4 font-mono">SEND TRANSMISSION</h3>
                        <input type="text" placeholder="Identity" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                        <input type="email" placeholder="Return Address" className="w-full bg-white/5 border border-white/10 p-3 rounded text-white focus:border-neon-cyan focus:outline-none transition-colors" />
                        <button className="w-full bg-neon-cyan/10 border border-neon-cyan text-neon-cyan p-3 rounded font-bold hover:bg-neon-cyan hover:text-black transition-all flex items-center justify-center gap-2">
                            <Send size={18} /> INITIALIZE
                        </button>
                    </form>
                </div>

                <p className="text-gray-600 font-mono text-sm">
                    © 2025 Sreeshnav K. System Online.
                </p>
            </div>
        </footer>
    );
};

export default Contact;
