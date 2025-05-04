<script lang="ts">
	import { createData, Pagination, RowsPerPage, Search, Sort } from '$lib/index.js';

	const arrayUsers = [
		{ id: 9, name: 'Denzel', age: 24, city: 'Newcastle' },
		{ id: 12, name: 'Olga', age: 35, city: 'Las Cruces' },
		{ id: 13, name: 'Barry', age: 27, city: 'Newport' },
		{ id: 10, name: 'Anthony', age: 47, city: 'Los Banos' },
		{ id: 2, name: 'Mary', age: 45, city: 'Los Angeles' },
		{ id: 1, name: 'John', age: 21, city: 'New York' },
		{ id: 3, name: 'Mark', age: 23, city: 'Boston' },
		{ id: 5, name: 'Brian', age: 22, city: 'New Orleans' },
		{ id: 14, name: 'Larry', age: 41, city: 'Los Altos' },
		{ id: 4, name: 'Cris', age: 32, city: 'Las Vegas' },
		{ id: 6, name: 'Stuart', age: 46, city: 'Los Gatos' },
		{ id: 7, name: 'Owen', age: 24, city: 'Boston' },
		{ id: 8, name: 'Paul', age: 33, city: 'Las Vegas' },
		{ id: 11, name: 'Fred', age: 25, city: 'Boston' },
		{ id: 15, name: 'Richard', age: 29, city: 'Boston' },
		{ id: 16, name: 'Bruna', age: 31, city: 'Las Vegas' },
	];

	let data = createData({
		data: arrayUsers,
		searchableKeys: ['name', 'city'],
		rowsPerPage: '5',
		sortBy: 'city',
		searchString: '',
		sortOrder: 'ascending',
		activePage: 1,
	});
</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="container-sm">
	<div class="mx-3">
		<!-- SEARCH & RESULTS PER PAGE -->
		<div class="row align-items-center mb-2">
			<div class="col-12 col-md-6 text-md-start text-center mb-1 mb-md-0">
				<div class="d-md-flex align-items-md-center">
					<span class="me-1">Search:</span>
					<Search {data} placeholder="Type here..." class="form-control form-control-sm" />
				</div>
			</div>
			<div class="col-12 col-md-6 text-md-end text-center">
				<RowsPerPage {data} class="d-inline form-select form-select-sm w-auto">
					<option value="5">5</option>
					<option value="10">10</option>
					<option value="20">20</option>
					<option value="30">30</option>
					<option value="all">ALL</option>
				</RowsPerPage>
				<span>RESULTS PER PAGE</span>
			</div>
		</div>
		<!---->

		<!-- PAGINATION -->
		<div class="d-flex justify-content-center justify-content-md-end">
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<Pagination
						{data}
						current={1}
						onchange={(par) => {
							data.activePage = par;
						}}
						styleActive="background-color:lightblue; padding:0px 10px;"
						threshold={10}
						classWrapper="pagination"
						classDisabled="disabled"
						classActive="active"
						class="page-link"
					/>
				</ul>
			</nav>
		</div>
		<!---->

		{#if data.searched.length === 0}
			<div class="text-center mt-5"><strong>NO RECORDS FOUND.</strong></div>
		{:else}
			<!-- TABLE -->
			<table class="table table-striped table-sm">
				<thead>
					<tr>
						<th>
							<Sort {data} key={'id'}>ID</Sort>
						</th>
						<th>
							<Sort {data} key={'name'}>NAME</Sort>
						</th>
						<th>AGE</th>
						<th>CITY</th>
					</tr>
				</thead>
				<tbody>
					{#each data.paginated as row}
						<tr>
							<td>{row.id}</td>
							<td>{row.name}</td>
							<td>{row.age}</td>
							<td>{row.city}</td>
						</tr>
					{/each}
				</tbody>
			</table>
			<!---->
		{/if}
		<div>
			SHOWING {data.firstRow} TO {data.lastRow} OF {data.searched.length} ITEMS
		</div>
	</div>
</div>
