import {
  FooterContainer,
  FooterGrid,
  FooterColumn,
  FooterBottom
} from "./layuot";

 function Footer() {
  return (
    <FooterContainer>

      <FooterGrid>

        <FooterColumn>
          <h3>FreshFruit</h3>
          <p>
            Frutas frescas e naturais entregues diretamente na sua casa.
          </p>
        </FooterColumn>

        <FooterColumn>
          <h3>Links</h3>
          <a href="/">Início</a>
          <a href="/sobre">Sobre</a>
          <a href="/contacto">Contacto</a>
          <a href="/produtos">Produtos</a>
        </FooterColumn>

        <FooterColumn>
          <h3>Contacto</h3>
          <p>📍 Luanda, Angola</p>
          <p>📞 +244 900 000 000</p>
          <p>✉️ contacto@freshfruit.com</p>
        </FooterColumn>

        <FooterColumn>
          <h3>Redes Sociais</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>WhatsApp</p>
        </FooterColumn>

      </FooterGrid>

      <FooterBottom>
        © 2026 FreshFruit — Todos os direitos reservados.
      </FooterBottom>

    </FooterContainer>
  );
}

export default Footer;