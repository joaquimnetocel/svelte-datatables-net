<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<ul>
	<li><a href="/">SKELETON EXAMPLE</a></li>
	<li><a href="/fetch">FETCH EXAMPLE</a></li>
	<li><a href="/bootstrap">BOOTSTRAP 5 EXAMPLE</a></li>
	<li><a href="/short-mode-pagination">SHORT MODE PAGINATION</a></li>
</ul>

{@render children()}

<style>
	ul {
		list-style-type: none;
		margin: 0;
		padding: 0;
		padding-left: 12px;
		overflow: hidden;
		background-color: #dddddd;
		margin-bottom: 15px;
	}

	li {
		float: left;
	}

	li a {
		display: block;
		padding: 8px;
	}
</style>
