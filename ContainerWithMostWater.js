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
	if (heights.length <= 1) {
		return maxArea;
	}

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
