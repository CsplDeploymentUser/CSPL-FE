import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		perspective: {
  			'500': '500px'
  		},
  		transformStyle: {
  			'preserve-3d': 'preserve-3d'
  		},
  		animation: {
  			shine: 'shine 1s',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		keyframes: {
  			shine: {
  				'100%': {
  					left: '125%'
  				}
  			},
  			orbit: {
  				'0%': {
  					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
  				},
  				'100%': {
  					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
  				}
  			}
  		},
  		variants: {
  			extend: {
  				transform: ["hover"]
  			}
  		},
  		colors: {
  			primary: '#000000',
  			secondary: '#FFFF',
  			tertiary: '#348827',
  			quaternary: '#273171'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
