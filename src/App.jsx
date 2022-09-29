import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import LogIn from './component/LogIng'
import Pokedex from './component/Pokedex'
import PokemonId from './component/PokemonId'
import ProtectedRoutes from './component/ProtectedRout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HashRouter>
        <Routes>
          
          <Route path='/' element={<LogIn />} />


          <Route element={<ProtectedRoutes />}>

            <Route path='/pokedex' element={<Pokedex />} />
            <Route path='/pokemon/:id' element={<PokemonId />} />
          </Route>

        </Routes>
      </HashRouter>


    </>
  )
}

export default App
