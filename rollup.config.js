import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'rollup-plugin-dts';
import pkg from './package.json';
import svgr from '@svgr/rollup';
import url from 'rollup-plugin-url';

export default [
  {
    input: 'src/index.ts',
    output: [{file: pkg.main, format: 'cjs'}],
    output: [{file: pkg.module, format: 'esm'}],
    plugins: [peerDepsExternal(), typescript(), url(), svgr()],
  },
  {
    input: 'src/index.ts',
    output: [{file: 'dist/index.d.ts', format: 'es'}],
    plugins: [dts(), url(), svgr()],
  },
];
