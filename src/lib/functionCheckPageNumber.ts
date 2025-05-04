export function functionCheckPageNumber(value: number, max: number) {
	return Number.isInteger(value) && value >= 1 && value <= max;
}
