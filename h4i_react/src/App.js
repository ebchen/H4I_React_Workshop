import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TaskCard from "./TaskCard";

function App() {
  const [tasks, changeTasks] = useState([{title:"Buy groceries"}, {title:"Watch cis120 lecture"}, {title: "Do laundry"}])
  return (
    <div className="App">
      <h1>To Do List</h1>
      <p>{tasks.map(t => <div><TaskCard task = {t}/></div>)}</p>
    </div>
  );
}

export default App;
