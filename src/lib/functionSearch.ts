export const functionSearch = function <Generic>({
	data,
	string,
	keys,
}: {
	data: Generic[];
	string: string;
	keys?: (keyof Generic)[];
}) {
	const searchable = data.map((currentData) => {
		if (keys === undefined) {
			return {
				data: currentData,
				searchableString: '',
			};
		}
		const arraySelected = keys.map((currentKey) => currentData[currentKey]);
		return {
			data: currentData,
			searchableString: arraySelected.join(' ').toLowerCase(),
		};
	});

	const results = searchable.filter((current) =>
		current.searchableString.includes(string.toLocaleLowerCase()),
	);
	return results.map((current) => current.data);
};
