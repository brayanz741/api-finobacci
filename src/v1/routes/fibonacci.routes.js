const express = require('express');
const fibonacciController = require('../../controllers/fibonacci.controller');
const router = express.Router();

router.route('/:index').get(async (req, res) => {
	try {
		const index = req.params.index;
		const getValueFibonacci = await fibonacciController.getValueFibonacci(index);
		res.status(200).send({ status: 'OK', data: getValueFibonacci });
	} catch (error) {
		console.log(error);
	}
});

module.exports = router;
