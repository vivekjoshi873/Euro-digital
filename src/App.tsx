import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/why-choose-us" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
  )
}

export default App
