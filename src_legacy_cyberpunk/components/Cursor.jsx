import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            transition: {
                type: "spring",
                mass: 0.6
            }
        }
    }

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-neon-cyan rounded-full pointer-events-none z-50 mix-blend-difference"
            variants={variants}
            animate="default"
        >
            <div className="w-2 h-2 bg-neon-cyan rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_#00e5ff]" />
        </motion.div>
    );
};

export default Cursor;
