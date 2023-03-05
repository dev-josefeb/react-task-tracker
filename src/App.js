import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState();


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1 

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    console.log('delete', id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleReminder = id => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, reminder: !task.reminder } : task)));
    console.log(tasks);
  };

  return (
    <div className="container">
      <Header onAdd = {()=> setShowAddTask(!showAddTask)} showAdd ={showAddTask}></Header>
      {showAddTask && <AddTask onAdd = {addTask} ></AddTask>}
      {tasks.length > 0 
        ? <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks}></Tasks>
        : 'No Tasks to Show'}
    </div>
  );
}

export default App;
