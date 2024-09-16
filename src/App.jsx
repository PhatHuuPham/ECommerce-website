import React from 'react'
import './App.css'
import { Header } from './screens/Header'
import { Routes, Route } from 'react-router-dom'
import { Product } from './screens/Product'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
            {/* <Route path='/' element={}></Route> */}
            <Route path='/sanpham' element={<Product/>} ></Route>
        </Routes>
    </>
  )
}

export default App