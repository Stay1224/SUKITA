import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Sobre from "./pages/Sobre"

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
    </Routes>
  )
}

export default Router