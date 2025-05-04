<script lang="ts" generics="Generic">
	import type { Snippet } from 'svelte';
	import type { typeData } from './typeData.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		children,
		...rest
	}: {
		data: typeData<typeGeneric>;
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

<select bind:value={data.rowsPerPageString} onchange={functionChange} {...rest}>
	{@render children()}
</select>
