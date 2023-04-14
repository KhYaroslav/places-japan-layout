import { Link } from 'react-scroll'
import logo from '../../assets/svg/logo-icon.svg'
import './Header.css'
import { useEffect, useState } from 'react'
import close from '../../assets/svg/close-icon.svg'

export default function Header() {
  const [scrollY, setScrollY] = useState(window.pageYOffset > 0)
  const [open, setOpen] = useState(false)

  const item = [
    { location: 'articles', title: 'Articles' },
    { location: 'locations', title: 'Locations' },
    { location: 'video', title: 'Videos' },
    { location: '#!', title: 'Sign in' }
  ]

  const closeBurgerMobile = () => {
    const menuLinks = document.querySelectorAll('.header__link')
    if (window.innerWidth <= 767) {
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener('click', () => {
          setOpen(false);
        });
      }
    }
  }

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.pageYOffset > 0)
    }
    closeBurgerMobile();
  }, [])

  const openNavHandler = () => setOpen((prev) => !prev);

  return (
  <div className={`header ${scrollY ? 'header__active' : ''}`}>
    <div className="wrapper">
      <div className="header__wrapper">
        <div className='header___logo'>
          <Link to="/" className='header__logo-link'>
            <img src={logo} alt='logo' className='header__logo-pic'/>
          </Link>
        </div>

        <nav className={`header__nav ${open ? 'header__nav-active' : ''}`}>
          <ul className="header__list">
            {item.map((el, i) =>
              <li className="header__item" key={i}>
                <Link to={el.location}
                  activeClass="active"
                  smooth
                  offset={-100}
                  spy
                  className="header__link"
                >
                  {el.title}
                </Link>
              </li>
            )}
          </ul>
          <div className='header__nav-close' onClick={openNavHandler}>
            <img src={close} alt="close" />
          </div>
        </nav>
          <div className='header__burger burger' onClick={openNavHandler}>
            <span className='burger__line burger__line-first'></span>
            <span className='burger__line burger__line-second'></span>
            <span className='burger__line burger__line-third'></span>
          </div>
      </div>
    </div>
  </div>
  )
}
