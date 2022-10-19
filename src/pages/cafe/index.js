import './index.scss'
import '../../common/index.scss'
import { useEffect, useState } from 'react'

export default function Cafe () {
    const [estudantes, setEstudantes] = useState();
    const [capacidade, setCapacidade] = useState();
    const [mililitros, setMililitros] = useState();
    const [resultado, setResultado] = useState();

    function calcular() {
        let multiplo = 1;
        let litros = (estudantes * mililitros) / 1000;
        let calc = capacidade * multiplo;
        while (calc < litros) {
            multiplo++;
            calc = capacidade * multiplo;
        }
        
        setResultado(`Será necessário no mínimo ${calc}L`);
    }

    function click() {
        calcular();
    }
 
    return (
        <main className='pag-cafe'>
            <div className='div-principal'>
                <div>
                    Qtd. estudantes
                    <input type="number" value={estudantes} onChange={e => setEstudantes(e.target.value)} />
                </div>
                <div>
                    Capacidade
                    <input type="number" value={capacidade} onChange={e => setCapacidade(e.target.value)} />
                </div>
                <div>
                    Qtd. em mililitros
                    <input type="number" value={mililitros} onChange={e => setMililitros(e.target.value)} />
                </div>
                <div>
                    Resultado: {resultado}
                </div>
                <button onClick={click}>
                    Calcular
                </button>
            </div>
        </main>
    )
}