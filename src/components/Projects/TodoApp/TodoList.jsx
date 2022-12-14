import React,{useState} from 'react';
import "./Todo.css";
import todoPic from "../../../assets/airfocus-v89zhr0iBFY-unsplash.jpg"; 
import Todoform from './Todoform';
import Todo from './Todo';

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      inputTask:"Wash Car",
    }
  ]);
  return (
    <div class="todo-App">
      <img class="todo-pic"src={todoPic} alt="todo-pic" /> 
      <div className="taskiry-outer">
        <h1 className="todoApp-Header">Taskiry</h1>
        <h4 className="">Project management app!</h4>
        <h2>
            Create a Task for me!
        </h2>
       <div className="form-and-renderer-wrapper">
       <Todoform  
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
         />
         <div className="List-renderer">
         {todos.map((input,index)=>( 
          <Todo input={input} key={index} />
         ))
         }
         </div>
       </div>
         
        <div className="source-Todo-ctn ">
        <h6 className="source-code-btn btn btn-lg text-dark bg-white"> Source Code </h6>
        <h6 className="watch-demo-btn  btn btn-lg btn-dark" > Watch Demo</h6>

        </div>
      </div>
    </div>
  )
}

export default TodoList