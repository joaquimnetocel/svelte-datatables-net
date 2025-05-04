<script lang="ts" generics="Generic">
	import type { typeData } from './typeData.js';

	// eslint-disable-next-line no-undef
	type typeGeneric = Generic;

	let {
		data,
		placeholder = 'Type here...',
		...rest
	}: {
		data: typeData<typeGeneric>;
		placeholder: string;
		class?: string;
		style?: string;
	} = $props();
</script>

<input
	bind:value={data.searchString}
	oninput={() => (data.activePage = 1)}
	type="search"
	{placeholder}
	{...rest}
/>
