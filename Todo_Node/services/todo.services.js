const todo = require('../model/todo.model');


class ToDoService {
    static async createTodo(userId, title, description) {
        const createdTodo = new todo({ userId, title, description });
        return await createdTodo.save();
    }
}

module.exports = new ToDoService;