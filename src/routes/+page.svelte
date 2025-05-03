<script lang="ts">
	import { functionCreateData, PaginationItems, RowsPerPage, Search, Sort } from '$lib/index.js';

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

	let data = functionCreateData({
		data: arrayUsers,
		searchableKeys: ['name', 'city'],
		rowsPerPage: '5',
		sortBy: 'city',
		sortOrder: 'ascending',
		searchString: '',
		activePage: 1,
	});
</script>

<div>
	<span>Search:</span>
	<Search {data} placeholder="Type here..." />
</div>

<br />

<div>
	<RowsPerPage {data}>
		<option value="5">5</option>
		<option value="10">10</option>
		<option value="20">20</option>
		<option value="30">30</option>
		<option value="all">ALL</option>
	</RowsPerPage>
	<span>RESULTS PER PAGE</span>
</div>

<br />

<div>
	<PaginationItems
		{data}
		propTag="button"
		propDisabledStyle="background: darkgrey;"
		propActiveStyle="background: blue;color:white;"
	/>
</div>

<br />

<table>
	<thead>
		<tr>
			<th>
				<Sort {data} key={'id'}>ID (click here)</Sort>
			</th>
			<th>
				<Sort {data} key={'name'}>NAME (click here)</Sort>
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

<br />

<div>
	SHOWING {data.firstRow} TO {data.lastRow} OF {data.searched.length} ITEMS
</div>
