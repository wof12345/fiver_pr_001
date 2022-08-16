/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'font-cus_def': ['Montserrat', 'sans - serif']
		},
		screens: {
			xs: { max: '505px' }
		}
	},
	plugins: []
};
