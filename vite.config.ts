import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { UserConfigExport } from 'vitest/config';
import tailwindcss from "@tailwindcss/vite"

/// <reference types="vitest/config" />
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals:true,
    environment: 'jsdom', // Ensure this matches correctly
    setupFiles:'./src/setupTests.ts'
  },
} as UserConfigExport);
