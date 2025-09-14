const router = require('express').Router();
const ToDoController = require('../controller/todo.controller');

router.post('/storeToDo', ToDoController.createTodo) 

module.exports = router;

