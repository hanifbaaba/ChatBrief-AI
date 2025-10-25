"use client";
import React, { useState, useEffect } from "react";
export default function TaskHandler() {
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((json) => {
        setTasks(json);
        setDescription(true);
      });
  }, []);

  return (
    <div className="tasks-container">
      <h1>ChatBrief AI</h1>
      <h3>Your favourite AI task summariser!</h3>

      <form action="" className="form">
        <label htmlFor="">Tasks</label>
        <div className="task">
          <input
            type="text"
            placeholder="Add Task"
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
          />

          <input
            type="text"
            placeholder="Add Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button type="submit">Submit Task</button>
        </div>
      </form>
      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task} - {task.description}
          </li>
        ))}
      </ul> */}
    </div>
  );
}
