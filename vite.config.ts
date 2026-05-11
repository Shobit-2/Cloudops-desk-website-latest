import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              react: ['react', 'react-dom'],
              router: ['react-router-dom'],
              icons: ['lucide-react'],
              helmet: ['react-helmet-async'],
            }
          }
        },
        cssCodeSplit: true,
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            passes: 2,
          }
        },
        target: 'es2020',
        reportCompressedSize: true,
      }
    };
});
