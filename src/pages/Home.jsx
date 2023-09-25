import React, { useState, useEffect } from 'react';
import styles from './Home.module.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://example.com/slide1.jpg', // Substitua com o URL da sua imagem
    'https://example.com/slide2.jpg', // Substitua com o URL da sua imagem
    'https://example.com/slide3.jpg', // Substitua com o URL da sua imagem
  ];

  // Função para avançar o slide automaticamente
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
            src="https://th.bing.com/th/id/R.40e843bbc42e8ce413714d6af1bd44d9?rik=Y9yY9WLCpjvCRw&riu=http%3a%2f%2fwww.webquestcreator2.com%2fmajwq%2ffiles%2ffiles_user%2f36550%2frecursos.jpg&ehk=KVRl5utl5fGAPvuUMdEP5Ilh53jNrEF%2bsnDoMGn%2f%2blY%3d&risl=&pid=ImgRaw&r=0" // Substitua com o URL da sua imagem
            alt="Feature 1"
            className={styles.featureImage}
          />
          <h2>Recursos Avançados</h2>
          <p>Oferecemos uma variedade de recursos avançados para atender às suas necessidades.</p>
        </div>
        <div className={styles.feature}>
          <img
            src="https://www.svgrepo.com/show/513856/support.svg" // Substitua com o URL da sua imagem
            alt="Feature 2"
            className={styles.featureImage}
          />
          <h2>Suporte 24/7</h2>
          <p>Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana.</p>
        </div>
        <div className={styles.feature}>
          <img
            src="https://example.com/feature-3.jpg" // Substitua com o URL da sua imagem
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
              <img src={slide} alt={`Slide ${index + 1}`} />
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
