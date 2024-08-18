import logo from "./logo.svg";
import "./App.css";

function ComponeteNovo() {
  return (
    <div>
      <h1>Ola, seja bem vindoss</h1>
    </div>
  );
}

function PrimeiroParag() {
  return (
    <div>
      <p>blablablabla</p>
    </div>
  );
}

function SegundoParag() {
  return (
    <div>
      <p>nseioq nseioqla</p>
    </div>
    );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ComponeteNovo/>
       <PrimeiroParag/>
       <SegundoParag/> 
       <hr/>
       <ComponeteNovo/>
       <PrimeiroParag/>
       <SegundoParag/>
       <hr/>
       <ComponeteNovo/>
       <PrimeiroParag/>
       <SegundoParag/>
       
        
      </header>
    </div>
  );
}

export default App;
