import logo from './logo.svg';
import './App.css';
import Alumno from './Componentes/Alumno';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Alumno 
        identidad="0801199952365" 
        nombre="Han Solo" 
        nacimiento="25-Feb-1999" 
        promedio={(89+45+56)/3}>
        </Alumno>
        <Alumno 
        identidad="0611198954241" 
        nombre="Gloria Lagos" 
        nacimiento="01-Marzo-1989" 
        promedio={(100+95+78)/3}>
        </Alumno>
        <Alumno 
        identidad="0511199624015" 
        nombre="Marcela Carías" 
        nacimiento="02-Agosto-1996" 
        promedio={(89+92+74)/3}>
        </Alumno>
      </header>
    </div>
  );
}


export default App;
