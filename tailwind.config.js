/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main': "url('/src/assets/img/bg-masthead.jpg')",
            }
        },
        fontFamily: {
            'sh': ['Varela Round', 'sans-serif'],
            'logo': ['Big Shoulders Text', 'sans-serif'],
            'display': ['Cera Pro', 'Trebuchet MS', 'sans-serif'],
            'alata': ["Alata", 'sans-serif'],
            'montserrat': ["Montserrat", 'sans-serif']
        }
    },
    plugins: [],
}

