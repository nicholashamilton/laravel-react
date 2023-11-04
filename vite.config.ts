import { defineConfig, loadEnv } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

// https://vitejs.dev/config/
export default defineConfig(config => {

    // Load env file based on `mode` in the current working directory.
    // https://main.vitejs.dev/config/#using-environment-variables-in-config
    const env = loadEnv(config.mode, process.cwd(), '');

    return {
        define: {
            __APP_ENV__: JSON.stringify(env.APP_ENV),
        },
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
    };
});