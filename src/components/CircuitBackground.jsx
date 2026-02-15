import React, { useEffect, useRef } from 'react';

const CircuitBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;

        // Configuration
        const lines = [];
        const maxLines = 50;
        const colors = ['#06b6d4', '#8b5cf6', '#ffffff']; // Cyan, Purple, White

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            lines.length = 0;
        };

        class CircuitLine {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = Math.random() > 0.5 ? 2 : -2; // Move horizontally first
                this.vy = 0;
                this.history = [];
                this.maxLength = Math.random() * 100 + 50;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.width = Math.random() * 2 + 1;
                this.life = 0;
                this.maxLife = Math.random() * 200 + 100;
                this.changingDirection = false;
            }

            update() {
                this.life++;
                if (this.life > this.maxLife ||
                    this.x < 0 || this.x > width ||
                    this.y < 0 || this.y > height) {
                    this.reset();
                }

                this.history.push({ x: this.x, y: this.y });
                if (this.history.length > this.maxLength) {
                    this.history.shift();
                }

                this.x += this.vx;
                this.y += this.vy;

                // Randomly turn 90 degrees
                if (Math.random() < 0.02 && !this.changingDirection) {
                    if (this.vx !== 0) {
                        this.vx = 0;
                        this.vy = Math.random() > 0.5 ? 2 : -2;
                    } else {
                        this.vy = 0;
                        this.vx = Math.random() > 0.5 ? 2 : -2;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.lineWidth = this.width;
                ctx.lineCap = 'round';

                // Draw lead head (glow)
                ctx.shadowBlur = 10;
                ctx.shadowColor = this.color;

                if (this.history.length > 0) {
                    ctx.moveTo(this.history[0].x, this.history[0].y);
                    for (let i = 1; i < this.history.length; i++) {
                        ctx.lineTo(this.history[i].x, this.history[i].y);
                    }
                    ctx.lineTo(this.x, this.y);
                }

                ctx.stroke();
                ctx.shadowBlur = 0; // Reset shadow for performance
            }
        }

        const animate = () => {
            // Fade effect for trails
            ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
            ctx.fillRect(0, 0, width, height);

            if (lines.length < maxLines) {
                lines.push(new CircuitLine());
            }

            lines.forEach(line => {
                line.update();
                line.draw();
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
            className="fixed inset-0 z-0 opacity-40 pointer-events-none"
        />
    );
};

export default CircuitBackground;
