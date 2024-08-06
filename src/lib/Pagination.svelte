<!-- <script lang="ts">
	// NPM MODULES
	import Pagination from 'pagination-svelte';
	/////
	// MODULES
	import type { typeDatatable } from './typeDatatable';
	/////
	// PROPS
	type typeData = $$Generic;
	export let propDatatable: typeDatatable<typeData>;
	/////

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let { propDatatable: _, ...objectOtherProps } = $$props;
</script>

<Pagination
	bind:propActivePage={propDatatable.numberActivePage}
	propNumberOfPages={propDatatable.numberRowsPerPage === Infinity
		? 1
		: Math.ceil(propDatatable.arraySearched.length / propDatatable.numberRowsPerPage)}
	{...objectOtherProps}
/> -->
