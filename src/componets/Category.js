import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Category = () => {
  console.log('category')
  return (
    <List>
      <SLink to='/cuisine/italian'>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Thai'}>
        <GiNoodles />
        <h4>Thailand</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  )
}
const List = styled.div`
  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  display: flex;
  justify-content: center;
  margin: 2rem 0;
`
const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  gap: 0.3rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;

  cursor: pointer;
  transform: scale(0.8);
  height: 5rem;
  h4 {
    color: #fff;
    font-size: 0.8rem;
  }
  svg {
    color: #fff;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
  @media (min-width: 768px) {
    height: 6rem;
    h4 {
      font-size: 1rem;
    }
  }
`
export default Category
