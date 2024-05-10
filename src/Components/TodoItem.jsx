import React from "react";
import { useTodo } from "../Contexts/index";
import { useState } from "react";

function TodoItem({ todo }) {
  const [message, setMessage] = useState(todo.todo);
  const { deleteTodo, toggleComplete } = useTodo();

  const toggleCompleted = () => {
    toggleComplete(todo.id);
  };

  const removeTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <div
      className={`flex mx-auto my-auto border border-black rounded-lg px-3 py-1.5 gap-x-3 duration-300 font-semibold ${
        todo.completed ? `bg-green-300 text-black` : "bg-pink-700 text-white"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`outline-none w-full  bg-transparent rounded-lg`}
        value={message}
        readOnly
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm-border border-black justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={removeTodo}
      >
        ⛔
      </button>
    </div>
  );
}

export default TodoItem;
