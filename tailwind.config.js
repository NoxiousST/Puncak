/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'main': "url('/src/assets/img/bg-masthead.jpg')",
                'erupt': "url('/src/assets/img/erupt.jpeg')",
                'aids': "url('/src/assets/img/aids.jpg')"
            }
        },
        fontFamily: {
            'logo': ['Big Shoulders Text', 'sans-serif'],
            'display': ['Cera Pro', 'Trebuchet MS', 'sans-serif'],
            'cera': ['Cera Pro', 'sans-serif'],
            'montserrat': ["Montserrat", 'sans-serif'],
            'brush': ["Water Brush", 'cursive'],
            'ruthie': ["Ruthie", 'cursive']
        }
    },
    plugins: [],
}

