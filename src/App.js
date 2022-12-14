import './App.css';
import ColorSchemesExample from './components/Navbar';
import Svg from './components/Svg';
import Banner from './components/Banner';
import TodoList from './components/Projects/TodoApp/TodoList';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <Banner />
      <div>
      <Svg />
      <TodoList />
      </div>
      
      
    </div>
  );
}

export default App;
