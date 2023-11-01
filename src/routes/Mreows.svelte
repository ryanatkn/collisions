<script lang="ts">
	import {random_item} from '@grogarden/util/random.js';

	import Positioned from '$routes/Positioned.svelte';

	// don't use this component, it's just a hacky demo

	interface Mreow {
		icon: string;
	}

	const items: Mreow[] = [
		{icon: '🐵'},
		{icon: '🐶'},
		{icon: '🐺'},
		{icon: '🦊'},
		{icon: '🐱'},
		{icon: '🦁'},
		{icon: '🐯'},
		{icon: '🐴'},
		{icon: '🦄'},
		{icon: '🦓'},
		{icon: '🐮'},
		{icon: '🐭'},
		{icon: '🐹'},
		{icon: '🐰'},
		{icon: '🐻'},
		{icon: '🐼'},
		{icon: '🐸'},
		{icon: '🐲'},
	];

	export let mreows: Mreow[] = [random_item(items)!, items[4]];

	const mreow = (): void => {
		mreows = [{...random_item(items)!}].concat(mreows);
	};

	const COLUMN_COUNT = 5;
	const PADDING = 40;
	const ICON_SCALE = 0.8;

	let layout: LayoutItem[];
	$: layout = clientWidth === undefined ? [] : to_layout(mreows.slice(1), clientWidth);

	interface LayoutItem {
		index: number;
		x: number;
		y: number;
		scale: number;
		row: number;
		column: number;
		mreow: Mreow;
		fontSize: number;
	}

	// TODO tweened x/y?
	const to_layout = (mreows: Mreow[], width: number): LayoutItem[] => {
		const columnWidth = Math.floor((width - PADDING * 2) / COLUMN_COUNT);
		const ROW_HEIGHT = columnWidth;
		return mreows.map((mreow, i): LayoutItem => {
			const row = Math.floor(i / COLUMN_COUNT);
			const flowsLeft = row % 2 === 1;
			const column = flowsLeft ? COLUMN_COUNT - 1 - (i % COLUMN_COUNT) : i % COLUMN_COUNT;
			return {
				index: i,
				x: column * columnWidth + PADDING,
				y: row * ROW_HEIGHT,
				row,
				column,
				scale: 1,
				mreow,
				fontSize: columnWidth * ICON_SCALE,
			};
		});
	};

	let clientWidth: number;
</script>

<button on:click={mreow}> mreow </button>
<div class="mreows" bind:clientWidth>
	{#each layout as item, i (item.mreow)}<Positioned
			x={item.x}
			y={item.y}
			scale={item.scale + Math.cos(i) / 2.5}
			><span style:font-size="{item.fontSize}px">{item.mreow.icon}</span></Positioned
		>{/each}
</div>

<style>
	.mreows {
		position: relative;
		width: 100%;
	}
	/* horrible hack but it's fine, this component shouldn't be used */
	:global(body) {
		overflow-x: hidden;
	}
</style>
