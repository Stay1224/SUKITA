import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Quem somos nós?</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Resumo</a></li>
        </ul>
      </nav>
      <div>
        <h1>Aquarium</h1>
        <p>Automatizando para e por você.</p>
      </div>
    </header>
  );
}

export default Header;
