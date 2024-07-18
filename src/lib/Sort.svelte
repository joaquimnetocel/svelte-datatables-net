<script lang="ts">
	// MODULES
	import type { typeDatatable } from './typeDatatable';
	/////
	// PROPS
	type typeData = $$Generic;
	export let propColumn: keyof typeData;
	export let propDatatable: typeDatatable<typeData>;
	export let propIconSize = 10;
	type typeSortFunction = (a: typeData, b: typeData) => number;
	export let propSortFunction: typeSortFunction = function (
		elementA: typeData,
		elementB: typeData,
	) {
		const sortModifier = propDatatable.stringSortOrder === 'ascending' ? 1 : -1;
		if (elementA[propColumn] < elementB[propColumn]) {
			return -1 * sortModifier;
		}
		if (elementA[propColumn] > elementB[propColumn]) {
			return 1 * sortModifier;
		}
		return 0;
	};
	/////
	// FUNCTIONS
	const functionUpdateSortConfig = function () {
		if (propDatatable.stringSortBy === propColumn) {
			propDatatable.stringSortOrder =
				propDatatable.stringSortOrder === 'ascending' ? 'descending' : 'ascending';
			return;
		}
		propDatatable.stringSortBy = propColumn;
		propDatatable.stringSortOrder = 'ascending';
		propDatatable.functionSort = propSortFunction;
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
	role="button"
	tabindex="0"
	style="cursor:pointer;white-space: nowrap;"
	on:click={functionUpdateSortConfig}
>
	<slot />
	{#if propDatatable.stringSortBy === propColumn}
		{#if propDatatable.stringSortOrder === 'ascending'}
			<!-- <i class="fa-solid fa-caret-down" /> -->
			<svg width={propIconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
				<path
					d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
				/>
			</svg>
		{:else}
			<!-- <i class="fa-solid fa-caret-up" /> -->
			<svg width={propIconSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
				<path
					d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"
				/>
			</svg>
		{/if}
	{:else}
		<svg
			width={propIconSize}
			style="fill:lightgray;"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
		>
			<path
				d="M137.4 41.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128zm0 429.3l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128c-12.5 12.5-32.8 12.5-45.3 0z"
			/>
		</svg>
	{/if}
</span>
