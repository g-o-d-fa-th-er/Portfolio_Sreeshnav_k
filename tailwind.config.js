/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "brand-black": "#050505",
                "brand-cyan": "#06b6d4",
                "brand-purple": "#8b5cf6",
                "brand-dark": "#0a0a0a",
            },
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
                sans: ['"Inter"', 'sans-serif'],
            },
            animation: {
                "spin-slow": "spin 8s linear infinite",
                "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            },
            backgroundImage: {
                'cyber-grid': "linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)",
            },
        },
    },
    plugins: [],
}
