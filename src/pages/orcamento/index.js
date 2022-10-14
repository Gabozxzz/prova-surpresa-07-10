import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'


export default function Orcamento(){

    const [ganhos, setGanhos] = useState(0);
    const [gastos, setGastos] = useState(0);
    const [atencao, setAtencao] = useState("");


    function calcular(){
        let aviso = ""

        if (gastos >= 81/100 * ganhos && gastos < 100/100 * ganhos) {
            aviso = "Cuidado, seu orçamento pode ficar comprometido!"
            setAtencao(aviso)
        }
        else if (gastos >= 51/100 * ganhos && gastos < 80/100 * ganhos) {
            aviso = "Atenção, melhor conter seus gastos!"
            setAtencao(aviso)
        }
        else if (gastos >= 21/100 * ganhos && gastos < 50/100 * ganhos) {
            aviso = "Muito bem, seus gastos não ultrapassam metade dos ganhos"
            setAtencao(aviso)
        }
        else if (gastos >= 0/100 * ganhos && gastos < 20/100 * ganhos) {
            aviso = "Parabéns, está gerenciando bem seu orçamento"
            setAtencao(aviso)
        }
        else if (gastos > ganhos) {
            aviso = "Orçamento comprometido! Hora de rever seus gastos"
            setAtencao(aviso)
        }
    }


    useEffect(() => {
        calcular()
       },[gastos, ganhos, atencao])

    return (
        <main className='func-abas'>
            <div className='conteudo'>
                <div className='individual'>
                    Informe os Ganhos: <input type='number' value={ganhos} onChange={e => setGanhos(e.target.value)} />
                </div>
                <div className='individual'>
                    Informe os Gastos: <input type='number' value={gastos} onChange={e => setGastos(e.target.value)} />
                </div>
                <div className='individual'>
                    Resultado: {atencao}
                </div>
            </div>
        </main>
    )
}