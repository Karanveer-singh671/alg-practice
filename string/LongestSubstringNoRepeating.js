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

/*
sliding window vs 2 pointer
sliding window -> for a window over some porition of sequetial data then move that window
throughout the data to capture different parts of it.

"abcabcbb"

use sliding window to represent the current substring
the size of the window will increase based on the new character
and decrease based of characters seen before
seen characters hashmap keeps track of what character's we've seen and the index we saw them at
*/

const optimalSlidingSubstring = (s) => {
  // hcek if the string is <= 1
  if (s.length <= 1) return s.length
  let longest = 0
  let left = 0
  let seen = {}
  for (let right = 0; right < s.length; right++) {
    const currentChar = s[right]
    const prevSeenChar = seen[currentChar]
    // if this is undefined we have not seen it if it has value we have
    // we want to make sure that the previous seen char is greater than the left pointer
    // if it is greater we want to move the left pointer to the prev seen char + 1
    // so that we can find the substring that hasn't been duplicated
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1
    }
      // add the value of string as key and add index as value for map
   seen[currentChar] = right
   longest  = Math.max(longest, right - left + 1)
  }
  return longest
}