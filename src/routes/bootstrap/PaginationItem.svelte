<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children?: Snippet;
	} = $props();
</script>

{#if children}
	<span class="page-link">{@render children()}</span>
{/if}
