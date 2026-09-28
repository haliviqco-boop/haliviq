import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary purple-blue from logo left
        purple: '#7B6EF6',
        'purple-dark': '#5A4ED4',
        'purple-light': '#A99CF8',
        'purple-bg': '#EEEDFB',
        // Lime green from logo right
        lime: '#A8D832',
        'lime-dark': '#8AB828',
        'lime-light': '#C4E86A',
        'lime-bg': '#F2F9E3',
        // Dark navy from logo background
        navy: '#1A1B2E',
        'navy-mid': '#252640',
        'navy-soft': '#3A3B5C',
        // Neutrals
        ink: '#0F0F1A',
        'ink-mid': '#3A3A50',
        'ink-soft': '#7070A0',
        border: '#E4E4F0',
        surface: '#F8F8FD',
        'surface-2': '#F2F2FA',
      },
    },
  },
  plugins: [],
}
export default config
