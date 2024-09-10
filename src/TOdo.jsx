import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('');
  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() === '') return;
    const newTasks = [...tasks, { text: newTask, category: newCategory, completed: false }];
    setTasks(newTasks);
    setNewTask('');
    setNewCategory('')
  };
  // Toggle a task between completed and incomplete
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task
    })
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>

      {/* Section to Add a New Task */}
      <div className="add-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Category"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Display Incomplete Tasks */}
      <div className="tasks-section">
        <div className="incomplete-tasks">
          <h2>Incomplete</h2>
          <ul>
            {tasks
              .filter((task) => !task.completed)
              .map((task, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  {task.text} - <span>{task.category}</span>
                </li>
              ))}
          </ul>
        </div>
     
        {/* Display Completed Tasks */}
        <div className="completed-tasks">
          <h2>Completed</h2>
          <ul>
            {tasks
              .filter((task) => task.completed)
              .map((task, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(index)}
                  />
                  {task.text} - <span>{task.category}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoList;
