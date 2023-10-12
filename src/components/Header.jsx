import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ciencia from '../Imagens/ciencia.png'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
         <img src={ciencia} alt="" />
        </Link>
        <nav className={styles.navLinks}>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/servicos">Serviços</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/contato">Contato</Link>
            </li>
            {/* Adicione outros links aqui */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
