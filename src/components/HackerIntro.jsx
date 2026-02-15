import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HackerIntro = ({ onComplete }) => {
    const [text, setText] = useState('');
    const fullText = [
        "Initializing Sreeshnav_OS...",
        "Loading VAPT modules...",
        "Decrypting Portfolio Data...",
        "Access Granted."
    ];
    const [currentLineIndex, setCurrentLineIndex] = useState(0);

    useEffect(() => {
        if (currentLineIndex >= fullText.length) {
            setTimeout(onComplete, 800);
            return;
        }

        const currentLine = fullText[currentLineIndex];
        let charIndex = 0;

        const interval = setInterval(() => {
            setText(prev => {
                // If it's a new line, we need to handle it properly
                // But for simplicity in this typing effect, let's essentially clear and re-type chunks 
                // or just append. 
                // Better approach:
                // We show all previous lines + current typing line
                return prev;
            });

            // Actually, let's just use a simpler logic:
            // render the lines based on state
        }, 50);

        // Let's implement differently
        return () => clearInterval(interval);
    }, [currentLineIndex]);

    // Better implementation structure
    useEffect(() => {
        let timeout;

        const processLines = async () => {
            for (let i = 0; i < fullText.length; i++) {
                setCurrentLineIndex(i);
                // Simulate typing time for the line
                await new Promise(r => setTimeout(r, fullText[i].length * 30 + 300));
            }
            setTimeout(onComplete, 800);
        };

        processLines();

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="fixed inset-0 bg-black z-[99999] flex items-center justify-center font-mono text-green-500 text-lg md:text-xl overflow-hidden">
            <div className="max-w-md w-full p-6">
                {fullText.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index <= currentLineIndex ? 1 : 0 }}
                        className="mb-2"
                    >
                        <span className="mr-2">root@system:~#</span>
                        {index === currentLineIndex ? (
                            <Typewriter text={line} speed={30} />
                        ) : (
                            <span>{line}</span>
                        )}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="h-6 w-3 bg-green-500 inline-block align-middle ml-2"
                />
            </div>

            {/* Scanlines */}
            <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%]"></div>
        </div>
    );
};

const Typewriter = ({ text, speed }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.substring(0, i + 1));
            i++;
            if (i > text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return <span>{displayedText}</span>;
};

export default HackerIntro;
