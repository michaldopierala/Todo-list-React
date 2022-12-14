import React  from 'react';
import { useState, useRef } from "react"
import TodoList from './TodoList'
// import uuidv4 from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid';





function App() {

  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef()
  // console.log(todos)



 
  
function toggleTodo(id){
  const newTodos = [...todos]
  const todo = newTodos.find(todo=>todo.id===id)
  todo.complete= !todo.complete
  setTodos(newTodos)
}

  function handleAddTodo(e){
    const name = todoNameRef.current.value
    if(name==='')return
    console.log( name)
    setTodos(prevTodos=>{
      return[...prevTodos, {id: uuidv4(), name: name, complete: false } ]
    })
    todoNameRef.current.value=null
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo} >Add</button>
      <button>Clear</button>
      <div>{todos.filter(todo=>!todo.complete).length}</div> 
    </>
  )
}

export default App;
