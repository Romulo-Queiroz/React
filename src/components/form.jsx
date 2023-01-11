function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Cadastrando usuário");
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Digite seu nome" />
        </div>
        <div>
          <input type="submit" value="Enviar" />
        </div>
      </form>
    </div>
  );
}

export default Form;
