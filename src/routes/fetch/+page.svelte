<script lang="ts">
	import {
		Datatable,
		functionCreateDatatable,
		Pagination,
		RowsPerPage,
		Search,
		Sort,
	} from '$lib/index.js';
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

<Datatable bind:propDatatable={objectDatatable}>
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
		<Pagination
			propTag="button"
			propDisabledStyle="background: darkgrey;"
			propActiveStyle="background: blue;color:white;"
		/>
	</p>
	<table>
		<thead>
			<tr>
				<th>
					<Sort propDatatable={objectDatatable} propColumn={'id'}>ID (click here)</Sort>
				</th>
				<th>
					<Sort propDatatable={objectDatatable} propColumn={'brand'}>BRAND (click here)</Sort>
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
</Datatable>
