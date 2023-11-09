import React from 'react';
import styles from './Footer.module.css';
import facebook  from '../Imagens/facebook.png';
import logo  from '../Imagens/logo.png';
import twitter  from '../Imagens/twitter.svg';
import linkedin  from '../Imagens/linkedin.png';

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
              <a href="#"><img src={facebook} alt="Facebook" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src={logo} alt="Instagram" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src={twitter} alt="Twitter" className={styles.socialIcon} /></a>
            </li>
            <li>
              <a href="#"><img src={linkedin} alt="LinkedIn" className={styles.socialIcon} /></a>
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2>Contate-nos</h2>
        
        </div>
      </div>

    </footer>
  );
};

export default Footer;
