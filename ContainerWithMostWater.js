/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

Input: height = [1]
Output: 0

Input: height = []
Output: 0


Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104

Do the left and right side count as walls to form a container -> No
Can we pick two values if one value is higher in the middle -> Yes the value in middle does not affect container

greatest volume for possible container (get a max out of all possible containers)

area = l x w
min (a, b) x (bi - ai)

[7,1,2,3,9]
*/

const containerWithMostWaterBrute = (heights) => {
	// if array only has 1 or no elements return 0
	let maxArea = 0;
	// we actually don't need the if check as if the array is empty it will never go into the first or second for loop
	// same if array is length 1 it won't go in the second for loop
	// if (heights.length <= 1) {
	// 	return maxArea;
	// }

	for (let i = 0; i < heights.length; i++) {
		for (let j = i + 1; j < heights.length; j++) {
			// get area for current container then check if its larger than maxArea and set the value
			let currentArea = Math.min(heights[i], heights[j]) * (j - i);
			if (currentArea > maxArea) {
				maxArea = currentArea;
			}
		}
		return maxArea;
	}
};

console.log(containerWithMostWaterBrute([7, 1, 2, 3, 9]));

/*
initialize pointers at opposite ends of the area
we move the smaller value pointer upward because to get a larger area
the smaller value in min calc will be the one that directly impacts area getting bigger
 we need a larger minimum number
*/

const shiftPointersMostWater = (heights) => {
	let a = 0;
	let b = heights.length - 1;
	let maxArea = 0;

	while (a < b) {
		const currentArea = Math.min(heights[a], heights[b]) * (b - a);
		if (currentArea > maxArea) {
			maxArea = currentArea;
		}
		// we want to move the smaller pointer value we'll keep going until a == b then while stops
    // this is because smaller value we use in the min calculation directly affects area calc.
		if (heights[a] <= heights[b]) {
			a++;
		} else {
			b--;
		}
	}
	return maxArea;
};
