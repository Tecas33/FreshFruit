import { FaAppleAlt, FaTruck, FaMoneyBillWave } from "react-icons/fa";
import { CardSection } from "./layuot";
import { CardMain } from "./layuot";
import { CardText } from "./layuot";

function Card()
{
    return(
        <CardMain>
            <CardSection>
                <CardText data-aos="fade-up">
                    <FaAppleAlt size={25} color="#06d95a"></FaAppleAlt>
                    <h1>
                        Frutas Sempre Frescas
                    </h1>
                    <p>
                      Colhidas diariamente direto dos produtores locais, <br />
                      garantindo sabor, frescor e qualidade máxima.
                    </p>
                </CardText>

                <CardText data-aos="fade-up">
                    <FaTruck size={25} color="#06d95a"></FaTruck>
                    <h1>
                        Entrega Rápida
                    </h1>
                    <p>
                      Receba suas frutas em casa no mesmo dia ou no dia <br />
                      seguinte, com total segurança e cuidado.
                    </p>
                </CardText>

                <CardText data-aos="fade-up">
                    <FaMoneyBillWave size={25} color="#06d95a"></FaMoneyBillWave>
                    <h1>
                        Preços Acessíveis
                    </h1>
                    <p>
                     Frutas de qualidade com preços justos, direto do <br />
                     produtor para sua mesa.
                    </p>
                </CardText>
            </CardSection>
        </CardMain>
    )
}


export default Card;