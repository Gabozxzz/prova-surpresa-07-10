import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from  './pages/home/index.js'
import Acai from './pages/acai/index.js'
import Signo from './pages/signo/index.js'
import Sorveteria from './pages/sorveteria/index.js'
import Salario from './pages/salario/index.js'
import Abastecimento from './pages/abastecimento/index.js'
import Temperatura from './pages/temperatura/index.js'
import Orcamento from './pages/orcamento/index.js'
import Ingresso from './pages/ingresso/index.js'
import InicioFim from './pages/iniciofim/index.js'
import Linha from './pages/linha/index.js'
import Retangulo from './pages/retangulo/index.js'
import Cafe from './pages/cafe/index.js'
import Juros from './pages/juros/index.js'
import Notas from './pages/notas/index.js'

export default function Index(){
    return(
        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Acai/>}/>
                <Route path='/signo' element={<Signo/>}/>
                <Route path='/sorveteria' element={<Sorveteria/>}/>
                <Route path='/salario' element={<Salario />} />
                <Route path='/abastecimento' element={<Abastecimento />} />
                <Route path='/temperatura' element={<Temperatura />} />
                <Route path='/orcamento' element={<Orcamento />} />
                <Route path='/ingresso' element={<Ingresso />} />
                <Route path='/iniciofim' element={<InicioFim />} />
                <Route path='/linhatam' element={<Linha />} />
                <Route path='/retangulo' element={<Retangulo />} />
                <Route path='/cafe' element={<Cafe />} />
                <Route path='/juros' element={<Juros />} />
                <Route path='/notas' element={<Notas />} />
            </Routes>
        </BrowserRouter>
    ) 
}