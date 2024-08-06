<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { typeDatatable } from './typeDatatable.js';

	type typeData = $$Generic;

	let {
		propDatatable = $bindable(),
		children,
		...propRest
	}: {
		propDatatable: typeDatatable<typeData>;
		class?: string;
		style?: string;
		children: Snippet;
	} = $props();

	const functionChange = function () {
		propDatatable.numberRowsPerPage =
			propDatatable.stringRowsPerPage === 'all'
				? Infinity
				: parseInt(propDatatable.stringRowsPerPage);
		propDatatable.numberActivePage = 1;
	};
</script>

<select
	bind:value={propDatatable.stringRowsPerPage}
	onchange={functionChange}
	style={propRest.style}
	class={propRest.class}
>
	{@render children()}
</select>
