/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Input: nums = [], target = 1
Output: null
Input: nums = [1], target = 1
Output: null
Input: nums = [1,3,5], target = 25
Output: null

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Questions:
Are all the numbers postive or negative -> see Constraints
is there always a solution -> not always
any duplicate numbers -> no
what should we return if there is no solution -> return null
can there be multiple pairs that add to the target -> no, see constraint

*/
/* Time complexity = O(n^2)
   Space complexity = O(1)
*/
const twoSumBruteForce = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		const numberToFind = target - arr[i];
    // pointer 1 (i) + 1
		for (let j = i + 1; j < arr.length; j++) {
			if (numberToFind === arr[j]) {
				return [i, j];
			}
		}
	}
	return null;
};

console.log(twoSumBruteForce([1, 3, 5], 8));
