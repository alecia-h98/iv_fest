import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';


export default defineConfig(() => {
  plugins: [react(), tsconfigPaths()];

  return {
    build: {
      outDir: 'build',
    },
    server: {
      proxy: {
        "/api":'http://localhost:5001',
      }
    },
    plugins: [react()],
  };
});
