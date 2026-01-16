import { About, AboutMain, AboutSection, AboutTitle } from "./layuot";


function Sobre() {
  return (
    <About id="sobre">
      <AboutTitle>
        <h1>Sobre a Fresh<span>Fruit</span></h1>
        <p>Levando frutas frescas direto do produtor até a sua casa.</p>
      </AboutTitle>
     <AboutMain>
      <AboutSection data-aos="fade-right">
        <h2>Quem Somos</h2>
        <p>
          A FreshFruit nasceu com um objetivo simples: facilitar o acesso a frutas <br />
          frescas, saudáveis e de qualidade para todos. Trabalhamos diretamente <br />
          com agricultores locais para garantir produtos colhidos no tempo certo. <br />
          Pronto para experimentar frutas de verdade?
        </p>
        <h3>Nossa Missão</h3>
        <p>
          Nossa missão é melhorar a alimentação das pessoas oferecendo frutas <br />
          frescas, naturais e acessíveis, promovendo saúde e bem-estar.
        </p>

        <button><a href="">Comprar Agora</a></button>
      </AboutSection>
         
        <img src="/img/cesta.jpg" alt="Fundo"  width={400}  data-aos="fade-left"/>
     </AboutMain>

    </About>
  );
}


export default Sobre;