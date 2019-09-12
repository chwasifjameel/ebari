import React, { Component } from 'react'
import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const HomeSection = () => (
  <section className='half-parallax'>
    <div
      className='parallax-image'
      style={{
        backgroundImage: `url(${paralaxImageOne})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    ></div>
    <div className='parallax-items'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='parallax-item'>
              <i className='fa fa-hourglass-o'></i>
              <h5 className='feature-title'>STRATEGY</h5>
              <p>
                Proin luctus odio et purus iaculis, et porta ex molestie.
                Curabitur euismod nulla enim.
              </p>
              <a className='dark-btn' href='#'>
                <span className='show-btn'>READ MORE</span>
                <span className='hide-btn'>READ MORE</span>
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='parallax-item'>
              <i className='fa fa-connectdevelop'></i>
              <h5 className='feature-title'>SKILLS</h5>
              <p>
                Vestibulum justo odio, auctor sed elit vitae, sollicitudin
                varius metus. Maecenas diam.
              </p>
              <a className='dark-btn' href='#'>
                <span className='show-btn'>READ MORE</span>
                <span className='hide-btn'>READ MORE</span>
              </a>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className='parallax-item'>
              <i className='fa fa-flag-o'></i>
              <h5 className='feature-title'>SOFTWARE</h5>
              <p>
                Integer tincidunt aliquam nibh. Sed sed velit tristique, egestas
                lorem eu, fermentum diam.
              </p>
              <a className='dark-btn' href='#'>
                <span className='show-btn'>READ MORE</span>
                <span className='hide-btn'>READ MORE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default HomeSection
