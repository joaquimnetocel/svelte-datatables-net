<script lang="ts" generics="Generic">
	import { setContext, type Snippet } from 'svelte';
	import { symbolContext } from './symbolContext.js';
	import type { typeDatatable } from './typeDatatable.js';

	// eslint-disable-next-line no-undef
	type typeData = Generic;

	let {
		children,
		data,
	}: {
		children: Snippet;
		data: typeDatatable<typeData>;
	} = $props();

	setContext(symbolContext, data);
</script>

{@render children()}
