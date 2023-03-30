/*
regular recursion space O(n)
tail recursion space O(1)
*/
// can modify this solution to keep tail recursion in mind
// differs on language (some language engines e.g JS engine doesn't support tail recursion)
// even if write recursion function with tail recursion won't get O(1) because engine doesn't know
// how to handle that optimization
const recFactorial = (x) => {
	// base base
	if (x <= 1) {
		return 1;
	} else {
		return x * recFactorial(x - 1);
	}
};
// just returning next tail factorial not adding more calls to stack
// if you have solt that by default is going to take O(n) space anyway tail recursion won't optimize e.g data structure
// only if no D.S and only call stack is O(n) then can improve
const tailOpt = (x, totalSoFar) => {
	if (x === 0) {
		return totalSoFar;
	} else {
		return tailOpt(x - 1, totalSoFar * x);
	}
};
