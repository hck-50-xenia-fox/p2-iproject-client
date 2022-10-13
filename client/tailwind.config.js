/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#3f3cbb",
        mypink: "#e946c9",
        myWhite: "#424242",
      },
      backgroundImage: {
        bg_1: "url('https://wallpapercave.com/wp/wp2290778.jpg')",
        bg_2: "url('https://wallpapercave.com/wp/wp2290771.gif')",
        bg_3: "url('https://wallpapercave.com/wp/wp2290774.png')",
        bg_4: "url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_895,h_503/v1653688498/assets/2c/3833ca-a2eb-4da4-9879-51193ea88f87/original/DotCom_Update_Earner_bg_med2x.jpg')",
        bg_5: "url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1101,h_619/v1613521596/assets/5a/a8230b-b6ec-4123-a042-6adc0a31a788/original/Eats_Home_bg_tabletpng.png')",
        bg_6: "url('https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_1067,h_600/v1653688635/assets/d1/1ffc67-97f4-469c-85ac-e18d1da3ae95/original/DotCom_Update_Rider_bg_med2x.jpg')",
      },
      height: {
        54: "54%",
        80: "80%",
      },
    },
  },
  plugins: [],
};
