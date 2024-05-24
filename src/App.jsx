import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Social from './components/Social'

const App = () => {
  return (
    <div className='bg-cyan-950'>
      <Navbar/>
      
      <About/>

      <Social/>
    </div>
  )
}

export default App