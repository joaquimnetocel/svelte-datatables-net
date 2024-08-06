<svelte:options runes={true} />

<script lang="ts" generics="T">
	import { getContext } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = T;

	let stateDatatable = getContext<typeDatatable<typeData>>(symbolContext);

	let {
		propPlaceholder = 'Type here...',
		...propRest
	}: {
		propPlaceholder: string;
		style?: string;
		class?: string;
	} = $props();
</script>

<input
	bind:value={stateDatatable.stringSearchString}
	oninput={() => (stateDatatable.numberActivePage = 1)}
	type="search"
	placeholder={propPlaceholder}
	style={propRest.style}
	class={propRest.class}
/>
