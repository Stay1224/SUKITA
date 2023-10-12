import React from 'react';
import style from './Sobre.module.css';
import alvo from '../Imagens/alvo.png'

function Sobre() {
  return (
    <>
      <section className={style.sobre}>
        <div className={style.sobreContent}>
          <h2>Nossa História</h2>
          <p>
            Bem-vindo à jornada do Aquarium, onde a paixão por aquários encontra a inovação tecnológica. Nossa história começa com a admiração pela beleza dos aquários e o desejo de tornar a manutenção de aquários mais fácil e eficiente.
          </p>
          <p>
            Com o Aquarium, estamos redefinindo a maneira como os aquaristas cuidam de seus ecossistemas aquáticos. Nossa missão é proporcionar uma experiência aquática excepcional, onde você pode se concentrar na beleza do seu aquário, enquanto nós cuidamos do resto.
          </p>
          <p>
            A equipe do Aquarium é composta por apaixonados por aquários, engenheiros e designers dedicados a criar soluções inovadoras para os desafios da manutenção de aquários. Junte-se a nós nesta jornada e explore o futuro emocionante do cuidado com aquários.
          </p>
        </div>
      </section>

      <section className={style.missao}>
        <div className={style.missaoContent}>
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é tornar a manutenção de aquários mais fácil e acessível para todos os entusiastas. Queremos criar uma comunidade de aquaristas felizes e aquários saudáveis.
          </p>
          <p>
            Com a ajuda da tecnologia, estamos construindo um futuro em que a paixão por aquários não conhece limites. Junte-se a nós nesta missão e experimente a magia do Aquarium.
          </p>
        </div>
      </section>

      <section className={style.sobre}>
        <div className={style.sobreContent}>
          <h2>Nossa Visão</h2>
          <p>
            Enxergamos um mundo em que todos possam desfrutar da beleza e tranquilidade de um aquário deslumbrante, sem se preocupar com a manutenção complexa.
          </p>
          <div className={style.foto}><img src={alvo} alt="montanha com um alvo na frente" /></div>
          <p>
            Com a Aquarium, queremos tornar a experiência de possuir um aquário uma alegria ininterrupta, onde cada detalhe é cuidado com perfeição, e nossos clientes podem se dedicar à admiração de suas criações aquáticas.
          </p>
        </div>
      </section>

      <section className={style.slide}>
        <div className={style.slideContainer}>
          <div className={`${style.slide} ${style.activeSlide}`}>
            <h2>Aquarium: O Futuro dos Aquários</h2>
            <p>
              Descubra o futuro da manutenção de aquários com o Aquarium. Nossa tecnologia inovadora está mudando a forma como cuidamos dos nossos aquários, tornando tudo mais simples e eficiente.
            </p>
          </div>
          <div className={style.slide}>
            <h2>Criando Beleza Aquática</h2>
            <p>
              Com o Aquarium, você pode criar um ecossistema aquático verdadeiramente deslumbrante. Deixe sua criatividade fluir e transforme seu aquário em uma obra-prima subaquática.
            </p>
          </div>
          <div className={style.slide}>
            <h2>Explore a Diversidade</h2>
            <p>
              Dê vida ao seu aquário com uma ampla variedade de espécies de peixes e plantas aquáticas. O Aquarium oferece suporte para todos os tipos de aquaristas, desde iniciantes até especialistas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sobre;
