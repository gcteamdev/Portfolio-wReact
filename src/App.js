import './App.css';
import ColorSchemesExample from './components/Navbar';
import Svg from './components/Svg';
import Banner from './components/Banner';
import TodoList from './components/Projects/TodoApp/TodoList';
import Mindfullness from './components/MobileApp/Mindfullness';
import Footer from './components/Footer';
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <Banner />
      <div>
      <Svg />
      <TodoList />
      </div>
      <Mindfullness />
      <Demo />
      <Footer />
      
      
    </div>
  );
}

export default App;
