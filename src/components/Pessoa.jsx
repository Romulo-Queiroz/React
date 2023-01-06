import styles from "./Pessoa.module.css";
function Pessoa({ nome, idade, profissao, foto }) {
  return (
    <div>
      <img src={foto} alt={nome} className={styles.sizers} />
      <h2>Nome:{nome}</h2>
      <p>Idade: {idade}</p>
      <p className={styles.profissao}>Profissão:{profissao}</p>
    </div>
  );
}

export default Pessoa;
