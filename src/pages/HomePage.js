import React from 'react'
import Dessert from '../componets/Dessesrt'
import Popular from '../componets/Popular'
import Veggie from '../componets/Veggie'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.5,
      }}
    >
      <Popular />
      <Veggie />
      <Dessert />
    </motion.div>
  )
}

export default HomePage
