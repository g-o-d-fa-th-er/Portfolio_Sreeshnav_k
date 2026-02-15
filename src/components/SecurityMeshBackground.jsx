import React, { useEffect, useRef } from 'react';

const SecurityMeshBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width, height;
        let nodes = [];
        let scanX = 0;
        let scanSpeed = 2; // Scanning line speed

        const init = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            nodes.length = 0;
            scanX = 0;

            const density = Math.floor((width * height) / 10000); // Node Density

            for (let i = 0; i < density; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    active: false,
                    maxOpacity: 0.9,
                    currentOpacity: 0.3,
                    radius: Math.random() * 2 + 1.5,
                    type: Math.random() > 0.8 ? 'threat' : 'secure', // 20% "threat"
                    connections: []
                });
            }
        };

        const drawNodes = () => {
            ctx.clearRect(0, 0, width, height);

            // Draw Scanner Line
            ctx.beginPath();
            ctx.moveTo(scanX, 0);
            ctx.lineTo(scanX, height);
            ctx.strokeStyle = 'rgba(6, 182, 212, 0.4)'; // Cyan Scanner
            ctx.lineWidth = 2;
            ctx.stroke();

            // Scanner Glow
            const gradient = ctx.createLinearGradient(scanX - 50, 0, scanX, 0);
            gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
            gradient.addColorStop(1, 'rgba(6, 182, 212, 0.1)');
            ctx.fillStyle = gradient;
            ctx.fillRect(scanX - 50, 0, 50, height);

            nodes.forEach(node => {
                // If scanner hits node, activate it
                if (Math.abs(scanX - node.x) < 5) {
                    node.active = true;
                    node.currentOpacity = 1;
                }

                if (node.active) {
                    node.currentOpacity -= 0.02; // Fade out
                    if (node.currentOpacity <= 0.1) {
                        node.active = false;
                        node.currentOpacity = 0.1;
                    }
                }

                // Draw Connections to nearby nodes (Mesh)
                nodes.forEach(otherNode => {
                    const dx = node.x - otherNode.x;
                    const dy = node.y - otherNode.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(node.x, node.y);
                        ctx.lineTo(otherNode.x, otherNode.y);
                        ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - distance / 100) * node.currentOpacity * 0.5})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                });

                // Draw Node
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

                // Color based on type (threat = red, secure = cyan)
                if (node.type === 'threat' && node.active) {
                    ctx.fillStyle = `rgba(239, 68, 68, ${node.currentOpacity})`; // Red/Threat
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = 'rgba(239, 68, 68, 0.8)';
                } else {
                    ctx.fillStyle = `rgba(6, 182, 212, ${node.currentOpacity})`; // Cyan/Secure
                    ctx.shadowBlur = node.active ? 10 : 0;
                    ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
                }

                ctx.fill();
                ctx.shadowBlur = 0;
            });

            // Loop Scan Scanner
            scanX += scanSpeed;
            if (scanX > width + 100) {
                scanX = 0;
            }

            requestAnimationFrame(drawNodes);
        };

        const handleResize = () => {
            init();
        };

        init();
        drawNodes();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
        />
    );
};

export default SecurityMeshBackground;
