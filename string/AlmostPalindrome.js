/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.



Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.

do we consider a palindrome as almost palindrome -> Yes, return true if it is a palindrome already too
*/

const isSubPalindrome = (s, left, right) => {
	while (left <= right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
	return true;
};

const almostPalindrome = (s) => {
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

	// if the string values aren't equal we check each sub string if the left value + 1 with the right
	// and the left value and the right - 1 (excluding that character on the right side)
	// if either returns true we have a valid palindrome
	let left = 0;
	let right = s.length - 1;
	while (left <= right) {
		if (s[left] !== s[right]) {
			return (
				isSubPalindrome(s, left + 1, right) ||
				isSubPalindrome(s, left, right - 1)
			);
		}
		left++;
		right--;
	}
	return true;
};

console.log(almostPalindrome('abca'));
