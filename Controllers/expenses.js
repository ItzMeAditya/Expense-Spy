const Expense = require('../Models/Expense');
const mongoose = require('mongoose');

exports.getExpenses = (req,res,next) => {
    Expense.find()
        .then(expenses => {
            res.status(200).json({
                message : "Transactions Fetched",
                success : true,
                data : expenses
            })
        })
        .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
        });
}


exports.addExpense = (req,res,next) => {
    const title = req.body.title;
    const amount = req.body.amount;
    const date = new Date(req.body.date);
    const expense = new Expense ({
        Title : title,
        Amount : amount,
        Date : date
    });
    expense.save()
        .then(result => {
            res.status(201).json({
                message : 'Transaction added successfully',
                success : true,
                data : result
            })
        })
        .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
        });
}

exports.deleteExpense = (req,res,next) => {
    const eId = req.params.eId;
    Expense.findByIdAndRemove(eId)
        .then(result=>{
            res.status(200).json({
                message : 'Transaction deleted',
                success : true
            })
        })
        .catch((err) => {
            if (!err.statusCode) {
              err.statusCode = 404;
            }
            next(err);
        });
}