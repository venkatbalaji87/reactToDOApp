import React, { Fragment } from "react";

const TaskStatus = ({ tasks }) => {
  return (
    <Fragment>
      <strong>
        Pending Tasks: {tasks.filter((task) => !task.isComplete).length}
      </strong>
      <p>
        <strong>
          Completed Tasks: {tasks.filter((task) => task.isComplete).length}
        </strong>
      </p>
    </Fragment>
  );
};

export default TaskStatus;
