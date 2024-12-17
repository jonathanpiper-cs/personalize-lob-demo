<script lang="ts">
	import Personalize from '@contentstack/personalize-edge-sdk';
	import { invalidateAll } from '$app/navigation';

	const setAttribute = async (attribute: string, value: string | null): Promise<void> => {
		console.log('+page.svelte || Personalize init status:', Personalize.getInitializationStatus());
		await Personalize.set({ [attribute]: value });
		console.log('+page.svelte || Setting attribute %s with value %s', attribute, value);
		setTimeout(() => {
			const experiences = Personalize.getExperiences();
			console.log(
				'+page.svelte || Fetching active experience: %s, active variant: %s',
				experiences[0].shortUid,
				experiences[0].activeVariantShortUid
			);
		}, 1000);
	};

	const reload = () => {
		invalidateAll();
		window.location.reload();
	};
</script>

<div class="mt-4 flex flex-col gap-2">
	<div class="mt-4 flex flex-row gap-2">
		<button
			type="button"
			class="btn btn-primary"
			onclick={async () => await setAttribute('dept', 'deptA')}>I'm in Dept A</button
		>
		<button
			type="button"
			class="btn btn-primary"
			onclick={async () => await setAttribute('dept', 'deptB')}>I'm in Dept B</button
		>
	</div>
	<div class="mt-4 flex flex-row gap-2">
        {#each [1,2,3,4,5,6] as i}
		<button
			type="button"
			class="btn btn-primary"
			onclick={async () => await setAttribute('lob', `lob${i}`)}>I'm in LOB {i}</button
		>
        {/each}
	</div>
	<div class="mt-4 flex flex-row gap-2">
		<button type="button" class="btn btn-accent" onclick={reload}>Reload Page</button>
		<button
			type="button"
			class="btn btn-warning"
			onclick={async () => await setAttribute('dept', null)}>Clear Dept</button
		>
		<button
			type="button"
			class="btn btn-warning"
			onclick={async () => await setAttribute('lob', null)}>Clear LOB</button
		>
	</div>
</div>
