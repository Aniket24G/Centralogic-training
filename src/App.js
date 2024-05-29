import { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm.jsx";
import TodoItem from "./Components/TodoItem.jsx";
import { TodoProvider } from "./Contexts/index";
import Home from './Components/Home.jsx';
import DayOne from "./Components/Classroom/DayOne";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    )
  };

  useEffect(() => {
    const todoList = JSON.parse(localStorage.getItem("todos"));
    // console.log(todoList);

    if(todoList && todoList.length > 0){
      setTodos(todoList)
    }
  }, [])

  useEffect(() => {
    const todoHistory = localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todoHistory);/\
  }, [todos])

  return (
    // <TodoProvider value={{ todos, addTodo, deleteTodo, toggleComplete }}>
    //   <div className="App min-h-8 py-8">
    //     <div className="w-full max-w-2l mx-auto shadow-md rounded-lg px-4 py-3 text-white">
    //       <h1 className="text-2xl font-bold text-center mb-8  mt-2">
    //         My Todos
    //       </h1>
    //       <div className="mb-4">
    //         <TodoForm />
    //       </div>
    //       <div className="flex flex-wrap gap-y-3">
    //         <hr />
    //         {todos.map((todo) => (
    //           <div key={todo.id} className="w-full">
    //             <TodoItem todo={todo}/>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </TodoProvider>
    <>
    {/* <Home /> */}
    <DayOne />
    </>
  );
}

export default App;
