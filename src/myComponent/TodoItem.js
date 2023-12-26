// will use todo as a component of todos!!
import React from 'react'

const TodoItem = ({todo,onDelete}) => {
  return (
    <div>
         
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>delete</button>
        {/* btn sm makes the button slightly small */}
    
    </div>
  )
}

export default TodoItem
