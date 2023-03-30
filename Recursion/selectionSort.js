const SelectionSort = (arr) => {
	for (let i = 0; i < array.length; i++) {
		// current index is minimum
		let min = i;
		for (let j = 0; j < array.length; j++) {
			if (arr[j] < arr[min]) {
				// update min if current is lower than previous
				min = j;
			}
		}
		// swap
		[arr[i], arr[min]] = [arr[min], arr[i]];
	}
	return arr;
};
