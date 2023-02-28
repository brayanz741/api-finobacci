async function getValueFibonacci(index) {
	let fibonacci = [0, 1];
	for (i = 2; i <= index; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}

	return fibonacci.pop();
}

module.exports = {
	getValueFibonacci,
};
