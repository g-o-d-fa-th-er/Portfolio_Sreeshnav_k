import React, { useEffect, useRef } from 'react';

const PerspectiveGridBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let offset = 0;
        const gridSpeed = 1;
        const gridSize = 40;

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const drawGrid = () => {
            ctx.fillStyle = '#050505'; // Clear with dark background
            ctx.fillRect(0, 0, width, height);

            // Horizon Glow
            const gradient = ctx.createLinearGradient(0, height / 2 - 100, 0, height / 2 + 50);
            gradient.addColorStop(0, 'rgba(0,0,0,0)');
            gradient.addColorStop(0.5, 'rgba(139, 92, 246, 0.3)'); // Purple Horizon
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, height / 2 - 100, width, 150);

            ctx.beginPath();

            // Perspective Variables
            const fov = 300;
            const viewY = height / 2 - 50; // Horizon height

            // Draw Vertical Lines
            for (let x = -width; x < width * 2; x += gridSize) {
                // Simplified perspective simulation for vertical lines
                // Just radiating from center for "Tron" look
                // Actually, let's do a simple 3D projection loop
            }

            // Simplified "Retro Wave" Grid approach
            // Bottom half only
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, height / 2, width, height / 2);
            ctx.clip(); // Only draw in bottom half

            // Vertical Perspective Lines
            // They should converge to center at horizon
            const centerX = width / 2;
            const linkCount = 20; // Number of vertical lines

            ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)'; // Cyan
            ctx.lineWidth = 1;

            for (let i = -linkCount; i <= linkCount; i++) {
                const x = centerX + i * 100; // Base spacing at bottom
                // Line from (x, bottom) to (centerX, horizon) allows perspective
                // But specifically:
                ctx.beginPath();
                ctx.moveTo(centerX + (i * width * 1.5), height); // Spreading out at bottom
                ctx.lineTo(centerX, height / 2); // Converging at horizon
                ctx.stroke();
            }

            // Horizontal Moving Lines
            const horizonY = height / 2;
            // The distance between horizontal lines gets smaller as we approach horizon (logarithmic)
            // But to move them, we offset the "Z"

            for (let z = 0; z < 1000; z += 50) {
                // Map Z to Y
                // z is distance from camera.
                // y = horizonY + (scale / z)
                // Let's use a simpler linear approximation with offset

                const effectiveZ = (z - offset) % 500;
                if (effectiveZ < 10) continue; // Clip close/infinity

                const perspective = 200 / effectiveZ;
                const y = horizonY + perspective * 200;

                if (y > height) continue;

                const alpha = Math.min(1, effectiveZ / 200); // Fade in as it comes closer? No, fade out at horizon
                const fade = Math.max(0, 1 - (effectiveZ / 500)); // Fade out near bottom or horizon?
                // Actually fade out near horizon (small z) and near camera (large z)?

                // Better specific equation for "Floor":
                // y is screen y. 0 at horizon, height/2 at bottom.
                // y = h / z. 

                // Let's do simple linear moving lines
            }

            // Re-doing simple loop for horizontal bars
            for (let i = 0; i < 20; i++) {
                // Exponential spacing
                const yPos = (i + (offset / gridSize)) % 20;
                // Map 0-20 to Horizon-Bottom
                // Using power function for perspective
                const yProjected = height / 2 + Math.pow(yPos / 20, 3) * (height / 2);

                if (yProjected > height) continue;

                ctx.beginPath();
                ctx.moveTo(0, yProjected);
                ctx.lineTo(width, yProjected);

                // Opacity based on distance from horizon
                const alpha = Math.pow(yPos / 20, 2) * 0.5;
                ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                ctx.stroke();
            }

            ctx.restore();

            // Top Half (Mirror or Stars) - Let's do Stars
            for (let i = 0; i < 50; i++) {
                const x = (Math.sin(i * 132 + offset * 0.001) * width + width) % width;
                const y = (Math.cos(i * 453) * height / 2 + height / 2) % (height / 2);
                ctx.fillStyle = Math.random() > 0.95 ? '#fff' : 'rgba(255,255,255,0.5)';
                ctx.fillRect(x, y, 2, 2);
            }

            offset += gridSpeed;
            requestAnimationFrame(drawGrid);
        };

        const animate = () => {
            drawGrid();
        };

        init();
        animate();

        window.addEventListener('resize', init);
        return () => window.removeEventListener('resize', init);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none bg-[#050505]"
        />
    );
};

export default PerspectiveGridBackground;
