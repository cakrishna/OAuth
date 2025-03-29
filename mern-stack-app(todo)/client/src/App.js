// Run node server before client: node server.js
// Run Clint using: npm start
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import './App.css'; // Import the custom styles

const App = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    // Fetch data from the Express server
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);
  
  // Include TodoForm
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <h1>MERN Stack Todo App</h1>
      <TodoForm onAdd={addTodo} />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;