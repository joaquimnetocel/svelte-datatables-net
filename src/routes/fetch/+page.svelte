<script lang="ts">
	import type { typeDatatable } from '$lib/index.js';
	import { Engine, functionCreateDatatable, RowsPerPage, Search, Sort } from '$lib/index.js';
	import { onMount } from 'svelte';

	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	let objectDatatable = $state(
		functionCreateDatatable({
			parData: data.arrayData,
			parSearchableColumns: ['id', 'brand', 'category', 'description'],
			parRowsPerPage: '10',
			parSortBy: 'id',
			parSearchString: '',
			parSortOrder: 'ascending',
		}),
	);
</script>

<Engine bind:propDatatable={objectDatatable} />

<p>
	<span>Search:</span>
	<Search bind:propDatatable={objectDatatable} propPlaceholder="Type here..." />
</p>
<p>
	<RowsPerPage bind:propDatatable={objectDatatable}>
		<option value="5">5</option>
		<option value="10">10</option>
		<option value="20">20</option>
		<option value="30">30</option>
		<option value="all">ALL</option>
	</RowsPerPage>
	<span>RESULTS PER PAGE</span>
</p>
<p>
	<!-- <Pagination bind:propDatatable={objectDatatable} propSize="small" /> -->
</p>

<table>
	<thead>
		<tr>
			<th>
				<Sort bind:propDatatable={objectDatatable} propColumn={'id'}>ID (click here)</Sort>
			</th>
			<th>
				<Sort bind:propDatatable={objectDatatable} propColumn={'brand'}>BRAND (click here)</Sort>
			</th>
			<th>CATEGORY</th>
			<th>DESCRIPTION</th>
			<th>STOCK</th>
		</tr>
	</thead>
	<tbody>
		{#each objectDatatable.arrayData as row}
			<tr>
				<td>{row.id}</td>
				<td>{row.brand}</td>
				<td>{row.category}</td>
				<td>{row.description}</td>
				<td>{row.stock}</td>
			</tr>
		{/each}
	</tbody>
</table>
