const express = require('express');

const router = express.Router();
const expenseController = require('../Controllers/expenses');

router.get ('/', expenseController.getExpenses);

router.post ('/', expenseController.addExpense);

router.delete ('/:eId', expenseController.deleteExpense);


module.exports = router;