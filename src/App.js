import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
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

  const deleteTask = id => {
    console.log('delete', id);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <Header></Header>
      <Tasks onDelete={deleteTask} tasks={tasks}></Tasks>
    </div>
  );
}

export default App;
