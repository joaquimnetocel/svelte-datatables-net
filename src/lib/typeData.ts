export type typeData<Generic> = {
	original: Generic[];
	sorted: Generic[];
	searched: Generic[];
	paginated: Generic[];
	rowsPerPageString: string;
	rowsPerPage: number;
	lastPage: number;
	activePage: number;
	firstRow: number;
	lastRow: number;
	searchString: string;
	searchableKeys: (keyof Generic)[] | undefined;
	sortFunction: (a: Generic, b: Generic) => number;
	sortBy: keyof Generic | undefined;
	sortOrder: 'ascending' | 'descending';
};
