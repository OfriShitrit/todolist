import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import axios from "axios";
// http://127.0.0.1:8000/api/tasks/77/mark_done/
function Task({ value }) {
  const [isInput, setIsInput] = useState(false);

  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8000/api/tasks/${value.id}/`);
  };
  const handleCheck = (e) => {
    if (e.target.checked) {
      axios.put(`http://127.0.0.1:8000/api/tasks/${value.id}/mark_done/`);
    } else {
      axios.put(`http://127.0.0.1:8000/api/tasks/${value.id}/mark_undone/`);
    }
  };

  const handleClick = () => {
    setIsInput((prev) => !prev);
  };

  const handleBlur = (e) => {
    const newTitle = { title: e.target.value };
    axios.patch(
      `http://127.0.0.1:8000/api/tasks/${value.id}/change_title/`,
      newTitle
    );

    setIsInput((prev) => !prev);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <input type="checkbox" onChange={handleCheck} checked={value.done} />
      {isInput ? (
        <input onBlur={handleBlur} defaultValue={value.title} />
      ) : (
        <div onClick={handleClick}> {value.title}</div>
      )}
      <HiOutlineTrash onClick={handleDelete} className="trash-icon" />
    </div>
  );
}

export default Task;
