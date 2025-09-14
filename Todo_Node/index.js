const app = require('./app');
const db = require('./config/db');
const userModel = require('./model/user.model');
const todoModel = require('./model/todo.model');

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!!!');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});