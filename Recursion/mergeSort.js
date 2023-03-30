/*
divide and conquer approach (recursion)
*/

const mergeSort = (array) => {
	if (array.length === 1) {
		return array;
	}
	// split arr into left and right (slice 0 to mid for left and from mid to end for right)
	// need to calculate middle value of array

	const len = array.length;
	const middle = Math.floor(len / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);
	return merge(mergesort(left), mergeSort(right));
};

const merge = (left, right) => {
	const result = [];
	let leftIndex = 0;
	let rightIndex = 0;
  // while we have items in sub arrays
	while (leftIndex < left.length && rightIndex < right.length) {
		if (left[leftIndex] < right[rightIndex]) {
			result.push(left[leftIndex]);
			leftIndex++;
		} else {
			result.push(right[rightIndex]);
			rightIndex++;
		}
	}
};
