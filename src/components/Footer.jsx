import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.section}>
          <h2>Links Úteis</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Serviços</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Redes Sociais</h2>
          <ul className={styles.socialLinks}>
            <li>
              <a href="#"><img src="facebook.svg" alt="Facebook" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src="twitter.svg" alt="Twitter" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src="instagram.svg" alt="Instagram" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src="linkedin.svg" alt="LinkedIn" className={styles.socialIcon} /></a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Newsletter</h2>
          <p>Inscreva-se para receber nossas atualizações.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Seu Email" />
            <button>Inscrever</button>
          </form>
        </div>
      </div>

      <div className={styles.searchBar}>
        <h2>Pesquisa Rápida</h2>
        <form>
          <input type="text" placeholder="Pesquisar..." />
          <button><i className="fas fa-search"></i></button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
