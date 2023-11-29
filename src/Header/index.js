import { Link }  from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-container">
      <img
        src="https://cdn3.vectorstock.com/i/1000x1000/77/42/graph-icon-growth-symbol-vector-22537742.jpg"
        alt=" wave"
        className="logo-image"
      />
      <p className="logo-title">Growth</p>
    </div>
    <ul>
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>

      
    </ul>
  </nav>
)
export default Header