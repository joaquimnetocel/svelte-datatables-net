import type { PageLoad } from './$types.js';

type typeData = {
	brand: string;
	category: string;
	description: string;
	discountPercentage: number;
	id: number;
	images: string[];
	price: number;
	rationg: number;
	stock: number;
	thumbnail: string;
	title: string;
};

export const load = (async ({ fetch }) => {
	const responseData = await fetch('https://dummyjson.com/products');
	const jsonData = await responseData.json();
	const arrayData = jsonData.products as typeData[];

	return {
		arrayData,
	};
}) satisfies PageLoad;
