<script lang="ts">
	import {
		Datatable,
		functionCreateDatatable,
		PaginationItems,
		RowsPerPage,
		Search,
		Sort,
	} from '$lib/index.js';
	import type { PageData } from './$types.js';

	const { data }: { data: PageData } = $props();

	let stateDatatable = $state(
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

<Datatable bind:propDatatable={stateDatatable}>
	<p>
		<span>Search:</span>
		<Search propPlaceholder="Type here..." />
	</p>
	<p>
		<RowsPerPage>
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="30">30</option>
			<option value="all">ALL</option>
		</RowsPerPage>
		<span>RESULTS PER PAGE</span>
	</p>
	<p>
		<PaginationItems
			propTag="button"
			propDisabledStyle="background: darkgrey;"
			propActiveStyle="background: blue;color:white;"
		/>
	</p>
	<table>
		<thead>
			<tr>
				<th>
					<Sort propDatatable={stateDatatable} propColumn={'id'}>ID (click here)</Sort>
				</th>
				<th>
					<Sort propDatatable={stateDatatable} propColumn={'brand'}>BRAND (click here)</Sort>
				</th>
				<th>CATEGORY</th>
				<th>DESCRIPTION</th>
				<th>STOCK</th>
			</tr>
		</thead>
		<tbody>
			{#each stateDatatable.arrayData as row}
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
</Datatable>
<p>
	SHOWING {stateDatatable.numberFirstRow} TO {stateDatatable.numberLastRow} OF {stateDatatable
		.arraySearched.length} ITEMS
</p>
