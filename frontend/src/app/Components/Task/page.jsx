"use client";
import { useState, useEffect } from "react";

export default function Task() {
  const [task, setTask] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [editTaskInput, setEditTaskInput] = useState("");
  const [deleteTask, setDeleteTask] = useState("");

  useEffect(() => {
    fetch("https://chatbrief-ai.onrender.com/tasks/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://chatbrief-ai.onrender.com/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        task: taskInput,
        description: descriptionInput,
      }),
    })
      .then(() => {
        return fetch("https://chatbrief-ai.onrender.com/tasks/");
      })
      .then((res) => res.json())
      .then((data) => {
        setTask(data);
        setTaskInput("");
        setDescriptionInput("");
      })
      .catch((error) => console.error("Error:", error));
  };
  const editTask = () => {
    fetch("https://chatbrief-ai.onrender.com/tasks/", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
    }).then((data) => {
      setEditTaskInput(data);
    });
  };
  const handleDelete = (id) => {
    fetch(`https://chatbrief-ai.onrender.com/tasks/${id}/`, {
      method: "DELETE",
    })
      .then(() => fetch("https://chatbrief-ai.onrender.com/tasks/"))
      .then((res) => res.json())
      .then((data) => setTask(data))
      .catch((error) => console.error("Error:", Error));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Tasks</label>
        <input
          type="text"
          placeholder="Enter task"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <input
          type="text"
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          placeholder="Description"
          className=" form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button>Submit task</button>
        <button>Edit task</button>
        <button>Delete task</button>
      </form>
      <ul>
        {task.map((t) => (
          <li key={t.id}>
            {t.task}-{t.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
