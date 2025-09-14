const express = require('express');
const body_parser = require('body-parser');
const UserRouter = require('./routers/user.routers');
const ToDoRouter = require('./routers/todo.routers');

const app = express();
app.use(body_parser.json());
app.use('/', UserRouter);
app.use('/', ToDoRouter);

module.exports = app;