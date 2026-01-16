import Header from "./pages/Header";
import HeroSection from "./pages/HeroSection";
import Card from "./pages/Card";
import Sobre from "./pages/Sobre";
import Produtos from "./pages/Produtos";
import Contato from "./pages/Contato";
import Footer from "./pages/Footer";

function SiteFull()
{
    return(

        <div>
            <Header></Header>
            <HeroSection></HeroSection>
            <Card></Card>
            <Sobre></Sobre>
            <Produtos></Produtos>
            <Contato></Contato>
            <Footer></Footer>
        </div>

    )
}

export default SiteFull;