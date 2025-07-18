/// <reference types="vitest" />

import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        host: true,
        port: 5173
    },
    plugins: [react(), tsconfigPaths(), tailwindcss()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
    },
});
