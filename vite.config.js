import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Lerkastellet",
    short_name:"Lerkastellet",
    description:"Browse and order ceramic products",
    icons:[{
      src: '../public/newLogo.svg',
      sizes:'192x192',
      type:'image/svg',
      purpose:'favicon any'
    },
    {
      src: '../public/newLogo.svg',
      sizes:'144x144',
      type:'image/svg',
      purpose:'any'
    },
    {
      src:'../public/newLogo.svg',
      sizes:'512x512',
      type:'image/svg',
      purpose:'favicon any'
    },
    {
      src: '../public/newLogo.svg',
      sizes:'180x180',
      type:'image/svg',
      purpose:'apple touch icon any',
    },
    {
      src: '../public/newLogo.svg',
      sizes:'512x512',
      type:'image/svg',
      purpose:'any maskable',
    }
  ],
  theme_color:'#171717',
  background_color:'#f0e7db',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugIn)],
})
