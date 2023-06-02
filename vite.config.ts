import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/styles/app.scss',
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
});