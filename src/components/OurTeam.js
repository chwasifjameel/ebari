import React, { Component } from 'react'

import pic1 from '../images/photos/team/1.jpg'
import pic2 from '../images/photos/team/2.jpg'
import pic3 from '../images/photos/team/3.jpg'

const OurTeam = () => (
  <section class='section'>
    <div class='container'>
      <div class='row'>
        <div class='col-lg-12'>
          <div class='center-heading'>
            <h2 class='section-title'>Our Team</h2>
          </div>
        </div>
        <div class='offset-lg-3 col-lg-6'>
          <div class='center-text'>
            <p>
              Donec vulputate urna sed rutrum venenatis. Cras consequat magna
              quis arcu elementum, quis congue risus.
            </p>
          </div>
        </div>
      </div>

      <div class='row'>
        <div class='col-lg-4 col-md-6 col-sm-12'>
          <div class='person-item'>
            <div class='img'>
              <img src={pic1} alt='' />
            </div>
            <div class='content'>
              <div class='text'>
                <h5 class='user-name'>Vlad Danciu</h5>
                <span>President & CEO</span>
                <ul class='social'>
                  <li>
                    <a href='#'>
                      <i class='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12'>
          <div class='person-item active'>
            <div class='img'>
              <img src={pic2} alt='' />
            </div>
            <div class='content'>
              <div class='text'>
                <h5 class='user-name'>Hanson Deck</h5>
                <span>Title</span>
                <ul class='social'>
                  <li>
                    <a href='#'>
                      <i class='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-envelope'></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class='col-lg-4 col-md-6 col-sm-12'>
          <div class='person-item'>
            <div class='img'>
              <img src={pic3} alt='' />
            </div>
            <div class='content'>
              <div class='text'>
                <h5 class='user-name'>Natalya Under</h5>
                <span>Title</span>
                <ul class='social'>
                  <li>
                    <a href='#'>
                      <i class='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <i class='fa fa-envelope'></i>
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
