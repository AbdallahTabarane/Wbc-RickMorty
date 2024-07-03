import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import ChracterDetails from './pages/CharacterDetails'
import CharacterFavoris from './components/CharacterFavoris'
import LocationDetails from './pages/LocationDetails'

function App() {

  return (
    <>
    
    <Router>
      <Routes>
    <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="/character/:id" element={<ChracterDetails />} />
    <Route path="/favoris" element={<CharacterFavoris />} />
    <Route path="/location/:id" element={<LocationDetails />} />
    </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
