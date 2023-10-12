// Servicos.jsx
import React from 'react';
import styles from './Servicos.module.css';
import servico from '../Imagens/s.png'
import perguntas from '../Imagens/perguntas.png'
import seguranca from '../Imagens/seguranca.png'

function Servicos() {
  return (
    <div className={styles.servicosContainer}>
      <h1>Nossos Serviços</h1>
      <div className={styles.servico}>
        <img src={servico}alt="Serviço 1" />
        <h2>Serviço de Consultoria em IoT</h2>
        <p>Na era da conectividade, ajudamos sua empresa a se destacar. Nossa equipe de especialistas oferece consultoria em Internet das Coisas (IoT) para transformar seus negócios. Automatize processos, colete dados valiosos e tome decisões informadas com nossa consultoria personalizada.</p>
      </div>
      <div className={styles.servico}>
        <img src={perguntas} alt="Serviço 2" />
        <h2>Desenvolvimento de Aplicativos Móveis</h2>
        <p>Leve sua marca para o próximo nível com aplicativos móveis incríveis. Nossa equipe de desenvolvimento cria aplicativos personalizados para iOS e Android que cativam seus clientes. Desde a concepção até o lançamento, estamos com você a cada passo do caminho.</p>
      </div>
      <div className={styles.servico}>
        <img src={seguranca} alt="Serviço 3" />
        <h2>Segurança Cibernética Avançada</h2>
        <p>Proteja seus ativos digitais com nossa solução de segurança cibernética avançada. Mantenha-se à frente de ameaças virtuais com nossas ferramentas de última geração e monitoramento 24 horas por dia, 7 dias por semana. Garanta a tranquilidade de seus dados e clientes.</p>
      </div>
    </div>
  );
}

export default Servicos;
