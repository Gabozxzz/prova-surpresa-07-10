import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Ingresso(){
    const [inteiras,setInteiras] = useState(0);
    const [meias,setMeias] = useState(0);
    const [diaSemana,setDiaSemana] = useState('');
    const [nacional,setNacional] = useState(false);
    const [resultado,setResultado] = useState(0);

    function calcular(){
        let total = 0
        let int = inteiras * 28.50;
        let mei = meias * 14.25;
        let nacio = (inteiras * 5) + (meias * 5);

        if(nacional === true){
            total = nacio;
        }
        else if(diaSemana === "quarta-feira"){
            total = (inteiras + meias) * 14.25
        }
        else{
            total = mei + int;
        }
        setResultado(total);
    }

    useEffect(() =>{
        calcular()
    }, [inteiras,meias,diaSemana,nacional,resultado])


    return(
        <main className='func-abas'>
        <div className='conteudo'>
            <div className='individual'>
                Inteiras: <input type='number' min={0}  value={inteiras} onChange={e => setInteiras(Number(e.target.value))} />
            </div>
            <div className='individual'>
                Meias: <input type='number' min={0}  value={meias} onChange={e => setMeias(Number(e.target.value))} />
            </div>
            <div className='individual'>
                Dia da Semana: <input type='text' value={diaSemana} onChange={e => setDiaSemana(e.target.value)} />
            </div>
            <div className='individual'>
                Nacional: <input type='checkbox' value={nacional} onChange={e => setNacional(e.target.checked)} />
            </div>
            <div className='individual'>
                Total: {resultado}
            </div>
        </div>
    </main>
    )
}