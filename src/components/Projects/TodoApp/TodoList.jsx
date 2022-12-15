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
    <div class="todo-App d-block d-md-flex" id="todo-app">
      <img class="todo-pic d-none d-lg-block "src={todoPic} alt="todo-pic" /> 
      <div className="taskiry-outer">
        <h1 className="todoApp-Header">Taskiry</h1>
        <h4 className="">Project management app!</h4>
        
        <div className="wrapper" style={{margin:"auto"}} >
        <button >Create a task for me</button>
        </div>
        <br/>
        
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
        <a className="source-code-btn btn btn-lg text-dark bg-white" target='_blank' href="https://github.com/gcteamdev/Tasksiry.git"> Source Code </a>
        <a className="watch-demo-btn  btn btn-lg btn-dark" target="_blank" href="https://www.loom.com/share/7adc6357568549198322e9ccab797474" > Watch Demo</a>

        </div>
      </div>
    </div>
  )
}

export default TodoList