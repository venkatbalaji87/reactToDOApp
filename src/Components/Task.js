import React from "react";

const Task = ({ task, onClickCheckBox, onClickDelete }) => {
  return (
    <p>
      <input
        type="checkbox"
        checked={task.isComplete}
        onChange={onClickCheckBox}
        style={{ margin: "10px" }}
      />
      {task.text}
      <button onClick={onClickDelete} style={{ margin: "10px" }}>
        {" "}
        🗑{" "}
      </button>
    </p>
  );
};

export default Task;
