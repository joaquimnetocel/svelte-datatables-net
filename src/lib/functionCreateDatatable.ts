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
	parActivePage?: number;
};

export const functionCreateDatatable = function <Generic>({
	parData,
	parSearchableColumns = undefined,
	parSearchString = '',
	parRowsPerPage = 'all',
	parSortBy,
	parSortOrder = 'ascending',
	parSortFunction,
	parActivePage = 1,
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

	const arraySorted = parData.sort(parSortFunction);
	const arraySearched = functionSearch(arraySorted, parSearchString, parSearchableColumns);
	const numberRowsPerPage =
		parRowsPerPage === 'all' ? arraySearched.length : parseInt(parRowsPerPage);
	const numberLastPage = Math.ceil(arraySearched.length / numberRowsPerPage);
	const numberActivePage = parActivePage > numberLastPage ? 1 : parActivePage;

	return {
		arrayRawData: parData,
		stringSortBy: parSortBy,
		arraySorted,
		arraySearched,
		arrayData: arraySearched.slice(0, numberRowsPerPage),
		stringRowsPerPage: parRowsPerPage,
		numberRowsPerPage,
		numberLastPage,
		numberActivePage,
		numberFirstRow: (numberActivePage - 1) * numberRowsPerPage + 1,
		numberLastRow: Math.min(arraySearched.length, numberActivePage * numberRowsPerPage),
		stringSearchString: parSearchString,
		arraySearchableColumns: parSearchableColumns,
		stringSortOrder: parSortOrder,
		functionSort: parSortFunction,
	};
};
