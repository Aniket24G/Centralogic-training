import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Contexts/index'

function TodoForm() {
  const [todo,setTodo] = useState("");
  const {addTodo} = useTodo(); 

  const add = (e) => {
    e.preventDefault();

    if(!todo) return;

    addTodo({todo, completed: false}) // if the name of the field and the name of the element are not same, we can write addTodo({todos:todo, completed: false})
    setTodo("") 
  }
  return (
    <form onSubmit={add} className='flex'>
      <div className='border border-black w-full mx-auto flex rounded-lg'>
      <input type="text"
             placeholder='Add Tasks'
             className='w-full mx-auto rounded-l-lg px-3 outline-none duration-150 bg-yellow-100 text-black font-semibold py-5'
             value={todo}
             onChange={(e) => setTodo(e.target.value)}
       />
       <button className='rounded-r-lg px-3 py-1 bg-blue-800 text-white shrink-0'
       type='submit'
       >Add</button>
       </div>
    </form>
  )
}

export default TodoForm