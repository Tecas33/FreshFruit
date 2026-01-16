import {ProductsSection,
  ProductsTitle,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductBody,
  ProductTitle,
  ProductDesc,
  Stars,
  BuyButton
 } from "./layuot";

function Produtos(){

    const produtos = [
        {
            nome: "Maçã Vermelha",
            desc: "Maçãs vermelhas crocantes, doces e cheias de sabor, ideais para o dia a dia.",
            img: "/img/maca.webp"
        },
        {
            nome: "Banana",
            desc: "Bananas maduras e nutritivas, perfeitas para lanches, vitaminas e receitas.",
            img: "/img/bananas.webp"
        },
        {
            nome: "Laranja",
            desc: "Laranjas frescas e suculentas, ricas em vitamina C e ideais para sucos naturais.",
            img: "/img/laranja.webp"
        },
        {
            nome: "Abacaxi",
            desc: "Abacaxi doce e refrescante, perfeito para sucos, sobremesas e consumo natural.",
            img: "/img/abacaxi.webp"
        },
        {
            nome: "Uvas",
            desc: "Uvas selecionadas, cheias de sabor e ideais para lanches, sobremesas e sucos naturais.",
            img: "/img/uvas.webp"
        },
        {
            nome: "Manga",
            desc: "Manga madura  e doce, rica em sabor e vitaminas e muito mais, perfeita para o seu dia a dia.",
            img: "/img/manga.webp"
        },
        {
            nome: "Morango",
            desc: "Morangos frescos e aromáticos, ideais para sobremesas, vitaminas e consumo natural.",
            img: "/img/morango.webp"
        },
        {
            nome: "Pera",
            desc: "Pera fresca, doce e suculenta, perfeita para uma alimentação saudável e equilibrada.",
            img: "/img/Pera.webp"
        }
    ]
    return(
       <ProductsSection id="produto">
      <ProductsTitle>Nossos Produtos</ProductsTitle>

      <ProductsGrid>
        {produtos.map((p, index) => (
          <ProductCard key={index} data-aos="fade-up">
            <ProductImage src={p.img} />
            <ProductBody>
              <ProductTitle>{p.nome}</ProductTitle>
              <ProductDesc>{p.desc}</ProductDesc>
              <Stars>⭐⭐⭐⭐⭐</Stars>
              <BuyButton>Adicionar ao Carrinho</BuyButton>
            </ProductBody>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsSection>
    )
}

export default Produtos;