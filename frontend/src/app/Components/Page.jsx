"use client";
import React, { useState } from "react";
export default function Notes() {
  const [notes, setNotes] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <h1>This is Notes</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter your notes
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}
