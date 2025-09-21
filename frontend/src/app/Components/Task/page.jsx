"use client";
import { useState, useEffect } from "react";

export default function Task() {
  const [task, setTask] = useState("");
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
        />
        <input type="text" placeholder="Description" />
        <button>Submit task</button>
      </form>
    </div>
  );
}
