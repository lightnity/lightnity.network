module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			gradientColorStops: (theme) => ({
				primary: {
					light: '#D3C3DA',
					dark: '#1a0e28'
				},
				secondary: {
					light: '#F8E8E0',
					dark: '#20132f'
				}
			})
		},
		colors: {
			primary: {
				light: '#FF5C00',
				dark: '#8d55fe'
			},
			secondary: {
				light: '#b5651d',
				dark: '#654321'
			},
			neutral: {
				light: '#b5651d',
				dark: '#654321'
			},
			canvas: {
				light: '#b5651d',
				dark: '#654321'
			},
			white: '#FFFFFF',
			black: '#000000'
		}
	},
	plugins: []
};
