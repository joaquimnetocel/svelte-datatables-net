<script lang="ts" generics="Generic">
	import { setContext, type Snippet } from 'svelte';
	import { functionSearch } from './functionSearch.js';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;

	let {
		children,
		propDatatable = $bindable(),
	}: {
		children: Snippet;
		propDatatable: typeDatatable<typeData>;
	} = $props();

	setContext(symbolContext, propDatatable);

	$effect(() => {
		propDatatable.arraySorted = propDatatable.arrayRawData.sort(propDatatable.functionSort);
	});
	$effect(() => {
		propDatatable.arraySearched = functionSearch(
			propDatatable.arraySorted,
			propDatatable.stringSearchString,
			propDatatable.arraySearchableColumns,
		);
	});
	$effect(() => {
		propDatatable.numberFirstRow =
			(propDatatable.numberActivePage - 1) * propDatatable.numberRowsPerPage + 1;
		propDatatable.numberLastRow = Math.min(
			propDatatable.arraySearched.length,
			propDatatable.numberActivePage * propDatatable.numberRowsPerPage,
		);
		propDatatable.arrayData = propDatatable.arraySearched.slice(
			propDatatable.numberFirstRow - 1,
			propDatatable.numberLastRow,
		);
		propDatatable.numberLastPage = Math.ceil(
			propDatatable.arraySearched.length / propDatatable.numberRowsPerPage,
		);
	});
</script>

{@render children()}
