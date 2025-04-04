// run node server before client: node server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://localhost/mern-stack-db', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes and middleware
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Create a Database and Define a Model
const todoSchema = new mongoose.Schema({
    task: String,
    completed: Boolean,
  });

const Todo = mongoose.model('Todo', todoSchema);

// Get todos
app.get('/todos', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// CRUD
// Create a new todo
app.post('/todos', async (req, res) => {
  const newTodo = new Todo(req.body);
  await newTodo.save();
  res.json(newTodo);
});
// Update an existing todo
app.put('/todos/:id', async (req, res) => {
  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedTodo);
});
// Delete a todo
app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndRemove(req.params.id);
  res.json({ message: 'Todo deleted successfully' });
});