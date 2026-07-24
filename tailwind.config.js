/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg:           '#FFFFFF',
        surface:      '#F5F5F5',
        surfaceLight: '#EBEBEB',
        accent:       '#111111',
        cyan:         '#111111',
        success:      '#22C55E',
        textPrimary:  '#111111',
        textSecondary:'#444444',
        textMuted:    '#888888',
        border:       '#E0E0E0',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
