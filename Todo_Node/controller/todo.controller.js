const ToDoService = require('../services/todo.services');

exports.createTodo = async (req, res) => {
    try {
        const { userId, title, description } = req.body;
        let newTodo = await ToDoService.createTodo(userId, title, description);
        res.json({status: true, success: newTodo});
    }catch (error) {
        new error(error);
    }
}

