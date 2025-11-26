/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'coffee': {
                    50: '#faf7f4',
                    100: '#f4ede5',
                    200: '#e8d9ca',
                    300: '#d4b89e',
                    400: '#c19874',
                    500: '#a97c54',
                    600: '#8b6545',
                    700: '#6f5039',
                    800: '#5a4230',
                    900: '#4a3727',
                },
                'earth': {
                    50: '#f9f7f4',
                    100: '#f1ebe3',
                    200: '#e3d6c7',
                    300: '#d0b9a3',
                    400: '#b89777',
                    500: '#9f7a56',
                    600: '#8b6646',
                    700: '#73533b',
                    800: '#604634',
                    900: '#523c2e',
                }
            },
            fontFamily: {
                'display': ['Playfair Display', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
