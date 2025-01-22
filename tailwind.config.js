/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        odibee: ['"Odibee Sans"', 'cursive'],
        nova: ['"Bona Nova"', 'serif'],
        ubuntu: ['"Ubuntu"', 'sans-serif'],
        mono: ['"Ubuntu Mono"', 'monospace'],
        ubuntuSans: ['"Ubuntu Sans"', 'sans-serif'],
        condensed: ['"Ubuntu Condensed"', 'sans-serif'],
        sansMono: ['"Ubuntu Sans Mono"', 'monospace'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}