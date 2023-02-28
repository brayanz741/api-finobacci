const express = require('express');
const fibonnaciRoutes = require('./v1/routes/fibonacci.routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/v1/fibonacci', fibonnaciRoutes);

app.listen(PORT, () => {
	console.log(`Server up, go to http://localhost:${PORT}`);
});

/*function fibonacciGenerator(n) {
	for (let fibonacci = [0, 1], i = 2; i <= n; i++) {
		fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
	}

	return fibonacci.pop();
}

console.log(fibonacciGenerator(6));
*/
