import { functionSearch } from './functionSearch.js';
import type { typeDatatable } from './typeDatatable.js';

type typeParameters<Generic> = {
	parData: Generic[];
	parSearchableColumns?: (keyof Generic)[];
	parSearchString?: string;
	parRowsPerPage?: `${number}` | 'all';
	parSortBy?: keyof Generic;
	parSortOrder?: 'ascending' | 'descending';
	parSortFunction?: (a: Generic, b: Generic) => number;
};

export const functionCreateDatatable = function <Generic>({
	parData,
	parSearchableColumns = undefined,
	parSearchString = '',
	parRowsPerPage = 'all',
	parSortBy,
	parSortOrder = 'ascending',
	parSortFunction,
}: typeParameters<Generic>): typeDatatable<Generic> {
	if (parSortFunction === undefined) {
		const sortModifier = parSortOrder === 'ascending' ? 1 : -1;
		const functionDefaultSortFunction = function (elementA: Generic, elementB: Generic) {
			if (parSortBy === undefined) {
				return 0;
			}
			if (elementA[parSortBy] < elementB[parSortBy]) {
				return -1 * sortModifier;
			}
			if (elementA[parSortBy] > elementB[parSortBy]) {
				return 1 * sortModifier;
			}
			return 0;
		};
		parSortFunction = functionDefaultSortFunction;
	}

	const objectSorted = parData.sort(parSortFunction);
	const objectSearched = functionSearch(objectSorted, parSearchString, parSearchableColumns);
	const numberRowsPerPage =
		parRowsPerPage === 'all' ? objectSearched.length : parseInt(parRowsPerPage);

	return {
		arrayRawData: parData,
		arraySorted: objectSorted,
		arraySearched: objectSearched,
		arrayData: objectSearched.slice(0, numberRowsPerPage),
		stringSortBy: parSortBy,
		stringRowsPerPage: parRowsPerPage,
		numberRowsPerPage: numberRowsPerPage,
		numberActivePage: 1,
		numberFirstRow: 0,
		numberLastRow: numberRowsPerPage,
		stringSearchString: parSearchString,
		arraySearchableColumns: parSearchableColumns,
		stringSortOrder: parSortOrder,
		functionSort: parSortFunction,
	};
};
