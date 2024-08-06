<script lang="ts">
	import { Datatable, functionCreateDatatable, RowsPerPage, Search, Sort } from '$lib/index.js';

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

	let stateDatatable = $state(
		functionCreateDatatable({
			parData: arrayUsers,
			parSearchableColumns: ['name', 'city'],
			parRowsPerPage: '5',
			parSortBy: 'city',
			parSortOrder: 'ascending',
			parSearchString: '',
		}),
	);
</script>

<Datatable bind:propDatatable={stateDatatable}>
	<p>
		<span>Search:</span>
		<Search propPlaceholder="Type here..." />
	</p>

	<p>
		<RowsPerPage bind:propDatatable={stateDatatable}>
			<option value="5">5</option>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="30">30</option>
			<option value="all">ALL</option>
		</RowsPerPage>
		<span>RESULTS PER PAGE</span>
	</p>
	<p>
		<!--<Pagination bind:propDatatable={stateDatatable} propSize="small" />-->
	</p>

	<table>
		<thead>
			<tr>
				<th>
					<Sort bind:propDatatable={stateDatatable} propColumn={'id'}>ID (click here)</Sort>
				</th>
				<th>
					<Sort bind:propDatatable={stateDatatable} propColumn={'name'}>NAME (click here)</Sort>
				</th>
				<th>AGE</th>
				<th>CITY</th>
			</tr>
		</thead>
		<tbody>
			{#each stateDatatable.arrayData as row}
				<tr>
					<td>{row.id}</td>
					<td>{row.name}</td>
					<td>{row.age}</td>
					<td>{row.city}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</Datatable>
