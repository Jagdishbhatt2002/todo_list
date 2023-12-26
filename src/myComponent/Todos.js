import React from 'react'
import TodoItem from "./TodoItem"


const Todos = ({todos,onDelete}) => {
  let newStyle = {
    minHeight:"70vh"
  }
  
  return (
    <div className='container my-3 'style={newStyle} > 
      <h3 className="text-center my-3 " >Todos list</h3>
      {/* my-3 for some margin and padding  */}
      {/* {_props.todos} */}
      {todos.length===0?<p>No todos to display</p>:
      
      todos.map((Todos)=>{
          return( 
            <>
          <TodoItem todo={Todos} key={Todos.sno} onDelete={onDelete}/> <hr/>
          
          </>
          )
        })}

      
      {/* map function creates  new array from calling a function for every array element  */}
    
      
    </div>
  )
}

export default Todos
