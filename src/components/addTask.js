import axios from "axios";
import React, { useRef } from "react";
// import { useAddTaskMutation } from "../store";

function AddTask() {
  // const [addTask] = useAddTaskMutation();

  const inputRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputRef.current?.value) {
      const newTask = {
        title: inputRef.current.value,
        done: false,
      };
      inputRef.current.value = ""; // Clear the input field immediately
      axios.post("http://127.0.0.1:8000/api/tasks/create_task/", newTask);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} placeholder="add task..." />
        <button>add</button>
      </form>
    </div>
  );
}

export default AddTask;
