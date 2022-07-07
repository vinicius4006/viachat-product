/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DMSans", "regular"],
        syne: ["Syne", "regular"],
        kroneOne: ["Krona One", "regular"],
        caudex: ["Caudex", "regular"],
        federo: ["Federo", "regular"],
        otama: ["Otama", "regular"],
        rubik: ["Rubik", "regular"],
      },
      backgroundImage: {
        'cool-background': "url('/img/cool-background.svg')",
        'blueWeak-background': "url('/img/blueWeak-background.png')",
        'wave-haikei': "url('/img/wave-haikei.svg')",
        'emails': "url('/img/Emails.svg')",
        'meetTheTeam': "url('/img/Meet-the-team.svg')",
        'blobscene': "url('/img/blob-scene-haikei.svg')",
        'blobscene-top': "url('/img/blob-scene-top.svg')",
        'blobscene-steps': "url('/img/blob-scene-steps.svg')",
        'wave': "url('/img/waves.svg')",
        'circle-scatter': "url('/img/circle-scatter-haikei.svg')",
        'blob-up': "url('/img/blob-up.svg')",
        'blob-middle': "url('/img/blob-middle.svg')",
        'blob-complexity': "url('/img/blob-complexity.svg')",
        'blurry-gradient': "url('/img/blurry-gradient.svg')"
      }
    },
  },
  plugins: [],
};
