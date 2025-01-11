import { useRef, useEffect } from "react";

export default function ParticlesCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Resize canvas
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Particle variables
        const particles = [];
        const particleCount = 100;
        const particleSize = 3;
        const spacing = particleSize * 12;
        const gravity = { x: 0, y: 2.2 };
        const deltaTime = 1 / 60;

        class Particle {
            constructor(x, y) {
                this.pos = { x, y };
                this.vel = { x: Math.random() * 40 - 20, y: Math.random() * 40 - 20 };
                this.size = particleSize;
                this.color = "rgba(23, 29, 27, 0.5)";
                this.boxShadow = "0 0 50px rgb(29, 29, 27)";
            }
            update() {
                this.pos.x += this.vel.x * deltaTime;
                this.pos.y += this.vel.y * deltaTime + gravity.y * deltaTime;
                if (this.pos.y > canvas.height) this.pos.y = -10; // Reset position when falling out
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            for (let i = 0; i < particleCount; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                particles.push(new Particle(x, y));
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animate);
        };

        initParticles();
        animate();

        // Cleanup on unmount
        return () => window.removeEventListener("resize", resizeCanvas);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>;
}
