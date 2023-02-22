<script lang="ts">
	// MODULES
	import type { typeDatatable } from './typeDatatable';
	/////
	// PROPS
	type typeData = $$Generic;
	export let propDatatable: typeDatatable<typeData>;
	export let propPlaceholder = 'Type here...';
	/////
</script>

<input
	bind:value={propDatatable.stringSearchString}
	on:input={() => (propDatatable.numberActivePage = 1)}
	type="search"
	placeholder={propPlaceholder}
	style={$$props.style}
	class={$$props.class}
/>
