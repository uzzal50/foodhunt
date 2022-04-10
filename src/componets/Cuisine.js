import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const Cuisine = () => {
  const { type } = useParams()
  const [cuisine, setCuisine] = useState([])

  useEffect(() => {
    getCuisine(type)
  }, [type])

  const getCuisine = async (name) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    )
    setCuisine(data.results)
  }
  console.log(type, cuisine)
  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`
export default Cuisine
