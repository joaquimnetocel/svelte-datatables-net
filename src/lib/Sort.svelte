<script lang="ts" generics="Generic">
	import type { Snippet } from 'svelte';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;
	type typeSortFunction = (a: typeGeneric, b: typeGeneric) => number;

	let {
		data,
		key,
		propIconSize = 10,
		propSortFunction = functionDefaultSortFunction,
		children,
	}: {
		data: typeDatatable<typeGeneric>;
		key: keyof typeGeneric;
		propIconSize?: number;
		propSortFunction?: typeSortFunction;
		children: Snippet;
	} = $props();
	/////
	// FUNCTIONS
	function functionUpdateSortConfig() {
		if (data.sortBy === key) {
			data.sortOrder = data.sortOrder === 'ascending' ? 'descending' : 'ascending';
			data.sortFunction = propSortFunction;
			return;
		}
		data.sortBy = key;
		data.sortOrder = 'ascending';
		data.sortFunction = propSortFunction;
	}
	function functionDefaultSortFunction(elementA: typeGeneric, elementB: typeGeneric) {
		const sortModifier = data.sortOrder === 'ascending' ? 1 : -1;
		if (elementA[key] < elementB[key]) {
			return -1 * sortModifier;
		}
		if (elementA[key] > elementB[key]) {
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
	{#if data.sortBy === key}
		{#if data.sortOrder === 'ascending'}
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
