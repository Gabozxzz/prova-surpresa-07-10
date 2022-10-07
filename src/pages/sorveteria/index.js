import './index.scss'
import { useState, useEffect } from 'react'

export default function Sorveteria() {
    const [gramas, setGramas] = useState()
    const [resultado, setResultado] = useState('')


    function calcular() {
        let total = 0;

        if(gramas >= 1000) {
            total = (gramas / 100) * 3
        }
        else (
            total = (gramas / 100) * 3.50
        )
        setResultado(total);
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
                <div>
                   Serão R${resultado}
                </div>
            </div>
        </main>
    )
}