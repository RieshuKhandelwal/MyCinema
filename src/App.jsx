import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className='w-full h-screen bg-[#1f1E24]'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    
  )
}

export default App
