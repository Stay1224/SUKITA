// Servicos.jsx
import React from 'react';
import styles from './Servicos.module.css';
import servico from '../Imagens/s.png'
import perguntas from '../Imagens/perguntas.png'
import seguranca from '../Imagens/seguranca.png'

function Servicos() {
  return (
    <div className={styles.servicosContainer}>
      <h1>Um pequeno passo para o consumidor, um grande avanço para o mercado</h1>
      <div className={styles.servico}>
        <img src={servico}alt="Serviço 1" />
        <h2>SIRVA-SE</h2>
        <p>O Trabalho de Conclusão de Curso (TCC) proposto visa a criação de uma solução inovadora para o setor de bebidas, oferecendo praticidade e comodidade aos usuários. O projeto visa a implementação de uma máquina de distribuição automatizada, capaz de oferecer uma ampla variedade de bebidas com apenas um simples toque em um botão..</p>
      </div>
      <div className={styles.servico}>
      
        <h2>ESPECTATIVA</h2>
        <p>
A conclusão deste projeto irá resultar em um protótipo funcional de uma máquina automatizada de distribuição de bebidas, que demonstrará as capacidades de automatização e facilidade de uso. 



</p>
      </div>
      <div className={styles.servico}>
      
        <h2>ANÁLISE GERAL</h2>
        <p>A implementação bem-sucedida desta máquina tem o potencial de não apenas aprimorar a eficiência no setor de distribuição de bebidas, mas também de se tornar um catalisador para pesquisas e desenvolvimentos futuros. Acreditamos que essa inovação inspirará outras soluções em diversos setores, moldando uma cultura de eficiência e facilidade na interação humano-máquina.</p>
      </div>
    </div>
  );
}

export default Servicos;
