const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/newToDo').on('connected', () => {
  console.log('Database connected successfully');
}).on('error', () => {
  console.log('Database connection error:');
});

module.exports = connection;