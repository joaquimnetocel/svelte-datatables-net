<svelte:options runes={true} />

<script lang="ts" generics="Generic">
	import type { Snippet } from 'svelte';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		children,
		...propRest
	}: {
		data: typeDatatable<typeGeneric>;
		children: Snippet;
		class?: string;
		style?: string;
	} = $props();

	const functionChange = function () {
		data.rowsPerPage =
			data.rowsPerPageString === 'all' ? Infinity : parseInt(data.rowsPerPageString);
		data.activePage = 1;
	};
</script>

<select bind:value={data.rowsPerPageString} onchange={functionChange} {...propRest}>
	{@render children()}
</select>
