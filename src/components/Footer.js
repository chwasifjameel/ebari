import React, { Component } from 'react'

const Footer = () => (
  <footer>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5 col-md-12 col-sm-12'>
          <img src='assets/images/footer-logo.svg' className='logo' alt='' />
          <div className='text'>
            Morbi convallis bibendum urna ut viverra. Maecenas quis consequat
            libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies
            laoreet ullamcorper.
          </div>
          <ul className='social'>
            <li>
              <a href='#'>
                <i className='fa fa-facebook'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-linkedin'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-google-plus'></i>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-github'></i>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
          <h5>Helpful Links</h5>
          <ul className='footer-nav'>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>Features</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>FAQâ€™s</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>Blog</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-6 col-6'>
          <h5>Support</h5>
          <ul className='footer-nav'>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>Privacy Policy</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>Terms of Use</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <i className='fa fa-angle-right'></i>
                <span>Contact</span>
              </a>
            </li>
          </ul>
        </div>
        <div className='col-lg-3 col-md-4 col-sm-12'>
          <h5>Contact Us</h5>
          <div className='address'>
            <p>
              455 West Orchard Street
              <br />
              >Kings Mountain, NC 28086{' '}
            </p>
            <p>Phone: (272) 211-7370</p>
            <p>
              <span>E-Mail: </span>
              <a href='#'>contact@ebrai.space</a>
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12'>
          <p className='copyright'>Â© 2019 Ebrai.space. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
