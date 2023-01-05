import { useState } from "react";

function Seunome() {
  const [nome, setSeuNome] = useState("");

  return (
    <div>
      <p> seu nome é {nome}</p>
      <input
        onChange={(event) => {
          setSeuNome(event.target.value);
        }}
        value={nome}
        type="text"
      />
    </div>
  );
}

export default Seunome;
