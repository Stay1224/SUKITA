// Header.jsx
import React, { useState } from 'react';
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a href="/" className={styles.logo}>Aquarium</a>

        <div className={styles.searchBar}>
          <input type="text" placeholder="Pesquisar..." className={styles.searchInput} />
          <button className={styles.searchButton}><i className="fas fa-search"></i></button>
        </div>

        <button className={`${styles.menuIcon} ${isMenuOpen ? styles.menuActive : ''}`} onClick={toggleMenu}>
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
          <div className={styles.menuBar}></div>
        </button>
      </div>

      <nav className={`${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <ul>
          <li><a href="../pages/home">Home</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Quem somos nós?</a></li>
          <li><a href="#">Ajuda</a></li>
          <li><a href="#">Resumo</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
