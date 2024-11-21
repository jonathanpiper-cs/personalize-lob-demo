<script lang="ts">
	import type { IPage } from '$lib/types';
	import Cta from '$lib/components/CTA.svelte';
	let { data } = $props();
	const entry: IPage | null = data ? data.entry : null;
</script>

<div>
	{#if entry}
		<h1 class="text-4xl font-bold" {...entry.$?.title}>{@html entry.title}</h1>
		<p class="mt-2 text-lg" {...entry.$?.description}>{@html entry.description}</p>
		<p class="mt-1 text-lg" {...entry.$?.text}>{@html entry.text}</p>
		{#if entry.cta}
			<Cta data={entry.cta} />
		{/if}
	{/if}
</div>
