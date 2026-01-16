import { HeroS } from "./layuot";
import { Maintexto } from "./layuot";
import { Call } from "./layuot";
import { Texto } from "./layuot";
import { ButtonFull } from "./layuot";

function HeroSection()
{
  return(
    <HeroS id="home">
        <Maintexto data-aos="fade-right">
            <Texto>
               <h2>Frutas Frescas, Direto <br /> 
                    da Natureza para Você</h2>
               <p>
               Oferecemos produtos selecionados, cultivados com cuidado e entregues com qualidade. <br />
               Aqui você encontra sabor, saúde e frescor em cada escolha.
               </p>
                <ButtonFull>
                <a href="#">Produtos</a>
                </ButtonFull>
            </Texto>
            {/* <div className="main-imagem">
               <img src="" alt="" />
            </div> */}
           
        </Maintexto>
    </HeroS>
  )
}

export default HeroSection;