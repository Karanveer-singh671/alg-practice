/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.


Constraints:

1 <= s.length <= 105
s[i] is either'(' , ')', or lowercase English letter.

what do we return from our alg -> return valid string with fewest brackets removed.
will there be spaces in the string -> no
is a string containing only lowercase characters valid -> yes

store indexes in stack at where the left brackets are
if no left brackets and see a right bracket then need to remove bracket since no matching bracket
*/

const removeMinBrackets = (s) => {
	const response = s.split('');
	const stack = [];
	for (let i = 0; i < response.length; i++) {
		if (response[i] === '(') {
			// push index to stack
			stack.push(i);
		} else if (response[i] === ')' && stack.length) {
			// when the stack isn't empty and see a closing bracket we pop from stack
			stack.pop();
		} else if (response[i] === ')') {
			// set the character to empty string since stack length is 0 we want to remove this character from the string
			response[i] = '';
		}
	}
	// any invalid brackets that haven't been closed
	while (stack.length !== 0) {
		const currentIndex = stack.pop();
		// set that index value in the array to be ''
		response[currentIndex] = '';
	}
  // join the string at the end
	return response.join('');
};
