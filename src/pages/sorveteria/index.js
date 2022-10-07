import './index.scss'
import { useState, useEffect } from 'react'

export default function Sorveteria() {
    const [gramas, setGramas] = useState(0)
    const [resultado, setResultado] = useState('')


    function calcular() {
        let total = 0;

        if(gramas >= 1000) {
            total = (gramas / 100) * 3
            setResultado(total)
        }
        else if (gramas > 0) {
            total = (gramas / 100) * 3.50
            setResultado(total)
        }
        else ( 
            setResultado(total = 'Peso inválido')
        )
    }
    
    useEffect(() => {
        calcular()
    }, [gramas])

    return (
        <main>
            <h1> Sorveteria </h1>
            <div>
                <div>
                    Gramas: <input type="number" value={gramas} onChange={e => setGramas(e.target.value)} />
                </div>
                <div> {resultado ? `Total: ${resultado}` : 'peso inválido'} </div>
            </div>
        </main>
    )
}