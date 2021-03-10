import json from '@rollup/plugin-json';
 
export default {
  input: 'lib/index.js',
  output: {
    dir: 'output',
    format: 'cjs',
    file: 'index.js'
  },
  plugins: [json()]
};