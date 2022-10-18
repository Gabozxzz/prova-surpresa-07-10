import './index.scss'
import '../../common/index.scss'
import { useState } from 'react'

export default function InicioFim(){
const [inicio, setInicio] = useState();
const [fim, setFim] = useState();
const [resposta, setResposta] = useState([]);

    function calcular() {
        let array = []; 
    
        for (let i = inicio; i <= fim; i++ ) {
          array = [...array, i];  
          console.log(array);          
        }
        
        setResposta(array);
    }

    return (
        <main>
            <div>
                <h1>Início Fim</h1>
                <input type="text" placeholder='Inicio' value={inicio} onChange={ e => setInicio(Number(e.target.value))} />
                <input type="text" placeholder='Fim' value={fim} onChange={ e => setFim(Number(e.target.value))} />
                <button onClick={calcular}> Contar </button>
                <p>{resposta.map(item => <p>{ item }</p>)}</p>
            </div>
        </main>
    );
}