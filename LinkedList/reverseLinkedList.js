/*
reverse a linkedList

what do we return if we get null or a single node -> return null and node back respectively
*/

const reverseLinkedListSkeleton = (head) => {
	// initialize currentNode and while loop to go thru LinkedList
	let currentNode = head;
	while (currentNode) {
		// perform operation

		// increment to next node
		currentNode = currentNode.next;
	}
};

const reverseLinkedList = (head) => {
	// initialize currentNode and while loop to go thru LinkedList
	let current = head;
	let prev = null;
	while (current) {
		// keep track of the next node we are going to work on
		let next = current.next;
		// next of the current (pointer) should point to the previous value
		current.next = prev;

		// we want to now set previous (accumulated list answer) to be the current
		prev = current;

		// now we want to update our current to be the next value for the next iteration of the loop
		current = next;
	}

	// previous will hold the linkedList we created thus far
	return prev;
}