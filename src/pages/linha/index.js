import './index.scss'
import { useState } from "react";

export default function Linha(){

    const [tamanho, setTamanho]= useState(0);
    const [resposta, setResposta] = useState([]);

    function calcular() {
        let array =[];
        
        for (let i = 1; i <= tamanho; i++) {
            array[i] = "*";   
        }
        setResposta(array);
    }
    return(
        <main>
            <h1>Linha</h1>
            <input type="number" placeholder='Inicio' value={tamanho} onChange={ e => setTamanho(Number(e.target.value))} />
            <button onClick={calcular}> contar </button>
            <p>{resposta.map(item => <p>{ item }</p>)}</p>
        </main>
    );
}