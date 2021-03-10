import json from '@rollup/plugin-json';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';
import { babel } from '@rollup/plugin-babel';

export default {
    input: 'lib/index.js',
    plugins: [
        json(),
        babel({ babelHelpers: 'bundled' })
    ],
    output: {
        dir: 'output',
        format: 'esm',
        file: 'bundle.esm.js'
    },
};