import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/app/styles/index.scss',
                'resources/app/index.tsx',
            ],
            refresh: true,
            // @ts-ignore
            postcss: [
                tailwindcss(),
                autoprefixer(),
            ],
        }),
        react(),
    ],
    css: {
        preprocessorOptions: {
            scss: {},
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/app'),
        },
    },
});