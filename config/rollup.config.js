import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: './src/index.js',
  output: {
    file: './build/webxr3.js',
    format: 'es',
    sourcemap: 'inline'
  },
  plugins: [
    nodeResolve()
  ]
}
