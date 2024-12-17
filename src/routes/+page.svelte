<script lang="ts">
	let { data } = $props();
	const entry = data ? data.entry : null;
	console.log(entry);
</script>

<div>
	{#if entry}
		<h1 data-cslp={entry.$ && entry.$.title}>{entry && entry.title}</h1>
		<p>{entry && entry.heading}</p>
		<!-- <img src={entry.banner.url} alt="sports" /> -->
	{/if}
</div>
