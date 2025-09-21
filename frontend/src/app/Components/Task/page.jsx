"use client";
import { useState, useEffect } from "react";

export default function Task() {
  const [task, setTask] = useState("");

  useEffect(() => {
    fetch("api link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
    setTask(data);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Tasks</label>
        <input
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleSubmit}
          className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Description"
          className=" form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <button>Submit task</button>
      </form>
      {/* {task.map((task) => {
        <li>{task}</li>;
      })} */}
    </div>
  );
}
