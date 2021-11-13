import typescript from '@rollup/plugin-typescript';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodeBuiltins from 'rollup-plugin-node-builtins';

export default {
  input: './src/main.ts',
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
    nodeBuiltins()
  ],
  output: {
    file: './dist/bundle.js',
    format: 'cjs',
  }
}
