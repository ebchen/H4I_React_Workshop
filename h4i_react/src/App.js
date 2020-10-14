import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TaskCard from "./TaskCard";

function App() {
  const [tasks, changeTasks] = useState([{title:"Buy groceries", _id: "1", checked: false}, 
    {title:"Watch cis120 lecture", _id: "2", checked: false}, {title: "Do laundry", _id: "3", checked: false}])
  const edit = (target_id, new_title) => {
    console.log("Test: ")
    console.log(target_id)
    console.log(new_title)

    changeTasks (tasks.map(t => t._id === target_id ? {...t,title : new_title}: t))
  }
  const remove = (target_id) => {
    changeTasks (tasks.filter(t => t._id != target_id))
  }
  const check = (target_id) => {
    changeTasks (tasks.map(t => t._id === target_id ? {...t,checked : !t.checked}: t))
  }

  const addTask = () => {
    changeTasks ([...tasks, {title : "", checked: false, _id : (tasks.length+1), editable : true}])
  }

  return (
    <div className="App">
      <div className = "App-container">
        <h1>To Do List</h1>
        <p className = "App-container">{tasks.map(t => <div style={{margin:"20px"}}>
          <TaskCard task = {t} check = {check} edit = {edit} remove = {remove}/></div>)}
        </p>
      </div>
      <button className = "btn btn-primary" onClick = {addTask}>
        Add New Task

      </button>
    </div>
  );
}

export default App;
