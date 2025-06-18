<script lang="ts">
	import type { ITestimonial } from '$lib/types';
	export let data: ITestimonial;
    console.log(data)
</script>

<div
	class="my-2 flex w-full flex-row items-center gap-4 rounded border border-gray-300 bg-white p-4"
>
	<div class="flex flex-col">
		<h2 class="text-xl font-bold">{data.header}</h2>
		<p>{data.text}</p>
		<p class="italic">- {data.attribution}</p>
        {#if data.image}
            <img src={data.image.url} alt={data.image.title} />
        {/if}
	</div>
</div>
