import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Search = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    navigate(`/searched/${term}`)
    e.preventDefault()
  }
  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <div>
          <FaSearch />
          <input
            type='text'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </FormStyle>
    </div>
  )
}

const FormStyle = styled.form`
  margin: 0rem 15rem;

  div {
    position: relative;
    width: 100%;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);

    color: #fff;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.8rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`

export default Search
