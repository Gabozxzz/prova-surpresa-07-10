import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Temperatura() {
    const [temperatura, setTemperatura] = useState(0);
    const [febriu, setFebriu] = useState('');

    function calcular() {
        if (temperatura >= 41) {
            setFebriu('A situação para sua temperatura é HIPERTERMIA')
        }
        else if (temperatura >= 39.6 && temperatura < 41) {
            setFebriu('A situação para sua temperatura é FEBRE ALTA')
        }
        else if (temperatura >= 37.6 && temperatura < 39.6) {
            setFebriu('A situação para sua temperatura é FEBRE')
        }
        else if (temperatura >= 36 && temperatura < 37.6) {
            setFebriu('A situação para sua temperatura é NORMAL')
        }
        else if (temperatura < 36) {
            setFebriu('A situação para sua temperatura é HIPOTERMIA')
        }
    }

    useEffect(() => {
        calcular()
    }, [temperatura])

    return(
        <main className='func-temp'>
            <div className='conteudo'>
                <h1> Temperatura </h1>
                <div className='individual'>
                    Informe sua temperatura: <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)} /> 
                </div>
                <div className='individual'>
                    {febriu}
                </div>
            </div>
        </main>
    )
}