import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from  './pages/home/index.js'
import Acai from './pages/acai/index.js'
import Signo from './pages/signo/index.js'
import Sorveteria from './pages/sorveteria/index.js'
import Salario from './pages/salario/index.js'
import Abastecimento from './pages/abastecimento/index.js'
import Temperatura from './pages/temperatura/index.js'

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
            </Routes>
        </BrowserRouter>
    ) 
}