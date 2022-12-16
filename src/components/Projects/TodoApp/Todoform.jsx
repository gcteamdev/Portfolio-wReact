import React from 'react';
import './Todoform.css';
import AddTaskIcon from '@mui/icons-material/AddTask'; 

function Todoform({input, setInput, todos, setTodos}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} >
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
       <div
        className="add-task d-none d-md-block"
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
      {/*   --for mobile-- */}
      <div
        className="add-task mobile-addTask-btn"
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
      </div>
      
    </form>
  );
}

export default Todoform;
