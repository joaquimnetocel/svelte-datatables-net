<script lang="ts">
	// MODULES
	import type { typeDatatable } from './typeDatatable';
	/////

	// PROPS
	type typeData = $$Generic;
	export let propDatatable: typeDatatable<typeData>;
	/////

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
	on:change={functionChange}
	style={$$props.style}
	class={$$props.class}
>
	<slot />
</select>
