/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.



Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.


Constraints:

The number of the nodes in the list is in the range [0, 104].
-105 <= Node.val <= 105
pos is -1 or a valid index in the linked-list.

*/

const findCycle = (head) => {
	let currentNode = head;
	let seenNodes = new Set();
	// we want to continue thru the linkedList until we see that the result is in the set
	while (!seenNodes.has(currentNode)) {
		// check if there is a null for current Node since that is the tail return false no cycle
		if (currentNode.next === null) {
			return false;
		}
		// add currentNode to seen
		seenNodes.add(currentNode);
		currentNode = currentNode.next;
	}
	return currentNode;
};

const findCycleHareTortoise = (head) => {
	let hare = head;
	let tortoise = head;
	// hare checks for tail since it moves faster
	// keep looping until find either of two cases and break out
	while (true) {
		hare = hare.next;
		tortoise = tortoise.next;
		// has a tail, no cycle
		if (hare === null || hare.next === null) {
			return false;
		} else {
			// move hare another step (2 steps total)
			hare = hare.next;
		}
    // need this condition here and not for while condition because
    // at the beginning of the loop this will be true and it will break
    // so need to advance hare first 
		if (tortoise === hare) {
			// cycle found
			break;
		}
	}
	let p1 = head;
	let p2 = hare;
	// advance pointers until they meet (start node and meeting point)
	while (p1 !== p2) {
		p1 = p1.next;
		p2 = p2.next;
	}
  // return either p1 or p2
	return p1;
};
