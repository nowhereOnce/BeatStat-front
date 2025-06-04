import React from 'react'
import LandingPage from './components/LandingPage'
import MePage from './components/MePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/me" element={<MePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
