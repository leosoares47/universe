// App.js
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
import { Universe } from "./pages/universe"
import { Exploration } from "./pages/exploration"

export function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/exploration" element={<Exploration />} />
      </Routes>
    </>
  )
}
