/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.html",
     "./src/**/*.js",
     "./templates/**/*.html",
     "./node_modules/govuk-frontend/dist/govuk/all.bundle.js",
    ],
  theme: {
    extend: {},
  },
  plugins: [],
};

