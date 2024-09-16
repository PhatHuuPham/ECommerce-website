import React from 'react'
import './App.css'
import { Header } from './screens/Header'
import { Routes, Route } from 'react-router-dom'
import { Product } from './screens/Product'
import { Category } from './screens/Category'

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
            <Route path='/danhmuc' element={<Category/>}/>
            <Route path='/sanpham' element={<Product/>} />
        </Routes>
    </>
  )
}

export default App