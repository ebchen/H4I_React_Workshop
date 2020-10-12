import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TaskCard from "./TaskCard";

function App() {
  const [tasks, changeTasks] = useState([{title:"test1"}])
  return (
    <div className="App">
      <p>{tasks.map(t => <div><TaskCard task = {t}/></div>)}</p>
    </div>
  );
}

export default App;
