// generated by src/lib/package.gen.ts

import type {Package_Json} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@ryanatkn/collisions',
	description:
		'collision detection for circles, polygons, and points — fork of github.com/Sinova/Collisions',
	version: '4.0.1',
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
		'@fuz.dev/fuz': '^0.79.1',
		'@fuz.dev/fuz_library': '^0.19.1',
		'@grogarden/gro': '^0.100.1',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
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
	modules: {
		'.': {
			path: 'index.ts',
			declarations: [
				{name: 'Body', kind: 'ClassDeclaration'},
				{name: 'Some_Body', kind: 'TypeAliasDeclaration'},
				{name: 'Bvh', kind: 'ClassDeclaration'},
				{name: 'Filter_Potentials', kind: 'InterfaceDeclaration'},
				{name: 'Bvh_Branch', kind: 'ClassDeclaration'},
				{name: 'Circle', kind: 'ClassDeclaration'},
				{name: 'Collisions', kind: 'ClassDeclaration'},
				{name: 'Point', kind: 'ClassDeclaration'},
				{name: 'Polygon', kind: 'ClassDeclaration'},
				{name: 'Collision_Result', kind: 'ClassDeclaration'},
				{name: 'sat', kind: 'FunctionDeclaration'},
				{name: 'aabb_aabb', kind: 'VariableDeclaration'},
				{name: 'draw_bodies', kind: 'VariableDeclaration'},
				{name: 'draw_circle', kind: 'VariableDeclaration'},
				{name: 'draw_polygon', kind: 'VariableDeclaration'},
				{name: 'draw_bvh', kind: 'VariableDeclaration'},
			],
		},
		'./Body.js': {
			path: 'Body.ts',
			declarations: [
				{name: 'Some_Body', kind: 'TypeAliasDeclaration'},
				{name: 'Body', kind: 'ClassDeclaration'},
			],
		},
		'./Bvh_Branch.js': {
			path: 'Bvh_Branch.ts',
			declarations: [{name: 'Bvh_Branch', kind: 'ClassDeclaration'}],
		},
		'./Bvh.js': {
			path: 'Bvh.ts',
			declarations: [
				{name: 'Filter_Potentials', kind: 'InterfaceDeclaration'},
				{name: 'Bvh', kind: 'ClassDeclaration'},
			],
		},
		'./Circle.js': {path: 'Circle.ts', declarations: [{name: 'Circle', kind: 'ClassDeclaration'}]},
		'./Collision_Result.js': {
			path: 'Collision_Result.ts',
			declarations: [{name: 'Collision_Result', kind: 'ClassDeclaration'}],
		},
		'./Collisions.js': {
			path: 'Collisions.ts',
			declarations: [{name: 'Collisions', kind: 'ClassDeclaration'}],
		},
		'./draw.js': {
			path: 'draw.ts',
			declarations: [
				{name: 'draw_bodies', kind: 'VariableDeclaration'},
				{name: 'draw_circle', kind: 'VariableDeclaration'},
				{name: 'draw_polygon', kind: 'VariableDeclaration'},
				{name: 'draw_bvh', kind: 'VariableDeclaration'},
			],
		},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
		'./Point.js': {path: 'Point.ts', declarations: [{name: 'Point', kind: 'ClassDeclaration'}]},
		'./Polygon.js': {
			path: 'Polygon.ts',
			declarations: [{name: 'Polygon', kind: 'ClassDeclaration'}],
		},
		'./sat.js': {
			path: 'sat.ts',
			declarations: [
				{name: 'sat', kind: 'FunctionDeclaration'},
				{name: 'aabb_aabb', kind: 'VariableDeclaration'},
			],
		},
	},
} satisfies Package_Json;

// generated by src/lib/package.gen.ts
