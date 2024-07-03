import { useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import ChracterDetails from './pages/CharacterDetails'
import CharacterFavoris from './components/CharacterFavoris'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/character/:id" element={<ChracterDetails />} />
    <Route path="/favoris" element={<CharacterFavoris />} />
    </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
