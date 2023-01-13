import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
    console.log(userEmail);
  }
  function limparEmail() {
    setUserEmail(null);
  }

  return (
    <div>
      <h2>Cadastre seu E-mail:</h2>
      <form>
        <input
          type="email"
          placeholder="Digite seu e-mail..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {userEmail && (
          <div>
            <p>Seu email é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
