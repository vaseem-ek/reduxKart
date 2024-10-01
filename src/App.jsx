import { useState } from 'react'
import './bootstrap.min.css'
import Header from './componenets/Header'
import Home from './pages/Home'
import View from './pages/View'
import Wish from './pages/Wish'
import Cart from './pages/Cart'
import { Routes,Route } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/view/:id' element={<View/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/wish' element={<Wish/>} />


    </Routes>
      
    </>
  )
}

export default App
