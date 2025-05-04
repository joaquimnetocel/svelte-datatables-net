<script lang="ts">
	import { createData, Pagination, RowsPerPage, Search, Sort } from '$lib/index.js';
	import type { PageProps } from './$types.js';

	const { data }: PageProps = $props();

	let statedata = createData({
		data: data.arrayData,
		searchableKeys: ['id', 'brand', 'category', 'description'],
		rowsPerPage: '10',
		sortBy: 'id',
		searchString: '',
		sortOrder: 'ascending',
	});
</script>

<p>
	<span>Search:</span>
	<Search placeholder="Type here..." data={statedata} />
</p>
<p>
	<RowsPerPage data={statedata}>
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
		data={statedata}
		current={1}
		onchange={(par) => {
			statedata.activePage = par;
		}}
		threshold={10}
		styleDisabled="background: darkgrey;"
		styleActive="background: blue;color:white;"
	/>
</p>
<table>
	<thead>
		<tr>
			<th>
				<Sort data={statedata} key={'id'}>ID (click here)</Sort>
			</th>
			<th>
				<Sort data={statedata} key={'brand'}>BRAND (click here)</Sort>
			</th>
			<th>CATEGORY</th>
			<th>DESCRIPTION</th>
			<th>STOCK</th>
		</tr>
	</thead>
	<tbody>
		{#each statedata.paginated as row}
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
<p>
	SHOWING {statedata.firstRow} TO {statedata.lastRow} OF {statedata.searched.length} ITEMS
</p>
