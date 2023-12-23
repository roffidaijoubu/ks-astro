/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class', '[data-theme="dark"]'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'serif': ['Lora Variable', 'serif'],
			'montserrat': ['Montserrat Variable', 'sans-serif'],
			'titillium': ['Titillium Web', 'sans-serif'],
		  },
	},
	plugins: [
		require('@tailwindcss/typography'),
		require("daisyui"),
	],
}
