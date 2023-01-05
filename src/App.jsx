import "./App.css";
import Seunome from "./components/componenteUm";
import HelloWorld from "./components/HelloWorld";
import CriaParagraf from "./components/componenteDois";
function App() {
  const name = "Rômulo";
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Meu nome é: {name}</p>
      <Seunome />
      <CriaParagraf />
    </div>
  );
}

export default App;
