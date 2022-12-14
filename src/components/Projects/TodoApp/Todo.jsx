import React from 'react';
import './Todo.css';

function Todo({ input,index }) {
  return (
   
      <div className="List-renderer-inner mb-2 text-white">
        <div className="container">
        <div className="box mx-auto">
          <span className="title">
          <ul>
            <li>
             <h6>{input.inputTask}</h6>  
            {/*  <p className="assignedTo"> Assigned To: Hamza</p>  */}
             <div className="assignedTo">
            <strong>Assigned To: Hamza</strong>
            <p>0000 000 000 0000</p>
            <span>Due</span> <span>10/28</span>
        </div>
            </li>
          </ul>
          </span>
          
        </div>
      </div>
      </div>
    
  );
}

export default Todo;
