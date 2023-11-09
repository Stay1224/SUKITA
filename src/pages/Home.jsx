import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import K from '../Imagens/K.png';
import arthur from '../Imagens/arthur.png';
import pedro from '../Imagens/Pedro.png';

const Home = () => {
  const [images, setImages] = useState([pedro, arthur, K]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.tccExplanation}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      { threshold: 0.5 } // Percentage of section in view to trigger changes
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleCarousel = () => {
    setDarkMode(!darkMode);
    const firstImage = images.shift();
    images.push(firstImage);
    setImages([...images]);
  };

  return (
    <div className={`${styles.home} ${darkMode ? styles.darkMode : ''}`}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Suquitos</h1>
          <p>Concluindo mais uma etapa da vida com a felicidade de ter o Suquitos com você.</p>
          <button onClick={handleCarousel} className={styles.ctaButton}>
            Veja quem somos!
          </button>
        </div>
        <div className={styles.carousel}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className={`${styles.imageTransition} ${styles.centerImage}`}
            />
          ))}
        </div>
      </section>
      <section className={`${styles.tccExplanation}`}>
        <h2>O que é o nosso TCC?</h2>
        <img src="https://th.bing.com/th/id/OIP.Cy4SMThjodA5uqrw6XUVugHaGh?pid=ImgDet&rs=1" alt="" />
        <p>
          Vamos fazer uma máquina de refrigerante com moedeira e tela sobre as bebidas que irá colocar no copo. Esses copos irão
          ficar ao lado da máquina, quando o dinheiro inserido na máquina o devido copo será liberado com o microservo fazendo a
          abertura para o copo cair para colocar a bebida.
        </p>
      </section>
      <section className={`${styles.tccExplanation}`}>
        <h2>COMPONENTES</h2>
        <img src="https://www.usinainfo.com.br/1017396-thickbox_default/mini-bomba-de-agua-para-arduino-12v-rs385-2lmin.jpg" alt="" />
        <p>
          Uma bomba de água controlada por Arduino é um dispositivo que utiliza a placa Arduino como seu controlador principal.
          Essas bombas são componentes essenciais em diversos projetos, desde sistemas de irrigação automatizados até soluções de
          resfriamento e controle de fluidos.
        </p>
        <hr />
        <br />
        <img src="https://www.okystar.com/wp-content/uploads/2017/08/OKY4005-3-LCD-1602-Module-blue-light-2.jpg" alt="" />
        <br />
        <img src="https://th.bing.com/th/id/R.ae031efbe561d7bceec0086241f40728?rik=pHYmyqb%2fweuJbw&pid=ImgRaw&r=0" alt="" />
        <br />
        <hr />
        <br />
      </section>
    </div>
  );
};

export default Home;
