import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HOME
import Home from './pages/home/Home'

// STOCK
import Stock from './pages/stock/stock';

// VENTAS
import Ventas from './pages/ventas/ventas';

// REPARTOS
import Repartos from './pages/repartos/repartos';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/ventas" element={<Ventas />} />
          <Route path="/repartos" element={<Repartos />} />
          <Route path="/acerca" element={<h1>Sobre Nosotros</h1>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
