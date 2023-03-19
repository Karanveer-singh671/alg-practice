/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.

does capitalization matter -> No
is empty string a palindrome -> No
does spacing matter -> No

can use two pointer 1 at begining and 1 at end of string and move inwards
can use two pointers at center and move outwards
can make a copy of string and reverse the original for the copy and do a comparision
forwards for each
*/

const validPalindromeTwoPointerEnds = (s) => {
	if (s.length <= 1) {
		return true;
	}
	// regex to replace anything that is not alphanumeric and toLowerCase
	s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
	let left = 0;
	let right = s.length - 1;
	while (left <= right) {
		if (s[left] !== s[right]) {
			return false;
		}
		left++;
		right--;
	}
  return true
};

