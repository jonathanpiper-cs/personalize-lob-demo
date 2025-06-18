<script lang="ts">
	import SimpleCTA from '$lib/components/SimpleCTA.svelte';
    import Testimonial from '$lib/components/Testimonial.svelte';
    import Columns from '$lib/components/Columns.svelte';
	let { data } = $props();
	const entry = data ? data.entry : null;
</script>

<div>
	{#if entry}
		<h1 data-cslp={entry.$ && entry.$.title}>{entry && entry.title}</h1>
		<p>{entry && entry.heading}</p>
        {#if entry.modular_blocks} 
            {#each entry.modular_blocks as block}
                {#if block.cta}
                    <SimpleCTA data={block.cta} />
                {:else if block.testimonial}
                    <Testimonial data={block.testimonial} />
                {:else if block.columns}
                    <Columns data={block.columns} />
                {/if}
            {/each}
        {/if}
		<!-- <img src={entry.banner.url} alt="sports" /> -->
	{/if}
</div>
