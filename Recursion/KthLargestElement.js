/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

You must solve it in O(n) time complexity.



Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4


Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/
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
// O(nlogn)
const getKthLargest = (array, k) => {
	const indexToFind = array.length - k;
	quickSort(array, 0, array.length - 1);
	return array[indexToFind];
};
