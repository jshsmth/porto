import Tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import React from '@vitejs/plugin-react'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vite'
import Mkcert from 'vite-plugin-mkcert'
import TsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env': {},
  },
  plugins: [
    Mkcert(),
    Tailwindcss(),
    TanStackRouterVite(),
    React(),
    Icons({ compiler: 'jsx', jsx: 'react' }),
    TsconfigPaths(),
  ],
})
