import "./App.css";
import Seunome from "./components/componenteUm";
import CriaParagraf from "./components/componenteDois";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
  const name = "Rômulo";
  return (
    <div className="App">
      <p>Meu nome é: {name}</p>
      <Seunome />
      <CriaParagraf />
      <SayMyName name="Romulo" />
      <SayMyName name="Outro nome" />

      <Frase />

      {/*  <Pessoa
        nome="Romulo"
        idade="30"
        profissao="Desenvolvedor"
        foto="https://avatars.githubusercontent.com/u/11314585?v=4"
      /> */}
    </div>
  );
}

export default App;
