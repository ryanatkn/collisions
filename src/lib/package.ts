// generated by src/lib/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/collisions',
	version: '4.0.2',
	description:
		'collision detection for circles, polygons, and points — fork of github.com/Sinova/Collisions',
	icon: '🧱',
	public: true,
	license: 'MIT',
	author: {name: 'Samuel Hodge', url: 'https://github.com/Sinova'},
	homepage: 'https://collisions.ryanatkn.com/',
	type: 'module',
	engines: {node: '>=20.7'},
	files: ['dist', 'src'],
	scripts: {dev: 'gro dev', build: 'gro build'},
	keywords: [
		'Collision',
		'Separating Axis Theorem',
		'Bounding Volume Hierarchy',
		'sat',
		'Bvh',
		'Circle',
		'Polygon',
		'Line',
		'Shape',
		'Separating',
		'Axis',
		'Theorem',
		'Bounding',
		'Volume',
		'Hierarchy',
	],
	repository: {type: 'git', url: 'git+https://github.com/ryanatkn/collisions.git'},
	bugs: {url: 'https://github.com/ryanatkn/collisions/issues'},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.80.1',
		'@fuz.dev/fuz_library': '^0.21.1',
		'@grogarden/gro': '^0.102.1',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.5',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.11.0',
		'@typescript-eslint/parser': '^6.11.0',
		eslint: '^8.53.0',
		'eslint-plugin-svelte': '^2.35.0',
		prettier: '^3.1.0',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'.': {default: './dist/index.js', types: './dist/index.d.ts'},
		'./Body.js': {default: './dist/Body.js', types: './dist/Body.d.ts'},
		'./Bvh_Branch.js': {default: './dist/Bvh_Branch.js', types: './dist/Bvh_Branch.d.ts'},
		'./Bvh.js': {default: './dist/Bvh.js', types: './dist/Bvh.d.ts'},
		'./Circle.js': {default: './dist/Circle.js', types: './dist/Circle.d.ts'},
		'./Collision_Result.js': {
			default: './dist/Collision_Result.js',
			types: './dist/Collision_Result.d.ts',
		},
		'./Collisions.js': {default: './dist/Collisions.js', types: './dist/Collisions.d.ts'},
		'./draw.js': {default: './dist/draw.js', types: './dist/draw.d.ts'},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./Point.js': {default: './dist/Point.js', types: './dist/Point.d.ts'},
		'./Polygon.js': {default: './dist/Polygon.js', types: './dist/Polygon.d.ts'},
		'./sat.js': {default: './dist/sat.js', types: './dist/sat.d.ts'},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/collisions',
	version: '4.0.2',
	modules: {
		'.': {
			path: 'index.ts',
			declarations: [
				{name: 'Body', kind: 'class'},
				{name: 'Some_Body', kind: 'type'},
				{name: 'Bvh', kind: 'class'},
				{name: 'Filter_Potentials', kind: 'type'},
				{name: 'Bvh_Branch', kind: 'class'},
				{name: 'Circle', kind: 'class'},
				{name: 'Collisions', kind: 'class'},
				{name: 'Point', kind: 'class'},
				{name: 'Polygon', kind: 'class'},
				{name: 'Collision_Result', kind: 'class'},
				{name: 'sat', kind: null},
				{name: 'aabb_aabb', kind: 'function'},
				{name: 'draw_bodies', kind: 'function'},
				{name: 'draw_circle', kind: 'function'},
				{name: 'draw_polygon', kind: 'function'},
				{name: 'draw_bvh', kind: 'function'},
			],
		},
		'./Body.js': {
			path: 'Body.ts',
			declarations: [
				{name: 'Some_Body', kind: 'type'},
				{name: 'Body', kind: 'class'},
			],
		},
		'./Bvh_Branch.js': {path: 'Bvh_Branch.ts', declarations: [{name: 'Bvh_Branch', kind: 'class'}]},
		'./Bvh.js': {
			path: 'Bvh.ts',
			declarations: [
				{name: 'Filter_Potentials', kind: 'type'},
				{name: 'Bvh', kind: 'class'},
			],
		},
		'./Circle.js': {path: 'Circle.ts', declarations: [{name: 'Circle', kind: 'class'}]},
		'./Collision_Result.js': {
			path: 'Collision_Result.ts',
			declarations: [{name: 'Collision_Result', kind: 'class'}],
		},
		'./Collisions.js': {path: 'Collisions.ts', declarations: [{name: 'Collisions', kind: 'class'}]},
		'./draw.js': {
			path: 'draw.ts',
			declarations: [
				{name: 'draw_bodies', kind: 'function'},
				{name: 'draw_circle', kind: 'function'},
				{name: 'draw_polygon', kind: 'function'},
				{name: 'draw_bvh', kind: 'function'},
			],
		},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [
				{name: 'package_json', kind: 'variable'},
				{name: 'src_json', kind: 'variable'},
			],
		},
		'./Point.js': {path: 'Point.ts', declarations: [{name: 'Point', kind: 'class'}]},
		'./Polygon.js': {path: 'Polygon.ts', declarations: [{name: 'Polygon', kind: 'class'}]},
		'./sat.js': {
			path: 'sat.ts',
			declarations: [
				{name: 'sat', kind: null},
				{name: 'aabb_aabb', kind: 'function'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/lib/package.gen.ts