/*
strings are just a variation of an array

Companies
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.



Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


Input: s = "ab##", t = "b"
Output: false
Explanation: s becomes "" while t becomes "b".


Input: s = "ab###b", t = "b"
Output: true
Explanation: s becomes "b" while t becomes "b".

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.


Follow up: Can you solve it in O(n) time and O(1) space?

What happens when two #'s appear beside each other -> delete the two values before the first #

what happens to # when there is no character to remove -> it deletes nothing then just like a backspace would

are two empty strings equal and return true? Yes

does case sensitivity matter -> yes it does matter
*/

const typedOutBrute = (s) => {
	const builtArr = [];
	// go through string and push in the array once it reaches # we pop the last element in array
	// do this loop for both strings
	// compare both strings to see if they are equal
	for (let i = 0; i < s.length; i++) {
		if (s[i] !== '#') {
			builtArr.push(s[i]);
		} else {
			builtArr.pop();
		}
	}
	return builtArr;
};

const compareBrute = (s, t) => {
	const finalArrS = typedOutBrute(s);
	const finalArrT = typedOutBrute(t);
	if (finalArrS.length !== finalArrT.length) {
		return false;
	} else {
		for (let p = 0; p < finalArrS.length; p++) {
			if (finalArrS[p] !== finalArrT[p]) {
				return false;
			}
		}
	}
	return true;
};

/*
since # will delete backwords we want to start are two pointer from the end of the strings
not the beginning. if we deleted forwards we would initialize the pointers at the beginning
of both strings
*/
const twoPointerTypedString = (s, t) => {
	let p1 = s.length - 1;
	let p2 = t.length - 1;

	while (p1 >= 0 || p2 >= 0) {
		if (s[p1] === '#' || t[p1] === '#') {
			if (s[p1] === '#') {
				let backCount = 2;
				while (backCount > 0) {
					p1--;
					backCount--;
					// we need to check if there are two or more # side by side
					if (s[p1] === '#') {
						backCount += 2;
					}
				}
			}
			if (t[p2] === '#') {
				let backCount = 2;
				while (backCount > 0) {
					p2--;
					backCount--;
					// we need to check if there are two or more # side by side
					if (t[p2] === '#') {
						backCount += 2;
					}
				}
			}
		} else {
			if (s[p1] !== t[p2]) {
				return false;
			} else {
				p1--;
				p2--;
			}
		}
	}
  return true
};
