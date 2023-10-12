import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Servicos from "./pages/Servicos"
import Contato from "./pages/Contato"

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/Contato" element={<Contato />} />
    </Routes>
  )
}

export default Router