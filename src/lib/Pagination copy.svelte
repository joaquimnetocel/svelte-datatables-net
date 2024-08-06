<script lang="ts">
	let {
		propTag,
		propActivePage = $bindable(),
		propNumberOfPages,
		propTotalNumberOfRows,
		propNumberRowsPerPage,
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
		propActivePage: number;
		propNumberOfPages?: number;
		propTotalNumberOfRows?: number;
		propNumberRowsPerPage?: number;
		style?: string;
		class?: string;
	} = $props();

	$effect(() => {
		if (propTotalNumberOfRows !== undefined && propNumberRowsPerPage !== undefined) {
			propNumberOfPages =
				propNumberRowsPerPage === Infinity
					? 1
					: Math.ceil(propTotalNumberOfRows / propNumberRowsPerPage);
		}
	});
</script>

{#if propNumberOfPages !== undefined}
	<!-- PREVIOUS -->
	{#if propActivePage === 1}
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
				propActivePage = propActivePage - 1;
			}}
			class={`${propRest.class}`}
		>
			{propPrevious}
		</svelte:element>
	{/if}
	<!---->
	{#each Array(propNumberOfPages) as _, numberCounter}
		<!-- svelte-ignore a11y_no_static_element_interactions -->
		<svelte:element
			this={propTag}
			style={`${propRest.style};${propActivePage === numberCounter + 1 ? propActiveStyle : ''};${propActivePage === numberCounter + 1 ? 'cursor:default;' : 'cursor:pointer;'}`}
			class={`${propRest.class} ${propActivePage === numberCounter + 1 ? propActiveClass : ''}`}
			onclick={() => {
				propActivePage = numberCounter + 1;
			}}
		>
			{numberCounter + 1}
		</svelte:element>
	{/each}
	<!-- NEXT -->
	{#if propActivePage === propNumberOfPages}
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
				propActivePage = propActivePage + 1;
			}}
		>
			{propNext}
		</svelte:element>
	{/if}
	<!---->
{/if}
