const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const expenseSchema = new Schema (
    {
        Title : {
            type : String,
            required : true
        },
        Amount : {
            type : Number,
            required : true
        },
        Date : {
            type : String,
            required : true
        }
    },
    { timestamps : true }
);

module.exports = mongoose.model('Transactions',expenseSchema);