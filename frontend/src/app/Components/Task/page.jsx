"use client";
import React, { useState, useEffect } from "react";
export default function TaskHandler() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://chatbrief-ai.onrender.com/")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((Error) => console.error("Error", Error));
  }, []);

  const submitTask = (e) => {
    e.preventDefault();

    const newTask = { task, description };

    fetch("https://chatbrief-ai.onrender.com/tasks/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([...tasks, data]);
        setTask("");
        setDescription("");
        setMessage("Task added successfully!");
      })
      .catch((err) => {
        console.error(err);
        setMessage("Failed to add task!");
      });
  };

  return (
    <div className="tasks-container">
      <h1>ChatBrief AI</h1>
      <h3>Your favourite AI task summariser!</h3>

      <form action="" className="form" onSubmit={submitTask}>
        <label htmlFor="">Tasks</label>
        <div className="task">
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
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
      {message && <p>{message}</p>}
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <strong>
              {t.task}-{t.description}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
