import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Endo',
        short_name: 'care',
        start_url: "/",
        display: "fullscreen",
        description: 'health_care',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icons/main-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/icons/main-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/icons/main-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
    strictPort: true,
  }
});
