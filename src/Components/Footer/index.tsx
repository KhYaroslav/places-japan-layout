import './Footer.css'
import logo from '../../assets/svg/logo-icon.svg';
import { Link } from 'react-router-dom';

export default function Footer() {

  const footer_content = [
    { title: 'Company', navigation: [{ link: 'About' }, { link: 'Team' }, { link: 'Privacy Policy' }, { link: 'About' }] },
    { title: 'Locations', navigation: [{ link: 'Tokyo' }, { link: 'Kyoto' }, { link: 'Osaka' }, { link: 'Hokkaido' }] },
    { title: 'Social Media', navigation: [{ link: 'Facebook' }, { link: 'Twitter' }, { link: 'Instagram' }, { link: 'Youtube' }] },
  ]

  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__items'> 
          <div className="footer__logo">
            <img src={logo} alt="logo" className='foooter__logo-pic' />
          </div>
          <nav className='footer__nav'>
            {footer_content.map((el, i) =>
              <ul className='footer__menu' key={i}>
                <li className='footer__menu-item'>
                  <h3 className='footer__menu-title'>{el.title}</h3>
                </li>
                {el.navigation.map((el, i) =>
                  <li className='footer__menu-item' key={i}>
                    <Link to='#!' className='footer__menu-link'>{el.link}</Link>
                  </li>
                )}
              </ul>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
}
