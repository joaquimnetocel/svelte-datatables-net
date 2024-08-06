<script lang="ts" generics="Generic">
	import { getContext } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;

	let stateDatatable = getContext<typeDatatable<typeData>>(symbolContext);
	let derivedNumberOfPages = $derived(
		stateDatatable.numberRowsPerPage === Infinity
			? 1
			: Math.ceil(stateDatatable.arraySearched.length / stateDatatable.numberRowsPerPage),
	);

	let {
		propTag,
		propPrevious = 'PREVIOUS',
		propNext = 'NEXT',
		propDisabledStyle,
		propDisabledClass,
		propActiveStyle,
		propActiveClass,
		...propRest
	}: {
		propTag: 'span' | 'div' | 'li' | 'button' | 'a';
		propDisabledStyle?: string;
		propDisabledClass?: string;
		propActiveStyle?: string;
		propActiveClass?: string;
		propPrevious?: string;
		propNext?: string;
		style?: string;
		class?: string;
	} = $props();
</script>

<!-- PREVIOUS -->
{#if stateDatatable.numberActivePage === 1}
	<svelte:element
		this={propTag}
		style={`${propRest.style};${propDisabledStyle};cursor:not-allowed;`}
		class={`${propRest.class} ${propDisabledClass}`}
	>
		{propPrevious}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style};cursor:pointer`}
		onclick={() => {
			stateDatatable.numberActivePage = stateDatatable.numberActivePage - 1;
		}}
		class={`${propRest.class}`}
	>
		{propPrevious}
	</svelte:element>
{/if}
<!---->
{#each Array(derivedNumberOfPages) as _, numberCounter}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style};${stateDatatable.numberActivePage === numberCounter + 1 ? propActiveStyle : ''};${stateDatatable.numberActivePage === numberCounter + 1 ? 'cursor:default;' : 'cursor:pointer;'}`}
		class={`${propRest.class} ${stateDatatable.numberActivePage === numberCounter + 1 ? propActiveClass : ''}`}
		onclick={() => {
			stateDatatable.numberActivePage = numberCounter + 1;
		}}
	>
		{numberCounter + 1}
	</svelte:element>
{/each}
<!-- NEXT -->
{#if stateDatatable.numberActivePage === derivedNumberOfPages}
	<svelte:element
		this={propTag}
		style={`${propRest.style};${propDisabledStyle};cursor:not-allowed;`}
		class={`${propRest.class} ${propDisabledClass}`}
	>
		{propNext}
	</svelte:element>
{:else}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<svelte:element
		this={propTag}
		style={`${propRest.style};cursor:pointer`}
		class={`${propRest.class}`}
		onclick={() => {
			stateDatatable.numberActivePage = stateDatatable.numberActivePage + 1;
		}}
	>
		{propNext}
	</svelte:element>
{/if}
<!---->
