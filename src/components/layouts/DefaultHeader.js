import { Link, useResolvedPath, useMatch } from 'react-router-dom'

const CustomLink = ({ to, children, ...props }) => {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to="/">Home</Link>
    </li>
  )
}

const DefaultHeader = () => {
  return (
    <header className='default__header'>
      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default DefaultHeader