import { useState } from "react";
import { useRef } from "react";
import { v4 } from 'uuid';
import  "../../index.css";
import { AddButton } from "./styles";
import { Container } from "./styles";
import { Product } from "./styles";
import { DeleteButton } from "./styles";

function App() {


  const inputRef = useRef()
  const [produtos, setProdutos] = useState([])
  function cliqueiNoBotao() {

    if (inputRef.current.value.trim() === "") return;

    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value,
      }, ...produtos])

     inputRef.current.value = "";
}

function deletarProduto(id){
   setProdutos(produtos.filter( produtos => produtos.id !== id))
}

return (
  <Container>
    <h1>Lista de Tarefas</h1>
    <input type="text" placeholder="produto..." ref={inputRef} />
    <AddButton onClick={cliqueiNoBotao}>Adicionar</AddButton>

    {
      produtos.map(produtos => (
        <Product key={produtos.id}>
        <p >
          {produtos.nome}
        </p>
          <DeleteButton onClick={() =>deletarProduto(produtos.id)}>🗑️ </DeleteButton>
        </Product>
      ))
    }


  </Container>
);
}

export default App;
