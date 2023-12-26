import React, { useState } from 'react';

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setdesc] = useState("");

  const submit =(e)=>{
    e.preventDefault();
    if(!title || !desc){
      alert("title or description cannot be blank ")
    }
    else{
    props.addTodo(title,desc);
    setTitle("");
    setdesc("");
    }   
    

  } 
  return (
    <div className='container'>
        <h1 className="text-center my-3" >Form</h1>
      <form onSubmit={submit}>
  <div className="mb-3">                                                      
    <label htmlFor="title" className="form-label">Todo TItle</label>
    <input type="Text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
    
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">TodoDesc</label>
    <input type="Text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-success">Add Todo</button>
</form>
    </div>
  )
}

export default AddTodo
