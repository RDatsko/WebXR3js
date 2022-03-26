// Rollup.js configuration
import replace from '@rollup/plugin-replace';
import { nodeResolve as resolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import { terser } from 'rollup-plugin-terser';

// settings
const
  dev = (process.env.NODE_ENV !== 'production'),
  sourcemap = dev ? 'inline' : false,

  input = './src/index.js',

  watch = { clearScreen: false },

  tokens = {
//    __CLOCKSELECTOR__: '.clock',
//    __CLOCKINTERVAL__: 1000,
///    __CLOCKFORMAT__: 'formatHMS'
  };

console.log(`running in ${ dev ? 'development' : 'production' } mode`);

export default [

  {
    // ES6 output
    input,
    watch,

    plugins: [
//      replace({
//        ...tokens,
//        __POLYFILL__: '' // no polyfill for ES6
//      }),
      resolve({ browser: true }),
      commonjs()
    ],

    output: {
      file: './build/webxr3.min.mjs',
      format: 'es',
      sourcemap,
      plugins: [
        terser({
          ecma: 2018,
          mangle: { toplevel: true },
          compress: {
            module: true,
            toplevel: true,
            unsafe_arrows: true,
            drop_console: !dev,
            drop_debugger: !dev
          },
          output: { quote_style: 1 },
//          transforms: { asyncAwait: false },
        })
      ]
    }

  },

  {
    // ES5 output
    input,
    watch,

    plugins: [
//      replace({
//        ...tokens,
//        __POLYFILL__: "import './lib/polyfill.js';" // ES5 polyfill
//      }),
      resolve({ browser: true }),
      commonjs(),
      buble()
    ],

    output: {
      file: './build/webxr3.min.js',
      format: 'es',
      sourcemap,
      plugins: [
        terser({
          ecma: 2015,
          mangle: { toplevel: true },
          compress: {
            toplevel: true,
            drop_console: !dev,
            drop_debugger: !dev
          },
          output: { quote_style: 1 },
//          transforms: { asyncAwait: false },
        })
      ]
    }

  }

];
