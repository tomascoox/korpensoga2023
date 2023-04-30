module.exports = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                serif: ['Manuale', 'serif'],
                sans: ['Montserrat', 'sans-serif'],
                'bebas-neue': ['Bebas Neue', 'sans-serif'],
            },
            typography: theme => ({
                DEFAULT: {
                    css: {
                        h1: {
                            fontFamily: `${theme('fontFamily.bebas-neue')}`,
                            fontSize: '3rem',
                            fontWeight: '400',
                        },
                        h2: {
                            fontFamily: `${theme('fontFamily.sans')}`,
                            fontWeight: '600',
                        },
                        h3: {
                            fontFamily: `${theme('fontFamily.sans')}`,
                        },
                        h4: {
                            fontFamily: `${theme('fontFamily.sans')}`,
                        },
                        h5: {
                            fontFamily: `${theme('fontFamily.sans')}`,
                        },
                        h6: {
                            fontFamily: `${theme('fontFamily.sans')}`,
                        },
                        p: {
                            fontFamily: `${theme('fontFamily.serif')}`,
                            fontSize: '1.3rem',
                            lineHeight: '1.4',
                        },
                    },
                },
            }),
        },
    },
    plugins: [require('@tailwindcss/typography')],
}
