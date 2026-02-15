import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [text, setText] = useState("INITIALIZING...");
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const textSequence = async () => {
            await new Promise(r => setTimeout(r, 1000));
            setText("ESTABLISHING SECURE UPLINK...");
            await new Promise(r => setTimeout(r, 1500));
            setText("BIOMETRIC SCAN IN PROGRESS...");
            await new Promise(r => setTimeout(r, 1500));
            setText("ACCESS GRANTED");
            await new Promise(r => setTimeout(r, 1000));
            onComplete();
        };

        const progressInterval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    return 100;
                }
                return prev + Math.random() * 5;
            });
        }, 150);

        textSequence();

        return () => clearInterval(progressInterval);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono text-neon-cyan overflow-hidden"
            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)", transition: { duration: 0.8 } }}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,243,255,0.1)_0%,rgba(0,0,0,1)_70%)]"></div>

            {/* Scan Line */}
            <div className="absolute w-full h-[2px] bg-neon-cyan top-0 animate-scan-line shadow-[0_0_20px_#00f3ff]"></div>

            <div className="relative z-10 w-full max-w-md px-6 text-center space-y-8">
                <div className="w-24 h-24 border-4 border-neon-cyan/30 border-t-neon-cyan rounded-full animate-spin mx-auto relative shadow-[0_0_30px_rgba(0,243,255,0.2)]">
                    <div className="absolute inset-2 border-4 border-signal-blue/30 border-b-signal-blue rounded-full animate-spin-reverse"></div>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-xs tracking-widest">{Math.min(100, Math.floor(progress))}%</div>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-[0.2em] animate-pulse">{text}</h2>
                    <div className="h-1 w-full bg-gray-900 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-neon-cyan shadow-[0_0_10px_#00f3ff]"
                            style={{ width: `${Math.min(100, progress)}%` }}
                        ></motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs text-gray-500 opacity-50">
                    <div className="text-right">SYS.CHECK: OK</div>
                    <div className="text-left">NET.STATUS: SECURE</div>
                    <div className="text-right">MEM.ALLOC: 64TB</div>
                    <div className="text-left">SEC.LEVEL: 5</div>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
