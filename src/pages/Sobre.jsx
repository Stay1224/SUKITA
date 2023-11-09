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
          O objetivo principal deste projeto é desenvolver uma máquina automatizada para distribuição de bebidas que seja de fácil acesso e utilização. O dispositivo terá como principal característica a simplicidade, permitindo que o usuário solicite sua bebida preferida com um único botão. Esta solução inovadora visa a oferecer comodidade e eficiência na distribuição de uma variedade de bebidas em diversos ambientes, como escritórios, espaços de convivência, e eventos, proporcionando uma experiência agradável aos usuários.
          </p>
         
        </div>
      </section>

      <section className={style.missao}>
        <div className={style.missaoContent}>
          <h2>Nossa Missão</h2>
          <p>
          O objetivo primordial deste projeto é não apenas oferecer uma solução prática e eficaz na distribuição de bebidas, mas também transformar a experiência do consumidor. Ao eliminar etapas complexas e demoradas, a máquina automatizada simplificará o processo de seleção, garantindo a oferta rápida e fácil de bebidas com alta qualidade, resultando em satisfação para o consumidor.</p>
          <p>
            Com a ajuda da tecnologia, estamos construindo um futuro em que a paixão por aquários não conhece limites. Junte-se a nós nesta missão.
          </p>
        </div>
      </section>

      <section className={style.sobre}>
        <div className={style.sobreContent}>
          <h2>Nossa Visão</h2>
          <p>
            Enxergamos um mundo em que todos possam desfrutar da beleza e tranquilidade utilizando de recursos acessiveis como o nosso.
          </p>
       
          <p>
            Com o Sukita, idependente da hora ou momento, voce conseguira tomar e desfrutar de um dia estressante o prazer.
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
