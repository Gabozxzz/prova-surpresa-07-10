import './index.scss'
import '../../common/index.scss'
import { useState, useEffect } from 'react'

export default function Salario() {
    const [salario, setSalario] = useState(0);
    const [bonus, setBonus] = useState(0);
    const [desc, setDesc] = useState(0);
    const [total, setTotal] = useState(0)

    function calcular() {
        let bon = bonus/100 + 1;
        let sal = salario * bon
        let total = sal - desc;
        setTotal(total)
    }

    useEffect(() => {
        calcular()
    }, [salario, bonus, desc])

    return (
        <main className='func-salario'>
            <div className='conteudo'>
                <h1> Salário </h1>
                <div className='individual'>
                    Informe o salário: <input type='number' value={salario} onChange={e => setSalario(e.target.value)} />
                </div>
                <div className='individual'>
                    Informe o bônus: <input type='number' value={bonus} onChange={e => setBonus(e.target.value)} />
                </div>
                <div className='individual'>
                    Informe o desconto: <input type='number' value={desc} onChange={e => setDesc(e.target.value)} />
                </div>
                <div className='individual'>
                    {total}
                </div>
            </div>
        </main>
    )
}