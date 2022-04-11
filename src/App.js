import Category from './componets/Category'
import Search from './componets/Search'
import { Pages } from './pages/Pages'
import styled from 'styled-components'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Link to='/'>
        <Logo>
          <MdOutlineRestaurantMenu />
          <h4>tastee</h4>
        </Logo>
      </Link>
      <Search />
      <Category />
      <Pages />
    </div>
  )
}

const Logo = styled.nav`
  margin: 2rem 0;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  h4 {
    font-size: 1.2rem;
  }
`

export default App
