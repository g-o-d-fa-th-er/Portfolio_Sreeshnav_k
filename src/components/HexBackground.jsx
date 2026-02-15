import React, { useEffect, useRef } from 'react';

const HexBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        const hexSize = 40;
        const hexes = [];

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            hexes.length = 0;

            // Calculate rows and cols
            const rows = Math.ceil(height / (hexSize * 1.5));
            const cols = Math.ceil(width / (hexSize * Math.sqrt(3)));

            for (let r = 0; r <= rows; r++) {
                for (let c = 0; c <= cols; c++) {
                    const xOffset = r % 2 === 0 ? 0 : (hexSize * Math.sqrt(3)) / 2;
                    const x = c * (hexSize * Math.sqrt(3)) + xOffset;
                    const y = r * (hexSize * 1.5);

                    hexes.push({
                        x, y,
                        active: false,
                        life: 0,
                        maxLife: 0,
                        color: Math.random() > 0.5 ? '#06b6d4' : '#8b5cf6' // Cyan or Purple
                    });
                }
            }
        };

        const drawHex = (x, y, color, opacity) => {
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i;
                const hx = x + hexSize * Math.cos(angle);
                const hy = y + hexSize * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();

            // Stroke (Always visible but faint)
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Fill (Only if active)
            if (opacity > 0) {
                ctx.fillStyle = `rgba(${color === '#06b6d4' ? '6, 182, 212' : '139, 92, 246'}, ${opacity})`;
                ctx.fill();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Randomly activate hexes
            if (Math.random() > 0.9) {
                const index = Math.floor(Math.random() * hexes.length);
                if (!hexes[index].active) {
                    hexes[index].active = true;
                    hexes[index].life = 0;
                    hexes[index].maxLife = Math.random() * 50 + 30; // 30-80 frames
                }
            }

            hexes.forEach(hex => {
                let opacity = 0;

                if (hex.active) {
                    hex.life++;
                    // Fade in and out
                    if (hex.life < hex.maxLife / 2) {
                        opacity = (hex.life / (hex.maxLife / 2)) * 0.3; // Max opacity 0.3
                    } else {
                        opacity = 0.3 - ((hex.life - hex.maxLife / 2) / (hex.maxLife / 2)) * 0.3;
                    }

                    if (hex.life >= hex.maxLife) {
                        hex.active = false;
                    }
                }

                drawHex(hex.x, hex.y, hex.color, opacity);
            });

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

export default HexBackground;
