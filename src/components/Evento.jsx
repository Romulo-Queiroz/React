import Button from "./evento/button";

function Evento() {
  function meuEvento() {
    alert("Evento um disparado");
  }
  function segundoEvento() {
    alert("Evento dois disparado");
  }

  return (
    <div>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundoEvento} text="Segundo Evento" />
    </div>
  );
}
export default Evento;
