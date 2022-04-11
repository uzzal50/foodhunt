import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { Link } from 'react-router-dom'

const Dessert = () => {
  const [dessert, setDessert] = useState([])
  useEffect(() => {
    getDessert()
  }, [])

  const getDessert = async () => {
    const check = localStorage.getItem('dessert')

    if (check) {
      setDessert(JSON.parse(check))
    } else {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=dessert`
      )
      localStorage.setItem('dessert', JSON.stringify(data.recipes))
      setDessert(data.recipes)
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Dessert Picks</h3>
        <Splide
          options={{
            perPage: 3,
            breakpoints: {
              640: {
                perPage: 1,
              },
            },
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '2rem',
          }}
        >
          {dessert.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Link to={`/recipie/${recipe.id}`}>
                  <Card>
                    <p>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title} />
                    <Gradient />
                  </Card>
                </Link>
              </SplideSlide>
            )
          })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 12rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: end;
  flex-direction: column;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translate(-50%, 0%);
    color: #fff;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`
export default Dessert
