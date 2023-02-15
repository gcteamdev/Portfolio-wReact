import React, { useState } from 'react';
import './Todo.css';
import todoPic from '../../../assets/airfocus-v89zhr0iBFY-unsplash.jpg';
import Todoform from './Todoform';
import Todo from './Todo';
import Slide from 'react-reveal/Slide';

function TodoList() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {
      inputTask: 'Wash Car',
    },
  ]);
  return (
    <div className="todoAppOuter">
      <div class="todo-App d-block d-md-flex" id="todo-app">
        <Slide bottom duration={2000}>
          <div className="p-2">
            <img
              class="todo-pic d-none d-md-block "
              src={todoPic}
              alt="todo-pic"
            />
          </div>
        </Slide>
        <Slide bottom duration={1600}>
          <div className="taskiry-outer d-none d-md-block">
            <h1 className="todoApp-Header">Taskiary</h1>
            <h4 className="bg-white col-12 rounded">Project management app!</h4>
            <h5 className="mobile-todo-tech text-white col-12 rounded">
              Tech Stack: React.JS | JAVA | Spring Boot
            </h5>
            <h5 className="mobile-todo-tech text-white">
              Database: postgreSQL
            </h5>
            <div className="wrapper" style={{ margin: 'auto' }}>
              <button>Create a task for me below:</button>
            </div>
            <br />

            <div className="form-and-renderer-wrapper">
              <Todoform
                input={input}
                setInput={setInput}
                todos={todos}
                setTodos={setTodos}
              />
              <div className="List-renderer p-3">
                {todos.map((input, index) => (
                  <Todo input={input} key={index} />
                ))}
              </div>
            </div>

            <div className="source-Todo-ctn ">
              <a
                className="source-code-btn btn btn-lg text-dark bg-white"
                target="_blank"
                href="https://github.com/gcteamdev/Tasksiry.git"
              >
                {' '}
                Source Code{' '}
              </a>
              <a className="watch-demo-btn  btn btn-lg btn-dark" href="#WebApp">
                {' '}
                Watch Demo
              </a>
            </div>
          </div>
        </Slide>
        {/*  --for mobile-- */}
        <div className="taskiry-outer-mobile d-md-none d-sm-block">
          <h1 className="todoApp-Header">Taskiary</h1>
          <h2 className="mobile-descriptionTodo bg-white col-12 rounded">
            Project management app!{' '}
          </h2>
          <br />
          <h5 className="mobile-todo-tech bg-white col-10 rounded">
            Tech Stack: React.JS | JAVA | Spring Boot
          </h5>

          <div className="wrapper" style={{ margin: 'auto' }}>
            <button>Create a task for me:</button>
          </div>
          <br />

          <div className="form-and-renderer-wrapper mobile-formAndrenderer">
            <Todoform
              input={input}
              setInput={setInput}
              todos={todos}
              setTodos={setTodos}
            />
            <div className="List-renderer p-3">
              {todos.map((input, index) => (
                <Todo input={input} key={index} />
              ))}
            </div>
          </div>

          <div className="source-Todo-ctn mobile-source-btn  ">
            <a
              className="source-code-btn btn btn-lg text-dark bg-white"
              target="_blank"
              href="https://github.com/gcteamdev/Tasksiry.git"
            >
              {' '}
              Source Code{' '}
            </a>
            <button
              className="watch-demo-btn  btn btn-lg btn-dark"
              href="#WebApp"
            >
              {' '}
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
