const ToDoService = require('../services/todo.services');


exports.createTodo = async (req, res) => {
    try {
        const { userId, title, desc } = req.body;
        let newTodo = await ToDoService.createTodo(userId, title, desc);
        res.json({status: true, success: newTodo});
    }catch (error) {
        
        new error(error);
    }
}

exports.getdata = async(req, res) =>{
    try {
        const { userId }= req.body;
        let newTodo = await ToDoService.fatchtodo(userId);
        res.json({status: true, success: newTodo});
    }catch (error) {
        
        new error(error);
    }
}

exports.deleteData = async(req, res) =>{
    try {
        const { id }= req.body;
        let newTodo = await ToDoService.deletetodo(id);
        res.json({status: true, success: newTodo});


    }catch (error) {
        
        new error(error);
    }
}