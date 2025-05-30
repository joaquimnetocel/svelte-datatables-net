import { functionCheckPageNumber } from './functionCheckPageNumber.js';
import { functionSearch } from './functionSearch.js';
import type { typeData } from './typeData.js';

export const createData = function <Generic>({
	data,
	searchableKeys = undefined,
	searchString = '',
	rowsPerPage = 'all',
	sortBy,
	sortOrder = 'ascending',
	sortFunction,
	activePage = 1,
}: {
	data: Generic[];
	searchableKeys?: (keyof Generic)[];
	searchString?: string;
	rowsPerPage?: `${number}` | 'all';
	sortBy?: keyof Generic;
	sortOrder?: 'ascending' | 'descending';
	sortFunction?: (a: Generic, b: Generic) => number;
	activePage?: number;
}): typeData<Generic> {
	if (sortFunction === undefined) {
		const sortModifier = sortOrder === 'ascending' ? 1 : -1;
		const functionDefaultSortFunction = function (elementA: Generic, elementB: Generic) {
			if (sortBy === undefined) {
				return 0;
			}

			if (typeof elementA[sortBy] === 'string' && typeof elementB[sortBy] === 'string') {
				return elementA[sortBy].localeCompare(elementB[sortBy]);
			}

			if (elementA[sortBy] < elementB[sortBy]) {
				return -1 * sortModifier;
			}
			if (elementA[sortBy] > elementB[sortBy]) {
				return 1 * sortModifier;
			}
			return 0;
		};
		sortFunction = functionDefaultSortFunction;
	}

	const searched = functionSearch({
		data,
		string: searchString,
		keys: searchableKeys,
	});

	const sorted = searched.sort(sortFunction);

	const numericRowsPerPage = rowsPerPage === 'all' ? sorted.length : parseInt(rowsPerPage);
	const lastPage = Math.ceil(Math.max(1, sorted.length) / Math.max(1, numericRowsPerPage));

	const objeto = {
		original: data,
		sorted,
		searched,
		paginated: sorted.slice(0, numericRowsPerPage),
		rowsPerPageString: rowsPerPage,
		rowsPerPage: numericRowsPerPage,
		lastPage,
		activePage: functionCheckPageNumber(activePage, lastPage) ? activePage : 1,
		firstRow: numericRowsPerPage === 0 ? 0 : (activePage - 1) * numericRowsPerPage + 1,
		lastRow: Math.min(sorted.length, activePage * numericRowsPerPage),
		searchString,
		searchableKeys,
		sortFunction,
		sortBy,
		sortOrder,
	};

	const estado = $state<typeData<Generic>>(objeto);

	$effect(() => {
		estado.searched = functionSearch({
			data: estado.original,
			string: estado.searchString,
			keys: estado.searchableKeys,
		});
	});
	$effect(() => {
		estado.sorted = estado.searched.sort(estado.sortFunction);
	});
	$effect(() => {
		estado.rowsPerPage =
			estado.rowsPerPageString === 'all'
				? estado.sorted.length
				: parseInt(estado.rowsPerPageString);
		estado.firstRow =
			estado.rowsPerPage === 0 ? 0 : (estado.activePage - 1) * estado.rowsPerPage + 1;
		estado.lastRow = Math.min(estado.sorted.length, estado.activePage * estado.rowsPerPage);
		estado.paginated = estado.sorted.slice(estado.firstRow - 1, estado.lastRow);
		estado.lastPage = Math.ceil(
			Math.max(1, estado.sorted.length) / Math.max(1, estado.rowsPerPage),
		);
	});

	return estado;
};
