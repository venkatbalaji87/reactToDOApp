import React from "react";
import { Button } from "react-bootstrap";

const AddTaskField = ({ text, textChangeHandler, addTask, inputRef }) => {
  return (
    <div className="">
      <strong> Task : </strong>
      <input
        ref={inputRef}
        type="text"
        placeholder="Add a new task!"
        value={text}
        onChange={textChangeHandler}
        style={{ margin: "0px 10px" }}
      />
      <Button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={addTask}
      >
        Add New Items
      </Button>
    </div>
  );
};

export default AddTaskField;
