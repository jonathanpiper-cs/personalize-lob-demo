<script lang="ts">
	import type { IColumn } from '$lib/types';
	export let data: IColumn;
    console.log(data)
</script>

<div
	class="my-2 flex w-full flex-row items-center gap-4 rounded border border-gray-300 bg-white p-4"
>
	<div class="flex flex-col">
		{#each data.column as column}
			<div>
				<h2 class="text-xl font-bold">{column.header}</h2>
				<p>{column.text}</p>
			</div>
		{/each}
	</div>
</div>
