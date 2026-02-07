import React from 'react'
import Navbar from './components/Navbar'
import TopContent from './components/TopContent'
import MainCard from './components/MainCard'
import BottomContent from './components/BottomContent'

const App = () => {
  return (
    <div>
      <Navbar />
      <TopContent />
      <BottomContent />
    </div>
  )
}

export default App