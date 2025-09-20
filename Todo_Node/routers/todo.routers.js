const router = require('express').Router();
const ToDoController = require('../controller/todo.controller');

router.post('/storeToDo', ToDoController.createTodo);
router.post('/getUserTodoList', ToDoController.getdata );
router.post('/deleteTodo', ToDoController.deleteData );

module.exports = router;

