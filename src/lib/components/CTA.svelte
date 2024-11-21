<script lang="ts">
	import type { ICTA } from '$lib/types';
	export let data: ICTA;
</script>

<div
	class="my-2 flex w-full flex-row items-center gap-4 rounded border border-gray-300 bg-white p-4"
>
	<img src={data.image.url} alt={data.image.title} />
	<div class="flex flex-col">
		<h2 class="text-xl font-bold">{data.title}</h2>
		<p>{data.text}</p>
		<a class="mt-1 btn btn-outline btn-primary w-full" href={data.link.href}>{data.link.title}</a>
	</div>
</div>
