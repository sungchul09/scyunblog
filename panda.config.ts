import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#00875a' },
          primaryLight: { value: '#35b37e' },
          secondary: { value: '#ffb550' },
          secondaryLight: { value: '#ffe8ca' },
          systemYellow: { value: '#ffda58' },
          systemBlue: { value: '#68aaff' },
          systemOrange: { value: '#ff8650' },
          systemGreen: { value: '#5fb054' },
          systemLightGreen: { value: '#d9ede7' },
          systemBlack: { value: '#1e3242' },
          systemWhite: { value: '#ffffff' },
          systemLightGray: { value: '#f5f6f9' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
})
