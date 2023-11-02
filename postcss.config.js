

const plugin = require("@tailwindcss/forms")

module.exports = {
    style: {
        postcss: {
            pluginns: [
                require('tailwindcss'),
                require('autoprefixer'),
            ]
        }
    }
}