module.exports = {
content: ["./dist/*.{html,js}"],
theme: {
  extend: {
    fontFamily: {
      'sanity': ['karlaregular', 'sans-serif'],
    },
    keyframes: {
      progress: {
        "0%": {width: "0%"},
        "100%": {width: "100%"}
      }
    },
    animation: {
      "progressbar": "progress 1200ms linear"
  }
  },
},
plugins: [],
}