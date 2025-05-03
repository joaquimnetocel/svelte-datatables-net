<svelte:options runes={true} />

<script lang="ts" generics="Generic">
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		placeholder = 'Type here...',
		...propRest
	}: {
		data: typeDatatable<typeGeneric>;
		placeholder: string;
		class?: string;
		style?: string;
	} = $props();
</script>

<input
	bind:value={data.searchString}
	oninput={() => (data.activePage = 1)}
	type="search"
	{placeholder}
	{...propRest}
/>
