/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
    theme: {
        extend: {
            fontSize: {
                xs: ["0.75rem", { lineHeight: "1.25", letterSpacing: "0.02em", fontWeight: "400" }],
                sm: ["0.875rem", { lineHeight: "1.35", letterSpacing: "0.015em", fontWeight: "400" }],
                base: ["1rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400" }],
                lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.005em", fontWeight: "500" }],
                xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "0em", fontWeight: "600" }],
                "2xl": ["1.5rem", { lineHeight: "1.4", letterSpacing: "-0.005em", fontWeight: "700" }],
                "3xl": ["1.875rem", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "700" }],
                "4xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "800" }],
                "5xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "800" }],
                "6xl": ["3.75rem", { lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "900" }],
                "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "900" }],
                "8xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "900" }],
                "9xl": ["8rem", { lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "900" }],
            },
            fontFamily: {
                heading: ["helvetica-w01-bold"],
                paragraph: ["helvetica-w01-roman"],
                "noticia-text": ["noticia text", "serif"],
                montserrat: ["montserrat", "sans-serif"],
                "eb-garamond": ["eb garamond", "serif"]
            },
            colors: {
                darkbackground: "#000000",
                textprimary: "#000000",
                textsecondary: "#ff8c00",
                forgrounde: "#000000",
                destructive: "#df3131",
                destructiveforeground: "#ffffff",
                background: "#ffffff",
                secondary: "#000000",
                "secondary-foreground": "#ffffff",
                "primary-foreground": "#000000",
                primary: "#ff8c00",
                "subtle-background": "#f5f5f5",
                "brand-accent": "#ff8c00",
                "text-primary": "#000000",
                "destructive-foreground": "#ffffff",
                "text-secondary": "#000000",
                "dark-background": "#000000",
                softyellowaccent: "#ffa500",
                foreground: "#000000",
                "primary-foreground-new": "#ffffff",
                "secondary-foreground-new": "#000000"
            },
        },
    },
    future: {
        hoverOnlyWhenSupported: true,
    },
    plugins: [require('@tailwindcss/container-queries'), require('@tailwindcss/typography')],
}
