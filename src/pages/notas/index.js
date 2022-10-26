import { useState } from 'react';
import './index.scss';

export default function Notas() {
  const [qtd, setQtd] = useState(0);
  const [notasAlunos, setNotasAlunos] = useState([])

  const [media, setMedia] = useState(0);
  const [maior, setMaior] = useState(0);
  const [menor, setMenor] = useState(0);


  function okQtd() {
    const x = criarArray(qtd);
    setNotasAlunos(x);
  }

  function alterar(pos, novoValor) {
    notasAlunos[pos] = Number(novoValor);
    setNotasAlunos([...notasAlunos]);
  }

  function calcular() {
    const a = calcMedia(notasAlunos);
    const b = calcMaior(notasAlunos);
    const c = calcMenor(notasAlunos);

    setMedia(a);
    setMaior(b);
    setMenor(c);
  }
  function criarArray(tamanho) {
    let notas = [];
    for (let volta = 1; volta <= tamanho; volta++) {
        notas.push(0);
    }
    return notas;
}

 function calcMedia(notas) {
    let soma = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        soma = soma + notas[volta];
    }
    let m = soma / notas.length;
    return m;
}

 function calcMaior(notas) {
    let m = 0;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] > m) {
            m = notas[volta];
        }
    }
    
    return m;
}

 function calcMenor(notas) {
    let m = 11;
    for (let volta = 0; volta < notas.length; volta++) {
        if (notas[volta] < m) {
            m = notas[volta];
        }
    }
    
    return m;
}
return (
    <div className="App">
      <header className="App-header">
        
        <div>
          Qtd. Alunos: <input type='text' value={qtd} onChange={e => setQtd(e.target.value)} />
          <button onClick={okQtd}> ok </button>
        </div>

        {notasAlunos.map((item, pos) => 
          <div>
            Aluno {pos+1}: <input type='text' value={notasAlunos[pos]} onChange={e => alterar(pos, e.target.value)} />
          </div>  
        )}


        <button onClick={calcular}> Calcular </button>
        
        <div>
          Média: {media}
        </div>
        <div>
          Maior: {maior}
        </div>
        <div>
          Menor: {menor}
        </div>
        
      </header>
    </div>
  );
}
