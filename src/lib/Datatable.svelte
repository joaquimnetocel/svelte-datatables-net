<script
	lang="ts"
	generics="Generic"
>
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
		propDatatable.arraySearched = functionSearch(
			propDatatable.arraySorted,
			propDatatable.stringSearchString,
			propDatatable.arraySearchableColumns,
		);
	});
	$effect(() => {
		propDatatable.arrayData = propDatatable.arraySearched.slice(
			propDatatable.numberFirstRow,
			propDatatable.numberLastRow,
		);
	});
	$effect(() => {
		propDatatable.numberFirstRow =
			(propDatatable.numberActivePage - 1) * propDatatable.numberRowsPerPage;
		propDatatable.numberLastRow = propDatatable.numberActivePage * propDatatable.numberRowsPerPage;
		propDatatable.arrayData = propDatatable.arraySearched.slice(
			propDatatable.numberFirstRow,
			propDatatable.numberLastRow,
		);
	});
</script>

{@render children()}
