<script lang="ts">
	import type { ISimpleCTA } from '$lib/types';
	export let data: ISimpleCTA;
</script>

<div
	class="my-2 flex w-full flex-row items-center gap-4 rounded border border-gray-300 bg-white p-4"
>
	<div class="flex flex-col">
		<h2 class="text-xl font-bold">{data.header}</h2>
		<p>{data.text}</p>
		<a class="mt-1 btn btn-outline btn-primary w-full" href={data.action.href}>{data.action.title}</a>
	</div>
</div>
