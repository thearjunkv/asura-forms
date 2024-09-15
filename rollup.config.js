import resolve, { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import svg from 'rollup-plugin-svg';

const packageJson = require('./package.json');
const polyfills = {
	crypto: 'crypto-browserify',
};

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
			},
			{
				file: packageJson.module,
				format: 'es',
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve({
				preferBuiltins: true,
				browser: true,
				alias: polyfills,
			}),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			svg(),
			nodeResolve({
				externals: ['crypto'],
			}),
		],
		external: ['react', 'react-dom', 'styled-components', 'antd', 'node:crypto', 'crypto'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: packageJson.types, format: 'es' }],
		plugins: [dts()],
	},
];
