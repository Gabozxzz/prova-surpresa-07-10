import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from  './pages/home/index.js'
import Acai from './pages/acai/index.js'
import Signo from './pages/signo/index.js'
import Sorveteria from './pages/sorveteria/index.js'


export default function Index(){


    return(

        <BrowserRouter> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/acai' element={<Acai/>}/>
                <Route path='/signo' element={<Signo/>}/>
                <Route path='/sorveteria' element={<Sorveteria/>}/>
            </Routes>
        </BrowserRouter>
    ) 


}