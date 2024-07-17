import { defineConfig } from 'vite'

import headerPlugin from "./plugins/header";
import syncPlugin from './plugins/sync'

export default defineConfig({
    build: {
        lib:{
            entry: 'src/index.ts',
            name: 'main',
            fileName: 'main',
            formats: ['es']
        },
        outDir: 'dist'
    },
    plugins: [
        headerPlugin(),
        {
            ...syncPlugin(),
            apply: (_, {mode}) => mode === 'sync'
        }
    ]
})