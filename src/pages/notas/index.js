import './index.scss'
import '../../common/index.scss'
import { useState } from 'react'

export default function Notas(){
    const [quantidade, setQuantidade] = useState();
    const [respAlunos, setRespAlunos] = useState([]);
    const [media, setMedia] = useState(0);
    const [nota, setNota] = useState([]);
    
    function gerarNovoAluno() {
        let aluno = [];
        for (let i = 0; i < quantidade; i++) {
            aluno[i] = 0;
        }
        setRespAlunos(aluno);
    }
    console.log(respAlunos);

    function CalcularMedia() {
        let calculo = 0;

        for(let i = 0; i < nota.length; i++) {
            calculo += nota[i]
        }
        console.log(calculo);

        setMedia(calculo / nota.length)
    }

    return(
        <main>
            <h1> Médias </h1>
            <input type="text" placeholder='digite a quantidade de alunos' value={quantidade} onChange={e => setQuantidade(Number(e.target.value))} />
            <button onClick={gerarNovoAluno}> Ok </button>
            <div>
                {respAlunos.map((item, posicao) => <p> Aluno: {posicao} <input type="text" value={item.nota} onChange={e => setNota(Number(e.target.value))} /> </p>)}
            </div>
            <button onClick={CalcularMedia}> Calcular </button>
            <p> {media} </p>
        </main>
    )
}