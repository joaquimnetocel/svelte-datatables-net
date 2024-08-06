<script lang="ts" generics="Generic">
	import type { Snippet } from 'svelte';
	import { getContext } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;
	type typeSortFunction = (a: typeData, b: typeData) => number;

	let stateDatatable = getContext<typeDatatable<typeData>>(symbolContext);

	let {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		propDatatable, // NOT USED. JUST TO PROVIDE TYPING TO propColumn
		propColumn,
		propIconSize = 10,
		propSortFunction = functionDefaultSortFunction,
		children,
	}: {
		propDatatable: typeDatatable<typeData>;
		propColumn: keyof typeData;
		propIconSize?: number;
		propSortFunction?: typeSortFunction;
		children: Snippet;
	} = $props();
	/////
	// FUNCTIONS
	function functionUpdateSortConfig() {
		if (stateDatatable.stringSortBy === propColumn) {
			stateDatatable.stringSortOrder =
				stateDatatable.stringSortOrder === 'ascending' ? 'descending' : 'ascending';
			stateDatatable.functionSort = propSortFunction;
			return;
		}
		stateDatatable.stringSortBy = propColumn;
		stateDatatable.stringSortOrder = 'ascending';
		stateDatatable.functionSort = propSortFunction;
	}
	function functionDefaultSortFunction(elementA: typeData, elementB: typeData) {
		const sortModifier = stateDatatable.stringSortOrder === 'ascending' ? 1 : -1;
		if (elementA[propColumn] < elementB[propColumn]) {
			return -1 * sortModifier;
		}
		if (elementA[propColumn] > elementB[propColumn]) {
			return 1 * sortModifier;
		}
		return 0;
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<span
	role="button"
	tabindex="0"
	style="cursor:pointer;white-space: nowrap;"
	onclick={functionUpdateSortConfig}
>
	{@render children()}
	{#if stateDatatable.stringSortBy === propColumn}
		{#if stateDatatable.stringSortOrder === 'ascending'}
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
