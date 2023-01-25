import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</h1>
        <Testimony/>
      </div>
    </div>
  );
}

export default App;
