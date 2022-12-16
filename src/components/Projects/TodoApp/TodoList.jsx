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
      <div className="taskiry-outer d-none d-lg-block">
        <h1 className="todoApp-Header">Taskiary</h1>
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
         <div className="List-renderer p-3">
         {todos.map((input,index)=>( 
          <Todo input={input} key={index} />
         ))
         }
         </div>
       </div>
         
        <div className="source-Todo-ctn ">
        <a className="source-code-btn btn btn-lg text-dark bg-white" target='_blank' href="https://github.com/gcteamdev/Tasksiry.git"> Source Code </a>
        <a className="watch-demo-btn  btn btn-lg btn-dark"  href="#WebApp" > Watch Demo</a>

        </div>
      </div>
     {/*  --for mobile-- */}
     <div className="taskiry-outer d-lg-none d-sm-block mobile-todo">
        <h1 className="todoApp-Header">Taskiary</h1>
        <h2 className="mobile-descriptionTodo">Project management app! </h2>
        <br/>
        <h5 className="mobile-todo-tech">Tech Stack: React.JS | Node.JS</h5>
        
        <div className="wrapper" style={{margin:"auto"}} >
        <button >Create a task for me</button>
        </div>
        <br/>
        
       <div className="form-and-renderer-wrapper mobile-formAndrenderer">
       <Todoform  
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
         />
         <div className="List-renderer p-3">
         {todos.map((input,index)=>( 
          <Todo input={input} key={index} />
         ))
         }
         </div>
       </div>
         
        <div className="source-Todo-ctn mobile-source-btn  ">
        <a className="source-code-btn btn btn-lg text-dark bg-white" target='_blank' href="https://github.com/gcteamdev/Tasksiry.git"> Source Code </a>
        <a className="watch-demo-btn  btn btn-lg btn-dark"  href="#WebApp" > Watch Demo</a>

        </div>
      </div>
    </div>
  )
}

export default TodoList