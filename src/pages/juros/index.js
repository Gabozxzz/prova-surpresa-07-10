import { useState } from "react"

export default function Index(){
    
    const[capital,setCapital]= useState(0);
    const[preço, setPreço]= useState(0)
    const[taxa,setTaxa]= useState(0);
    const[tempo,setTempo]= useState(0);
    const[montante, setMontante]= useState(0);
    const[parcela, setParcela]= useState(0);
    const[juros, setJuros]= useState(0);

    
    function Juros(){
        let sla= capital-preço
        let montane=((1+(taxa/100))**tempo)*sla
        let juros= montane-sla
        let parcela=montane/(tempo*12)
        setMontante(montane)
        setParcela(parcela)
        setJuros(juros)
    }
    
    
    return(
        <main>
            <div>Juros</div>
            <p>Capital</p>
            <input value={capital} type="number" onChange={e=>setCapital(e.target.value)}/>
            <p>preço</p>
            <input value={preço} type="number" onChange={e=>setPreço(e.target.value)}/>
            <p>Porcntagem de juros</p>
            <input value={taxa} type="number" onChange={e=>setTaxa(e.target.value)}/>
            <p>Tempo</p>
            <input value={tempo} type="number" onChange={e=> setTempo(e.target.value)}/>

            <button onClick={Juros}>Calcular</button>
            <p>O Montante é {montante}</p>
            <p>O Valor da parcela é {parcela}</p>
            <p>O valor do juros é {juros}</p>
        </main>
    )
}