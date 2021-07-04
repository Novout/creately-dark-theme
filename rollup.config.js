import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const optionsForCompile = ['cjs', 'iife'];

const createPlugins = () => {
  return [json(), terser(), resolve(), commonjs(), babel({ exclude: 'node_modules/**' })];
};

const banner = [
  `/*!`,
  ` * ${pkg.name} - v${pkg.version}`,
  ` *`,
  ` * ${pkg.name} is licensed under the MIT License.`,
  ` * http://www.opensource.org/licenses/mit-license`,
  ` */`,
].join('\n');

const createConfig = () => {
  const list = [];

  optionsForCompile.forEach((format) => {
    list.push({
      input: `./src/index.js`,
      output: {
        file: `./lib/index.${format}.js`,
        format,
        exports: 'named',
        banner,
        sourcemap: true,
        name: '_creately_dark_theme'
      },
      plugins: [
        ...createPlugins()
      ],
    });
  });

  return list;
};

export default createConfig();