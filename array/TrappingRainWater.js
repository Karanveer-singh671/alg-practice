/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Input: height = [3,4,3]
Output: 0

Input: height = []
Output: 0
Input: height = [1]
Output: 0

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

do the left and right sides of the graph count as walls -> No
Will there be negative integers -> assume integers positive

we need to find the water at any particular block by checking the value max on the left side of it
and the max on the right side of it! we can then calculate at any given point the water for that block
currentWater = min(maxLeft, maxRight) - currentHeight
*/

const trappingRainWaterBrute = (heights) => {
	let totalWater = 0;
	for (let i = 0; i < heights.length; i++) {
		let leftPointer = i;
		let rightPointer = i;
		let maxLeft = 0;
		let maxRight = 0;
		// to get the maxLeft we will  get the max from the maxLeft and the current leftPointer value
		// then decrement leftPointer si that it keeps checking the next value to the left of current etc.
		while (leftPointer >= 0) {
			maxLeft = Math.max(maxLeft, heights[leftPointer]);
			leftPointer--;
		}
		// we start the right pointer at the same place as the left and go rightward
		while (rightPointer <= heights.length) {
			maxRight = Math.max(maxRight, heights[rightPointer]);
			rightPointer++;
		}
		const currentWater = Math.min(maxLeft, maxRight) - heights[i];
		if (currentWater >= 0) {
			totalWater = totalWater + currentWater;
		}
	}
	return totalWater;
};

const trappingRainWaterTwoPointer = (heights) => {
	leftPointer = 0;
	rightPointer = heights.length - 1;
	let totalWater = 0;
	let maxLeft = 0;
	let maxRight = 0;
	while (leftPointer < rightPointer) {
		let currentLeftHeight = heights[leftPointer];
		let currentRightHeight = heights[rightPointer];
		if (currentLeftHeight <= currentRightHeight) {
			if (currentLeftHeight > maxLeft) {
				maxLeft = currentLeftHeight;
			} else {
				totalWater = totalWater + (maxLeft - currentLeftHeight);
			}
			leftPointer++;
		} else {
			if (currentRightHeight > maxRight) {
				maxRight = currentRightHeight;
			} else {
				totalWater = totalWater + (maxRight - currentLeftHeight);
			}
			rightPointer--;
		}
	}
	return totalWater;
};

console.log(trappingRainWaterTwoPointer[(0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2)]);
