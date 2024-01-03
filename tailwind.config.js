/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: {
          100: '#BEA6FF',
          300: '#A280FF',
          500: '#8C61FF',
          700: '#704ECC',
          900: '#382766'
        },
        success: {
          100: '#80FFBF',
          300: '#22E584',
          500: '#14CC70',
          700: '#0F9954',
          900: '#0A6638'
        },
        danger: {
          100: '#FF8099',
          300: '#F23D61',
          500: '#CC1439',
          700: '#990F2B',
          900: '#660A1D'
        },
        warning: {
          100: '#FFD073',
          300: '#E5AC39',
          500: '#D99000',
          700: '#996600',
          900: '#664400'
        },
        info: {
          100: '#73A5FF',
          300: '#4C8DFF',
          500: '#397DF6',
          700: '#2F68CC',
          900: '#234E99'
        },
        light: {
          100: '#FFFFFF',
          300: '#F9F7FF',
          500: '#F4F2FA',
          700: '#DCDAE0',
          900: '#C3C1C7'
        },
        dark: {
          100: '#808080',
          300: '#4C4C4C',
          500: '#333333',
          700: '#171717',
          900: '#000000'
        }
      }
    }
  },
  plugins: []
}
