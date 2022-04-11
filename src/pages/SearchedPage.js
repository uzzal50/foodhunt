import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchedPage = () => {
  const { term } = useParams()
  const [searchedRecipie, setSearchedRecipie] = useState([])

  const getSearchedRecipe = async (name) => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    )
    setSearchedRecipie(data.results)
  }
  useEffect(() => {
    getSearchedRecipe(term)
  }, [term])
  console.log(searchedRecipie)
  return (
    <Grid>
      {searchedRecipie.map((item) => {
        return (
          <Link to={`/recipie/${item.id}`}>
            <Card key={item.id}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Card>
          </Link>
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
export default SearchedPage
