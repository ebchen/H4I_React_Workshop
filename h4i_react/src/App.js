import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {
  const [tasks, changeTasks] = useState([{title:"test1"}])
  return (
    <div className="App">
      <p>{tasks.map(task => <div>{task.title}</div>)}</p>
    </div>
  );
}

export default App;
