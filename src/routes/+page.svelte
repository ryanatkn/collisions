<script lang="ts">
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import {base} from '$app/paths';

	import Mreows from '$routes/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="prose">
	<section class="box">
		<header class="prose">
			<h1>fuz_template</h1>
		</header>
		<Alert>
			<span slot="icon"
				>{#if mreows}{mreows[0].icon}{:else}✨{/if}</span
			><a class="chip" href="{base}/about">about</a>
		</Alert>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
