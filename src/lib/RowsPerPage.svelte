<svelte:options runes={true} />

<script lang="ts" generics="Generic">
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;

	let stateDatatable = getContext<typeDatatable<typeData>>(symbolContext);

	let {
		children,
		...propRest
	}: {
		children: Snippet;
		class?: string;
		style?: string;
	} = $props();

	const functionChange = function () {
		stateDatatable.numberRowsPerPage =
			stateDatatable.stringRowsPerPage === 'all'
				? Infinity
				: parseInt(stateDatatable.stringRowsPerPage);
		stateDatatable.numberActivePage = 1;
	};
</script>

<select bind:value={stateDatatable.stringRowsPerPage} onchange={functionChange} {...propRest}>
	{@render children()}
</select>
