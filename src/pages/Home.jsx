import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Bem-vindo',
    'AQUARIUM',
    'ARTHUR ESTEVE AQUI',
    // Adicione mais textos aqui
  ];

  const handleNext = () => {
    setCurrentText((prevText) => (prevText === texts.length - 1 ? 0 : prevText + 1));
  };

  const handlePrevious = () => {
    setCurrentText((prevText) => (prevText === 0 ? texts.length - 1 : prevText - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000); // Troque para o intervalo desejado em milissegundos (3 segundos neste exemplo)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.textSlider}>
      <button className={`${styles.arrowButton} ${styles.previous}`} onClick={handlePrevious}>
        &larr;
      </button>
      <div className={styles.backgroundImage}></div>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>{texts[currentText]}</h1>
      </div>
      <button className={`${styles.arrowButton} ${styles.next}`} onClick={handleNext}>
        &rarr;
      </button>
    </div>
  );
};

export default Home;
