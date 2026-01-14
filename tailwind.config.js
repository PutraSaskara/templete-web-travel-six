/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                background: "var(--color-background)",
                foreground: "var(--color-text)",
                "accent-black": "#1b140d",
                "background-light": "#f8f7f6",
                "background-dark": "#221910",
            },
            fontFamily: {
                display: ["Plus Jakarta Sans", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "var(--radius)",
                lg: "1rem",
                xl: "1.5rem",
                full: "9999px",
            },
        },
    },
    plugins: [],
}
