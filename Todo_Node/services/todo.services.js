const todo = require('../model/todo.model');


class ToDoService {
    static async createTodo(userId, title, desc) {
        const createdTodo = new todo({ userId, title, desc });
        return await createdTodo.save();
    }

    static async fatchtodo(userId) {
        const fatchtodo = await todo.find({ userId });
        return  fatchtodo;
    }


    static async deletetodo(id) {
        const deletetodo = await todo.findByIdAndDelete({_id:id});
        return  deletetodo;
    }
}

module.exports = ToDoService;