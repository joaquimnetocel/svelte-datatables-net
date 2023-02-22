export type typeDatatable<Generic> = {
	arrayRawData: Generic[];
	arraySorted: Generic[];
	arraySearched: Generic[];
	arrayData: Generic[];
	stringSortBy: keyof Generic | undefined;
	stringSortOrder: 'ascending' | 'descending';
	stringRowsPerPage: `${number}` | 'all';
	numberRowsPerPage: number;
	numberActivePage: number;
	numberFirstRow: number;
	numberLastRow: number;
	stringSearchString: string;
	arraySearchableColumns: (keyof Generic)[] | undefined;
	functionSort: (a: Generic, b: Generic) => number;
};
