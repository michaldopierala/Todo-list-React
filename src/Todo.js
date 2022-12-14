import React from 'react'

export default function Todo({todo, toggleTodo}) {
  function handleTodoclick(){
    toggleTodo(todo.id)
  }
  return (
    <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoclick}/> 
        {todo.name}
        <br/>
    </label>
  )
}
