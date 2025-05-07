<script lang="ts" generics="Generic">
	import type { typePaginationProps } from '$lib/PaginationComponent.svelte';
	import PaginationComponent from '$lib/PaginationComponent.svelte';
	import type { typeData } from './typeData.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		current = $bindable(1),
		...rest
	}: {
		data: typeData<typeGeneric>;
		current?: number;
	} & typePaginationProps = $props();
</script>

<PaginationComponent
	total={data.rowsPerPage === 0 || data.searched.length === 0
		? 1
		: Math.ceil(data.searched.length / data.rowsPerPage)}
	bind:current
	{...rest}
/>
