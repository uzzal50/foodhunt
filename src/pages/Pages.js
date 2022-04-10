import React from 'react'
import HomePage from './HomePage'
import { Routes, Route } from 'react-router-dom'
import Cuisine from '../componets/Cuisine'

export const Pages = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='cuisine/:type' element={<Cuisine />}></Route>
    </Routes>
  )
}
