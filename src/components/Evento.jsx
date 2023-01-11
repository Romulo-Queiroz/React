function Evento() {
  function meuEvento() {
    alert("Evento disparado");
  }

  return (
    <div>
      <h1>Evento</h1>
      <button onClick={meuEvento}>Button</button>
    </div>
  );
}
export default Evento;
