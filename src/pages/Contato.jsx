import {
  ContactSection,
  ContactContainer,
  ContactInfo,
  ContactDetails,
  ContactForm
}  from "./layuot";

function Contato() {
  return (
    <ContactSection id="contato">

      <ContactContainer>

        <ContactInfo data-aos="fade-right">
          <h2>Fale Connosco</h2>
          <p>
            Tem alguma dúvida, sugestão ou quer fazer um pedido especial?
            Estamos prontos para ajudar você.
          </p>

          <ContactDetails>
            <div>📍 Luanda, Angola</div>
            <div>📞 +244 900 000 000</div>
            <div>✉️ contacto@freshfruit.com</div>
          </ContactDetails>
        </ContactInfo>

        <ContactForm data-aos="fade-left">
          <h3>Envie uma mensagem</h3>

          <input type="text" placeholder="Seu nome" />
          <input type="email" placeholder="Seu email" />
          <textarea placeholder="Sua mensagem"></textarea>

          <button>Enviar Mensagem</button>
        </ContactForm>

      </ContactContainer>

    </ContactSection>
  );
}

export default Contato;
