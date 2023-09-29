// Home.jsx
import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';
import suporte from '../Imagens/suporte.png'
import recursos from '../Imagens/recursos.png'
import facil2 from '../Imagens/facil2.png'
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://th.bing.com/th/id/R.8b2c811c15dda675e8dc3309ef77e51c?rik=Hm5260u1%2f6jgcw&riu=http%3a%2f%2fwww.lingzhilab.com%2flzbbs%2farduino%2fimg%2fArduino-UNO-R3%2fArduino-UNO-R3-img1.jpg&ehk=Ad42L25A9AyVZO3aweZy47vHaldweR2r%2bI3Arp5Vrlo%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1', // Substitua com o URL da sua imagem
    'https://www.iottechtrends.com/assets/uploads/2019/04/Arduino-Uno-Components.jpg', // Substitua com o URL da sua imagem
    'https://th.bing.com/th/id/OIP._LUXY3wulbRU7sLP7UfV9QHaHa?pid=ImgDet&rs=1', // Substitua com o URL da sua imagem
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000); // Altere o intervalo de troca de slides conforme necessário (5 segundos neste exemplo)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Bem-vindo ao Aquarium</h1>
          <p>Automatizando para e por você.</p>
          <a href="#saiba-mais" className={styles.ctaButton}>Saiba Mais</a>
        </div>
      </section>

      <section className={styles.features}>
        <div className={styles.feature}>
          <img
            src={recursos}
            alt="Feature 1"
            className={styles.featureImage}
          />
          <h2>Recursos Avançados</h2>
          <p>Oferecemos uma variedade de recursos avançados para atender às suas necessidades.
         
          </p>
        </div>
        <div className={styles.feature}>
          <img
            src={suporte}
            alt="feature 2"
            className={styles.featureImage}
          />
          <h2>Suporte 24/7</h2>
          <p>Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana.</p>
        </div>
        <div className={styles.feature}>
          <img
            src={facil2}
            alt="Feature 3"
            className={styles.featureImage}
          />
          <h2>Fácil de Usar</h2>
          <p>Nossa plataforma é intuitiva e fácil de usar, mesmo para iniciantes.</p>
        </div>
      </section>

      <section id="saiba-mais" className={styles.learnMore}>
        <h2>Saiba Mais Sobre Nós</h2>
        <p>Descubra como o Aquarium pode ajudar você a automatizar e simplificar suas tarefas diárias.</p>
        <a href="/sobre" className={styles.ctaButton}>Sobre Nós</a>
      </section>

      <section className={styles.imageSlider}>
        <div className={styles.slideContainer}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
            >
              <img src={slide} alt={`Slide ${index + 1}`} className={styles.slideImage} />
            </div>
          ))}
        </div>
        <div className={styles.slideIndicators}>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`${styles.indicator} ${index === currentSlide ? styles.activeIndicator : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
