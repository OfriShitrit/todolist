import React, { useEffect, useState } from "react";
import AddTask from "../components/addTask";
import Tasks from "../components/tasks";
import axios from "axios";

function ToDoListPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/tasks/")
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err));
  });

  const handleDeleteAllTasks = () => {
    axios
      .delete(`http://127.0.0.1:8000/api/tasks/delete_all/`)
      .then((response) => {
        // Handle success response
        alert("tasks deleted successfully");
      })
      .catch((error) => {
        // Handle error response
        console.error("Error uploading photos:", error);
      });
  };

  const totalTasks = data.length;

  return (
    <div className="todo">
      <h1> TO DO LIST</h1>
      <AddTask />
      <div className="taskbox">
        <Tasks values={data} />
      </div>
      <button onClick={handleDeleteAllTasks}> delete all tasks </button>
      <div>total amount of tasks:{totalTasks}</div>
    </div>
  );
}

export default ToDoListPage;
