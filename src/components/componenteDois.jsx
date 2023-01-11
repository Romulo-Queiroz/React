import { useState } from "react";

function CriaParagraf() {
  const [paragrafo, setParagrafo] = useState();

  return (
    <div>
      <p></p>
      <button>Função</button>
    </div>
  );
}

export default CriaParagraf;
