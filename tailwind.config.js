/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "envited-primary-blue-700": "#240D57",
        "envited-primary-blue-500": "#501FC1",
        "envited-primary-purple-500": "#8456EC",
        "envited-primary-pink-500": "#E87BF8",
        "envited-secondary-purple-300": "#E87BF8",
        "envited-secondary-purple-200": "#EDE5FF",
        "envited-secondary-purple-100": "#F6F2FF",
        "envited-nuetral-gray-600": "#4F4F4F",
        "envited-nuetral-gray-500": "#828282",
        "envited-nuetral-gray-400": "#BDBDBD",
        "envited-nuetral-gray-300": "#E0E0E0",
        "envited-nuetral-gray-200": "#F2F2F2",
        "envited-nuetral-gray-100": "#FBFAFF",
        "envited-alert-red-500": "#E61445",
        "envited-alert-red-100": "#FFD7E0",
        "envited-alert-green-500": "#00805E",
        "envited-alert-green-100": "#D3FFE2",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  plugins: [],
};
