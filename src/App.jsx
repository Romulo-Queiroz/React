import "./App.css";
import Seunome from "./components/componenteUm";
import CriaParagraf from "./components/componenteDois";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";

function App() {
  const name = "Rômulo";
  return (
    <div className="App">
      <p>Meu nome é: {name}</p>
      <Seunome />
      <CriaParagraf />
      <SayMyName name="Romulo" />
      <SayMyName name="Outro nome" />

      <Pessoa
        nome="Romulo"
        idade="25"
        profissao="Desenvolvedor"
        foto="https://avatars.githubusercontent.com/u/88904173?v=4"
      />
    </div>
  );
}

export default App;
