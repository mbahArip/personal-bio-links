const newColors = {
	'mbaharip-dark': 'hsl(0, 0%, 5%)',
	'mbaharip-dark-active': 'hsl(0, 0%, 3%)',
	'mbaharip-dark-hover': 'hsl(0, 0%, 7%)',
	'mbaharip-light': 'hsl(0, 0%, 95%)',
	'mbaharip-light-active': 'hsl(0, 0%, 90%)',
	'mbaharip-light-hover': 'hsl(0, 0%, 99%)',
	'mbaharip-primary': 'hsl(21, 90%, 48%)',
	'mbaharip-primary-active': 'hsl(21, 90%, 32%)',
	'mbaharip-primary-hover': 'hsl(21, 90%, 56%)',
	'mbaharip-secondary': 'hsl(219, 90%, 48%)',
	'mbaharip-secondary-active': 'hsl(219, 90%, 32%)',
	'mbaharip-secondary-hover': 'hsl(219, 90%, 56%)',
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				...newColors,
			},
		},
	},
	plugins: [],
};
