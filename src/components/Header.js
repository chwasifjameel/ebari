import React from 'react'
import Logo from '../images/logo.svg'

const Header = () => (
  <header className='header-area'>
    <div className='container'>
      <div className='row'>
        <div className='col-12'>
          <nav className='main-nav'>
            {/* <!-- ***** Logo Start ***** --> */}
            <a href='#' className='logo'>
              <img src={Logo} alt='Ebrai.space' />
            </a>
            {/* <!-- ***** Logo End ***** --> */}

            {/* <!-- ***** Menu Start ***** --> */}
            <ul className='nav'>
              <li>
                <a href='#welcome'>Vision</a>
              </li>
              <li>
                <a href='#welcome'>Expertise</a>
              </li>
              <li>
                <a href='#welcome'>Services</a>
              </li>
              <li>
                <a href='#welcome'>Fellowship</a>
              </li>
              <li>
                <a href='#welcome'>About</a>
              </li>
              <li>
                <a className='contact-btn' href='mailto:contact@ebrai.space'>
                  Contact
                </a>
              </li>
            </ul>
            <a className='menu-trigger'>
              <span>Menu</span>
            </a>
            {/* <!-- ***** Menu End ***** --> */}
          </nav>
        </div>
      </div>
    </div>
  </header>
)
export default Header
