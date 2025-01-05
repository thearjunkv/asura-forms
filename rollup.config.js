import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { dts } from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const packageJson = require('./package.json');

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs'
			},
			{
				file: packageJson.module,
				format: 'es'
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve({
				extensions: ['.js', '.ts', '.tsx']
			}),
			commonjs(),
			typescript({ tsconfig: './tsconfig.json', declaration: false }),
			terser()
		],
		external: Object.keys(packageJson.peerDependencies)
	},
	{
		input: 'src/index.ts',
		output: [{ file: packageJson.types, format: 'es' }],
		plugins: [dts()]
	}
];
