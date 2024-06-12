import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'tvNEnjoystoriesB': ['tvNEnjoystoriesB'],
        'tvNEnjoystoriesM': ['tvNEnjoystoriesM'],
        'tvNEnjoystoriesL': ['tvNEnjoystoriesL'],
        'AppleSDGothicNeoH00': ['AppleSDGothicNeoH00'],
        'AppleSDGothicNeoL00': ['AppleSDGothicNeoL00'],
        'AppleSDGothicNeoT00': ['AppleSDGothicNeoT00'],
        'AppleSDGothicNeoM00': ['AppleSDGothicNeoM00'],
        'AppleSDGothicNeoB00': ['AppleSDGothicNeoB00'],
        'AppleSDGothicNeoEB00': ['AppleSDGothicNeoEB00'],
        'AppleSDGothicNeoSB00': ['AppleSDGothicNeoSB00'],
        'Pretendard': ['Pretendard']
      },
      lineHeight: {
        _normal: "normal",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" }
        }
      }
    },
  },
  plugins: [],
};
export default config;
