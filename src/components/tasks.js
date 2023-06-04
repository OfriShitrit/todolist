import React from "react";
import Task from "./task";

function Tasks({ values, refetch }) {
  return (
    <div className="taskox">
      {values.map((value) => {
        return <Task refetch={refetch} value={value} key={value.id} />;
      })}
    </div>
  );
}

export default Tasks;
