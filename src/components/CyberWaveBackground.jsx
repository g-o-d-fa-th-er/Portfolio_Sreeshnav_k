import React, { useEffect, useRef } from 'react';

const CyberWaveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let increment = 0;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const drawWave = (yOffset, amplitude, length, frequency, color) => {
            ctx.beginPath();
            ctx.moveTo(0, height / 2);
            for (let i = 0; i < width; i++) {
                ctx.lineTo(i, yOffset + Math.sin(i * length + increment * frequency) * amplitude);
            }
            ctx.strokeStyle = color;
            ctx.lineWidth = 2;
            ctx.shadowBlur = 10;
            ctx.shadowColor = color;
            ctx.stroke();
            ctx.shadowBlur = 0;
        };

        const animate = () => {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; // Trail effect
            ctx.fillRect(0, 0, width, height);

            // Center Line (Horizon)
            const mid = height / 2;

            // Wave 1: Cyan (Slow, Large)
            drawWave(mid, 100, 0.005, 0.02, 'rgba(6, 182, 212, 0.3)');

            // Wave 2: Purple (Fast, Medium)
            drawWave(mid, 150, 0.01, 0.03, 'rgba(139, 92, 246, 0.3)');

            // Wave 3: White/Bright (Very Fast, Small - "Data" look)
            drawWave(mid, 50, 0.02, 0.05, 'rgba(255, 255, 255, 0.1)');

            // Vertical Pulse Lines
            if (Math.random() > 0.95) {
                const x = Math.random() * width;
                ctx.beginPath();
                ctx.moveTo(x, mid - 100);
                ctx.lineTo(x, mid + 100);
                ctx.strokeStyle = `rgba(6, 182, 212, ${Math.random() * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            increment += 1;
            requestAnimationFrame(animate);
        };

        init();
        animate();

        window.addEventListener('resize', init);
        return () => window.removeEventListener('resize', init);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default CyberWaveBackground;
