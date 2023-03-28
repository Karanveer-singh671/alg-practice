/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.



Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]


Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n


Will m and n always be within the bounds of the linkedlist -> yes, 1 <= m <= n <= length of linkedList
can we receive m and n values for the whole linkedList -> yes

m - 1 represents 1 node before node that is to be reversed (the pointer to the next will be to the reversed node)
m is where we start our reversal (this becomes the tail value)
n is the end of our reversal (tail)
n + 1 is where the LinkedList is staying the same (tail next pointer)
keep track of position, and current node we are operating on

*/

const specificReversal = (head, m, n) => {
	let currentPos = 1;
	let currentNode = head;
	// last node before start of reversal
	let start = head;
	// once current position is at m we want to perform a reversal of the sub linkedList
	while (currentPos < m) {
		// if m = 3 and n = 4 for example, start will point to 2, currentNode will be 3, and currentPos will be 3
		// then while loop exits
		start = currentNode;
		currentNode = currentNode.next;
		currentPos++;
	}
	// list so far
	let newList = null;
	// when the while loop breaks the currentNode at 3 will be the tail after the reversal is performed
	let tail = currentNode;
	// only operate within the boundary specified
	while (currentPos >= m && currentPos <= n) {
		// save next value
		const next = currentNode.next;
		// the next poitner of currentNode will point to the list built so far
		currentNode.next = newList;
		// store the currentNode value for the newList
		newList = currentNode;
		// move the currentNode using the next pointer
		currentNode = next;
		currentPos++;
	}
	// when while loop ends we know the rest of the list will remain the same
	// set start next pointer to be list built so far
	start.next = newList;
	// set tail next pointer to be the currentNode after the reversal is complete
	tail.next = currentNode;
	// if m is > 1 we return the head node but if it is equal to 1 we want to return the newList
	// this is because we would be reversing the first node head and it would be at the n position (tail position)
	if (m > 1) {
		return head;
	} else {
		return newList;
	}
};
