import './index.scss'
import '../../common/index.scss'
import { useState } from 'react'

export default function Retangulo() {
    const [base, setbase] = useState();
    const [altura, setaltura] = useState();
    const [input, setInput] = useState();
    const [resposta, steResposta] = useState([]);

    function calcular() {
        let matriz = [];
        let array = [];

        if (input === 'asterisco') {
            for (let i = 0; i < base; i++) {
                array[i] = "*";   
                
                for (let j = 0; j < altura; j++) {
                    matriz[j] = new Array (array);
                }
            }
        }

        else if (input === 'circulo') {
            for (let i = 0; i < base; i++) {
                array[i] =  "●";   
                
                for (let j = 0; j < altura; j++) {
                    matriz[j] = new Array (array);
                }
            }
        }

        else if (input === 'quadrado') {
            for (let i = 0; i < base; i++) {
                array[i] = "▢";   
                
                for (let j = 0; j < altura; j++) {
                    matriz[j] = new Array (array);
                }
            }
        }
        
        console.log(matriz, array);

        steResposta(matriz);
    }

    return(
        <main>
            <h1>Retângulo</h1>
            <input type="text"  placeholder='Base' value={base}  onChange={ e => setbase(Number(e.target.value))} />
            <input type="text"  placeholder='Altura' value={altura}  onChange={ e => setaltura(Number(e.target.value))} />
            <input type="text" placeholder='circulo, quadrado, foto' value={input} onChange={ e => setInput(e.target.value)} />
            <button onClick={calcular}> Ok</button>
            <div>{resposta.map(item => <p>{ item }</p>)}</div>
        </main>
    );
}