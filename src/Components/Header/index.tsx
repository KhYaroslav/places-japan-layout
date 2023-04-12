import { Link } from 'react-router-dom'
import logo from '../../assets/svg/logo-icon.svg'
import './Header.css'
import { useEffect, useState } from 'react'

export default function Header() {
  const [scrollY, setScrollY] = useState(window.pageYOffset > 0)

  const item = [
    { location: '/Articles', title: 'Articles' },
    { location: '/Locations', title: 'Locations' },
    { location: '/Videos', title: 'Videos' },
    { location: '/Sign in', title: 'Sign in' }
  ]

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.pageYOffset > 0)
    }
  }, [])
  
  return (
  <div className={`header ${scrollY ? 'header__active' : ''}`}>
    <div className="wrapper">
      <div className="header__wrapper">
        <div className='header___logo'>
          <Link to="/" className='header__logo-link'>
            <img src={logo} alt='logo' className='header__logo-pic'/>
          </Link>
        </div>

        <nav className="header__nav">
          <ul className="header__list">
            {item.map((el) =>
              <li className="header__item">
                <Link to={el.location} className="header__link">{el.title}</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  </div>
  )
}
