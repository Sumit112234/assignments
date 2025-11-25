import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../redux/slices/todoSlice.js";

function Todo() {
  const [input, setInput] = useState("");
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-xl shadow-md font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-600">Todo App</h1>
      <div className="flex mb-4">
        <input
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
        />
        <button
          onClick={handleAddTodo}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 rounded-r-md transition"
        >
          Add
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-gray-100 rounded-md mb-2 px-4 py-2 shadow-sm"
          >
            <span className="text-gray-700">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
