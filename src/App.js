import { useState } from 'react';
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Ice Cream',
      day: 'Feb 1st at 2:30pm',
      reminder: false,
    },
    {
      id: 2,
      text: 'Go to the doctor',
      day: 'Feb 3st at 12:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Buy Groceries',
      day: 'Feb 9st at 8:30am',
      reminder: false,
    },
  ]);


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
