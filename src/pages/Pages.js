import React from 'react'
import HomePage from './HomePage'
import { Routes, Route, useLocation } from 'react-router-dom'
import Cuisine from '../componets/Cuisine'
import SearchedPage from './SearchedPage'
import { AnimatePresence } from 'framer-motion'
import RecipieInfo from './RecipieInfo'
export const Pages = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes Location={location} key={location.pathname}>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='cuisine/:type' element={<Cuisine />}></Route>

        <Route path='searched/:term' element={<SearchedPage />}></Route>

        <Route path='recipie/:id' element={<RecipieInfo />}></Route>
      </Routes>
    </AnimatePresence>
  )
}
