import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import ciencia from '../Imagens/ciencia.png';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>
          <img src="https://images.vexels.com/media/users/3/191685/isolated/preview/a1be59d4ce14e44f34bea8236c6af692-silhueta-de-garrafa-de-cerveja-de-pesco--o-longo-by-vexels.png" alt="" className={styles.menuButton} onClick={toggleMobileMenu} />
        </div>
        <nav className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <ul className={styles.linkList}>
            <li className={styles.linkItem}>
              <Link to="/" onClick={toggleMobileMenu}>Home</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/sobre" onClick={toggleMobileMenu}>Sobre</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/servicos" onClick={toggleMobileMenu}>Serviços</Link>
            </li>
            <li className={styles.linkItem}>
              <Link to="/contato" onClick={toggleMobileMenu}>Contato</Link>
            </li>
            {/* Adicione outros links aqui */}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
