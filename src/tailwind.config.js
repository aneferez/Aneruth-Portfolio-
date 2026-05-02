// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ← Must match where your files actually live
  ],
  darkMode: "class", // ← REQUIRED because ThemeContext uses classList.add("dark")
  theme: { extend: {} },
  plugins: [],
};