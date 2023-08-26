/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            screens: {
                desktop: "1440px",
                tablet: "768px",
                mobile: "640px",
            },
            maxWidth: {
                desktop: "1000px",
                tablet: "700px",
                mobile: "600px",
            },
            container: {
                center: true,
            },
            fontFamily: {
                iranyekan: "iranyekan-regular",
            },
        },
    },
    plugins: [],
};
