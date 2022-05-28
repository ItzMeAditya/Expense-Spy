const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const expenseRoutes = require('./Routes/expenses');

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/expenses',expenseRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message, success : false });
});

mongoose
  .connect(
    'mongodb+srv://Aditya:Adi11102002@cluster0.xp02h.mongodb.net/expenses?retryWrites=true'
  )
  .then(() => {
    app.listen(2000, console.log('Connected'));
  })
  .catch(err => console.log(err));