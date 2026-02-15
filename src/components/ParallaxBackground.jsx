import React, { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const stars = Array.from({ length: 200 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 1.5,
            speed: Math.random() * 0.2
        }));

        const streams = Array.from({ length: 30 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height - height,
            length: Math.random() * 100 + 50,
            speed: Math.random() * 2 + 1,
            opacity: Math.random() * 0.3 + 0.1
        }));

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Stars
            ctx.fillStyle = '#ffffff';
            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.globalAlpha = Math.random() * 0.5 + 0.3;
                ctx.fill();
                star.y += star.speed;
                if (star.y > height) star.y = 0;
            });

            // Matrix Streams
            streams.forEach(stream => {
                const gradient = ctx.createLinearGradient(stream.x, stream.y, stream.x, stream.y + stream.length);
                gradient.addColorStop(0, `rgba(0, 243, 255, 0)`);
                gradient.addColorStop(1, `rgba(0, 243, 255, ${stream.opacity})`);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(stream.x, stream.y);
                ctx.lineTo(stream.x, stream.y + stream.length);
                ctx.stroke();

                stream.y += stream.speed;
                if (stream.y > height) stream.y = -stream.length;
            });

            // Vignette
            const gradient = ctx.createRadialGradient(width / 2, height / 2, height / 2, width / 2, height / 2, width);
            gradient.addColorStop(0, 'rgba(3, 3, 3, 0)');
            gradient.addColorStop(1, 'rgba(3, 3, 3, 0.8)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, width, height);

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] bg-cyber-black pointer-events-none"
        />
    );
};

export default ParallaxBackground;
