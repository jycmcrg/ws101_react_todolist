import React, { useState } from 'react';
import './todolist.css';

// CONTAINER COMPONENT
const Container = ({ children }) => {
  return (
    <div className="outer-container">
      <div className="container">{children}</div>
    </div>
  );
};

// TO DO LIST COMPONENT
const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskSubject, setNewTaskSubject] = useState(''); // TASK SUBJECT
  const [newTaskDescription, setNewTaskDescription] = useState(''); // TASK DESCRIPTION
  const [newTaskDueDate, setNewTaskDueDate] = useState(''); // TASK DUE DATE

  // FUNCTION TO ADD A NEW TASK
  const addTask = () => {
    if (newTaskSubject.trim() !== '' && newTaskDescription.trim() !== '' && newTaskDueDate.trim() !== '') {
      // CHECK FOR DUPLICATES BY TASK
      if (tasks.some(task => task.description.toLowerCase() === newTaskDescription.toLocaleLowerCase())) {
        alert('This Task Description is Already in your To Do List');
      } else {
        setTasks([...tasks, { subject: newTaskSubject, description: newTaskDescription, dueDate: newTaskDueDate }]);
      }
      setNewTaskSubject('');
      setNewTaskDescription('');
      setNewTaskDueDate('');
    }
  };

  // FUNCTION TO DELETE A TASK
  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Container>
      <h1>{"\u{1F5CE}"} TO DO LIST</h1>
      <div className='task-input-container'>
        {/* INPUT FOR TASK SUBJECT */}
        <input
          type="text"
          placeholder="Task Subject"
          className="task-input"
          value={newTaskSubject}
          onChange={(e) => setNewTaskSubject(e.target.value)}
        />
        {/* INPUT FOR TASK DESCRIPTION */}
        <input
          type="text"
          placeholder="Task Description"
          className="task-input"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
        {/* INPUT FOR TASK DUE DATE */}
        <input
          type="date"
          className="task-input"
          value={newTaskDueDate}
          onChange={(e) => setNewTaskDueDate(e.target.value)}
        />
      </div>
      <div>
        {/* ADD BUTTON */}
        <button className='add-button' onClick={addTask}><strong>{"\u{002B}"}</strong></button>
      </div>
      {/* DISPLAY TASKS */}
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div>
              <strong>{task.subject}</strong>: {task.description} - <strong>Due:</strong> {task.dueDate}
            </div>
            {/* DELETE BUTTON */}
            <button className="delete-button" onClick={() => deleteTask(index)}>{"\u{1F5D1}"}</button>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;