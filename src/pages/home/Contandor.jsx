import { useState } from "react";

function Contandor(){

    const [count, Setcount] = useState(0);

    const increment = () =>{
        Setcount(prevCount => prevCount + 1);
    }

    <div>
       <h2>Countandor usando Hooks</h2>
       <p>Contagem: </p>
       <button onClick={increment}>Adicionar</button>
    </div>
}

export default Contandor;