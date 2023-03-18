/*
Given a string s, find the length of the longest
substring
 without repeating characters.



Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.


is the substring contiguous (sequencial and no breaks) -> yes, look for a substring not a subsequence
Does case sensitivity matter -> No
*/

const bruteForceLongestSubstring = (str) => {
	if (str.length <= 1) {
		return s.length;
	}
	const longest = 0;
	for (let left = 0; left < str.length; left++) {
		let seenChars = {};
		let currentLength = 0;
		for (let right = left; right < str.length; right++) {
			const currentChar = str[right];
			// if the character hasn't been seen in the substring add it to map and set it to seen (true)
			// increment length and set longest to be max of longest and currentLength
      // otherwise we break from the second loop and the seenChars is reset and the first for loop
      // is incremented to the next value
			if (!seenChars[currentChar]) {
				currentLength++;
				seenChars[currentChar] = true;
				longest = Math.max(longest, currentLength);
			} else {
				break;
			}
		}
	}
};
