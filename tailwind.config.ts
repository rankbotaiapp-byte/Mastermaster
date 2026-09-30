import type { Config } from 'tailwindcss';
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: { extend: {
    keyframes: {
      drift: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(7%,-5%) scale(1.18)' } },
      rise: { '0%': { transform: 'translateY(0)', opacity: '0' }, '20%,80%': { opacity: '.8' }, '100%': { transform: 'translateY(-110vh)', opacity: '0' } },
      toastIn: { '0%': { transform: 'translateX(-120%)', opacity: '0' }, '100%': { transform: 'translateX(0)', opacity: '1' } },
    },
    animation: { toastIn: 'toastIn .5s cubic-bezier(.2,.9,.3,1) both' },
  } },
} satisfies Config;
