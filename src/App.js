
import './App.css';
import Header from "./myComponent/Header";
import Todos from "./myComponent/Todos" 
import Footer from "./myComponent/Footer";
import AddTodo from './myComponent/AddTodo'




import React, {  useState } from 'react';












function App() {

  if(localStorage.getItem("todos")){
   
  }
  else{
     JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete=(todo)=>{
    console.log("I am OnDelete of Todo",todo)

    setTodos(todos.filter((a)=>{
return a!==todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title,desc) => {
    console.log("I am adding this todo ", title,desc)
    let sno;
    if(todos.length===0){
      sno = 0;

    }
    else{
       sno = todos[  todos.length-1].sno+1;
    }
    
    const myTodo ={
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos,myTodo])
      console.log(myTodo)

      
      
  }
 

  const [todos, setTodos] = useState([])

       





  

  return(
  <>
 
 <Header title="My Todos List" searchBar={false}/>

          
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          
            
 <Footer/>
 
 </>
      
  );
}

export default App;
