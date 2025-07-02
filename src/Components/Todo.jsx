
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function Todo() {

    const [newValue, setNewValue] = useState("");
    const [todo, setTodo] = useState([]);
    
    function handleclick(x) {
        setNewValue(x.target.value)
    }

    function Addtask(event){
        event.preventDefault()
        if(newValue.trim() !== ""){
        setTodo((todo) => [...todo, newValue ])
        setNewValue("")
        }

    }
    function DeleteTask(index){
        const deletedTask = todo.filter((element,ind) => ind !== index)
        setTodo(deletedTask)

    }
    return (
  
    <div className="container d-flex flex-column align-items-center">
    <nav className="navbar navbar-dark bg-dark mb-4 w-50">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">My To-Do App</span>
      </div>
    </nav>

    <form className="d-flex mb-3 w-100" style={{ maxWidth: "500px" }} onSubmit={Addtask}>
      <input 
        type='text'  
        placeholder='Enter your tasks...' 
        value={newValue}  
        onChange={handleclick} 
        className="form-control me-2"
      />
      <button className='btn btn-primary' type="submit">Add</button>
    </form>  

    <ul className="list-group w-100" style={{ maxWidth: "400px" }}>
      {todo.map((item, index) =>  
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {item}
          <button className='btn btn-danger btn-sm' onClick={() => DeleteTask(index)}>Delete</button>
        </li>
      )}
    </ul>
  </div>
)

    
}

export default Todo