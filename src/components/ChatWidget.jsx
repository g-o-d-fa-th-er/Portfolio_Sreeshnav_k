import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'bot', content: "Hello. I am Sreeshnav's Virtual Assistant. Ask me about his experience, projects, or skills." }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input.trim();
        setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
        setInput('');

        setTimeout(() => {
            const response = generateResponse(userMsg);
            setMessages(prev => [...prev, { role: 'bot', content: response }]);
        }, 600);
    };

    const generateResponse = (input) => {
        const lowerInput = input.toLowerCase();

        if (lowerInput.includes('project') || lowerInput.includes('work')) {
            return "Sreeshnav has built a Web Vulnerability Scanner (Python), a Network Traffic IDS (ML/Wireshark), and an IoT Vehicle Tracking system.";
        }
        if (lowerInput.includes('skill') || lowerInput.includes('stack') || lowerInput.includes('tech')) {
            return "Core Skills: VAPT, Threat Analysis, Python, Linux (Kali), Splunk, and Blockchain Forensics.";
        }
        if (lowerInput.includes('contact') || lowerInput.includes('email') || lowerInput.includes('hire')) {
            return "You can contact him at sreeshnav.k.kurup@gmail.com or +91 6363690473.";
        }
        if (lowerInput.includes('experience') || lowerInput.includes('intern')) {
            return "He is currently a Cyber Security Intern at Future Interns. Previously, he worked at Shamgar Solutions (Data Science) and Cothon Solutions.";
        }
        return "I am Sreeshnav's Virtual Assistant. Ask me about his Projects, Skills, or Experience.";
    };

    return (
        <>
            {/* Security Bot Character */}
            <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="fixed bottom-6 right-6 z-50 cursor-pointer group"
                onClick={() => setIsOpen(!isOpen)}
            >
                {/* Tooltip */}
                <motion.div
                    initial={{ opacity: 0, x: -20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="absolute bottom-full right-0 mb-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-brand-cyan/30 rounded-xl rounded-br-none whitespace-nowrap"
                >
                    <p className="text-sm font-bold text-brand-cyan">Hi! I'm Sreeshnav's Bot 🤖</p>
                </motion.div>

                {/* Bot Body */}
                <div className="relative w-16 h-20">
                    {/* Head */}
                    <div className="absolute top-0 w-16 h-12 bg-gradient-to-b from-brand-cyan to-blue-600 rounded-2xl border-2 border-white/20 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex justify-center items-center overflow-hidden">
                        {/* Face Screen */}
                        <div className="w-12 h-8 bg-black/80 rounded-lg flex gap-2 justify-center items-center relative overflow-hidden">
                            {/* Eyes (Blinking) */}
                            <motion.div
                                animate={{ height: [8, 2, 8] }}
                                transition={{ duration: 3, repeat: Infinity, times: [0, 0.05, 0.1] }}
                                className="w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#06b6d4]"
                            ></motion.div>
                            <motion.div
                                animate={{ height: [8, 2, 8] }}
                                transition={{ duration: 3, repeat: Infinity, times: [0, 0.05, 0.1] }}
                                className="w-3 h-3 bg-brand-cyan rounded-full shadow-[0_0_10px_#06b6d4]"
                            ></motion.div>
                            {/* Scanning Line */}
                            <div className="absolute top-0 w-full h-[2px] bg-white/20 animate-scan"></div>
                        </div>
                        {/* Antenna */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400"></div>
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Torso */}
                    <div className="absolute bottom-0 w-12 h-8 left-2 bg-gray-800 rounded-b-xl border border-white/10 flex justify-center items-center">
                        <div className="w-6 h-4 bg-brand-cyan/20 rounded border border-brand-cyan/50 animate-pulse"></div>
                    </div>

                    {/* Floating Hands */}
                    <motion.div
                        animate={{ y: [-2, 2, -2] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute top-14 -left-2 w-3 h-6 bg-gray-700 rounded-full border border-white/10"
                    ></motion.div>
                    <motion.div
                        animate={{ y: [2, -2, 2] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute top-14 -right-2 w-3 h-6 bg-gray-700 rounded-full border border-white/10"
                    ></motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed bottom-24 right-6 z-50 w-[350px] md:w-[380px] h-[500px] bg-[#111] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        <div className="p-4 bg-white/5 border-b border-white/10 flex justify-between items-center">
                            <span className="font-medium text-white">Ask AI</span>
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>

                        <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-black">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-tr-sm'
                                        : 'bg-white/10 text-gray-200 rounded-tl-sm'
                                        }`}>
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#111]">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask anything..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-white focus:outline-none focus:border-brand-cyan/50 focus:ring-1 focus:ring-brand-cyan/20 transition-all text-sm"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-2 p-1.5 text-brand-cyan hover:bg-white/10 rounded-full transition-colors"
                                    disabled={!input.trim()}
                                >
                                    <Send size={18} />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatWidget;
