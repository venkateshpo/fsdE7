import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "React",
      completed: false
    },
    {
      id: 2,
      text: "Express",
      completed: false
    },
    {
      id: 3,
      text: "Node",
      completed: false
    }
  ]);

  const [task, setTask] = useState("");

  // Add Todo
  const addTodo = () => {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  // Remove Todo
  const removeTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  // Toggle completed status
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />

            <span>
              {todo.completed
                ? <del>{todo.text}</del>
                : todo.text}
            </span>

            <button
              onClick={() => removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;