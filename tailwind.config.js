/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

import tailwindcss_textshadow from "tailwindcss-textshadow";

export default {
  content: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [
    tailwindcss_textshadow,
    plugin(function({ addComponents }) {
      addComponents({
        '.btn': {
          padding: '.5rem 1rem',
          fontWeight: '600',
        },
        '.btn-blue': {
          backgroundColor: '#223e61',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#2779bd'
          },
        },
        '.btn-red': {
          backgroundColor: '#e3342f',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#cc1f1a'
          },
        },
      })
    }),

  ]
}
