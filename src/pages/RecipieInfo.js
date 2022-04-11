import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const RecipieInfo = () => {
  const { id } = useParams()
  const [recipieInfo, setRecipieInfo] = useState({ extendedIngredients: [] })
  const [activeTab, setActiveTab] = useState('instructions')

  useEffect(() => {
    const fetchInfo = async (name) => {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/${name}/information?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      )
      setRecipieInfo(data)
    }
    fetchInfo(id)
  }, [id])

  return (
    <DetailsWrapper>
      <div>
        <h2>{recipieInfo.title}</h2>
        <img src={recipieInfo.image} alt={recipieInfo.title} />
      </div>
      <Info style={{ marginLeft: '5rem' }}>
        <Button
          onClick={() => setActiveTab('instructions')}
          className={activeTab === 'instructions' ? 'active' : ''}
        >
          Instructions
        </Button>
        <Button
          onClick={() => setActiveTab('ingredients')}
          className={activeTab === 'ingredients' ? 'active' : ''}
        >
          Ingredients
        </Button>
        <div>
          {activeTab === 'instructions' && (
            <div>
              {' '}
              <h2
                dangerouslySetInnerHTML={{ __html: recipieInfo.summary }}
              ></h2>
              <h2
                dangerouslySetInnerHTML={{ __html: recipieInfo.instructions }}
              ></h2>
            </div>
          )}
          {activeTab === 'ingredients' && (
            <ul>
              {recipieInfo.extendedIngredients.map((item) => {
                return <li key={item.id}>{item.original}</li>
              })}
            </ul>
          )}
        </div>
      </Info>
    </DetailsWrapper>
  )
}

const DetailsWrapper = styled.div`
  margin: 5rem 0;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-top: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  img {
    border-radius: 2rem;
    max-width: 400px;
    object-fit: cover;
  }
`
const Info = styled.div`

margin-left = 10rem;
`
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`

export default RecipieInfo
