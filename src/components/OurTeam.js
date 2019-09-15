import React, { Component } from 'react'

import pic1 from '../images/photos/team/1.jpg'
import pic2 from '../images/photos/team/2.jpg'
import pic3 from '../images/photos/team/3.jpg'

const OurTeam = () => (
  <section className='section'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-12'>
          <div className='center-heading'>
            <h2 className='section-title'>Our Team</h2>
          </div>
        </div>
        <div className='offset-lg-3 col-lg-6'>
          <div className='center-text'>
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus.
            </p>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='person-item'>
            <div className='img'>
              <img src={pic1} alt='' />
            </div>
            <div className='content'>
              <div className='text'>
                <h5 className='user-name'>Vlad Danciu</h5>
                <span>President & CEO</span>
                <ul className='social'>
                  <li>
                    <a href='#'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='person-item active'>
            <div className='img'>
              <img src={pic2} alt='' />
            </div>
            <div className='content'>
              <div className='text'>
                <h5 className='user-name'>Hanson Deck</h5>
                <span>Title</span>
                <ul className='social'>
                  <li>
                    <a href='#'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='person-item'>
            <div className='img'>
              <img src={pic3} alt='' />
            </div>
            <div className='content'>
              <div className='text'>
                <h5 className='user-name'>Natalya Under</h5>
                <span>Title</span>
                <ul className='social'>
                  <li>
                    <a href='#'>
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default OurTeam
