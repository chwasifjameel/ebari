import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <header className="header-area">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            {/* <!-- ***** Logo Start ***** --> */}
            <a href="index.html" className="logo">
              <img src={Logo} alt="Ebrai.space" />
            </a>
            {/* <!-- ***** Logo End ***** --> */}

            {/* <!-- ***** Menu Start ***** --> */}
            <ul className="nav">
              <li>
                <a href="index.html#welcome">Vision</a>
              </li>
              <li>
                <a href="index.html#welcome">Expertise</a>
              </li>
              <li>
                <a href="index.html#welcome">Services</a>
              </li>
              <li>
                <a href="index.html#welcome">Fellowship</a>
              </li>
              <li>
                <a href="index.html#welcome">About</a>
              </li>
              <li>
                <a className="contact-btn" href="mailto:contact@ebrai.space">
                  Contact
                </a>
              </li>
            </ul>
            <a className="menu-trigger">
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
