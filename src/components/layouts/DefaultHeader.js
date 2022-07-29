import { Link, useResolvedPath, useMatch } from 'react-router-dom'
import { ReactComponent as Logo } from '../../logo.svg'

const CustomLink = ({ to, children, ...props }) => {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvePath.pathname, end: true })

  return (
    <li >
      <Link to={to} {...props} className={`nav-link px-2 ${isActive ? 'text-secondary' : 'text-white'}`}>{children}</Link>
    </li>
  )
}

const DefaultHeader = () => {
  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <Logo />
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/faqs">FAQs</CustomLink>
            <CustomLink to="/about">About</CustomLink>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
          </form>

          <div className="text-end">
            <Link to="/login" className="btn btn-outline-light me-2">Login</Link>
            <Link to="/signup" className="btn btn-warning">Sign-up</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default DefaultHeader