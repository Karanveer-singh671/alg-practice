const quickSort = (array, left, right) => {
	// if left is same as right then 1 element do not wanna perform quicksort
	if (left < right) {
		const partitionIndex = partition(array, left, right);
		quickSort(array, left, partitionIndex - 1);
		quickSort(array, partitionIndex + 1, right);
	}
};

const paritition = (array, left, right) => {
	const pivotElement = array[right];
	let partitionIndex = left;
	for (let j = left; j < right; j++) {
		if (array[j] < pivotElement) {
			// perform swap and then increment partitionIndex after a swap occurs
			swap(array, partitionIndex, j);
			partitionIndex++;
		}
	}
	swap(array, partitionIndex, right);
	return partitionIndex;
};

const swap = (array, i, j) => {
	return ([array[i], array[j]] = [array[j], array[i]]);
};
