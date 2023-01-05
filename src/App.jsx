import "./App.css";
import Seunome from "./components/componenteUm";
import HelloWorld from "./components/HelloWorld";
function App() {
  const name = "Rômulo";
  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>Meu nome é: {name}</p>

      <Seunome />
    </div>
  );
}

export default App;
