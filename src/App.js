import './App.css';
import ColorSchemesExample from './components/Navbar';
import myPhoto from "./assets/Portfolio2023-warmer.png";

function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      
      <div className="slogan-ctn">
     
      <h1 className="d-md-none d-sm-block">A software developer based in <br/>Seattle, WA. </h1>
      <h1 className="slogan-main d-none d-md-block">A software developer based in <br/>Seattle, WA. </h1>
      <img src={myPhoto} alt="pic" />
      <div >
     
      
      <button>View Projects</button>
      </div>
      </div>
    </div>
  );
}

export default App;
