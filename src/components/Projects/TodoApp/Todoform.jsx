import React, { useState } from 'react';
import './Todoform.css';
import AddTaskIcon from '@mui/icons-material/AddTask'; 

function Todoform({input, setInput, todos, setTodos}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="containerInput">
        <input
          placeholder="Add a task!"
          type="text"
          name="inputTask"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </div>
      <div
        className="add-task"
        type="submit"
        onClick={() => {
          if (input !== '') {
            setTodos([...todos, { inputTask: input }]);
            setInput('');
          }
        }}
      >
        <AddTaskIcon />
        </div>
    </form>
  );
}

export default Todoform;
