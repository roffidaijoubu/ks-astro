/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'sans': ['Lato', 'sans-serif'],
			'serif': ['Lora Variable', 'serif'],
			'montserrat': ['Montserrat Variable', 'sans-serif'],
			'titillium': ['Titillium Web', 'sans-serif'],
			'amiri': ['Amiri', 'serif'],
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
	],
}
