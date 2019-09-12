import React from 'react'
import Welcome1 from '../images/photos/welcome/1.jpg'
import Welcome2 from '../images/photos/welcome/2.jpg'
import Welcome3 from '../images/photos/welcome/3.jpg'
import Welcome4 from '../images/photos/welcome/4.jpg'
import Welcome5 from '../images/photos/welcome/5.jpg'

const Welcome = () => (
  <div className='welcome' style={{ height: '789px' }}>
    <div className='welcome-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12'>
            <div className='welcome-text'>
              <h1>Making space intelligence real</h1>
              <p>
                New Space data and imagery is the most powerful intelligence of
                our age. But it is valuable only when it is applied in the real
                world – enhancing products, improving services and saving lives.
              </p>
              <a className='dark-btn' href='#'>
                <span className='show-btn'>CONTACT US</span>
                <span className='hide-btn'>CONTACT US</span>
              </a>
            </div>
          </div>
          <div className='col-lg-8'>
            <div className='slider-position'>&nbsp;</div>
          </div>
        </div>
      </div>
      <div className='slider-wrapper'>
        <div className='base'>
          <div className='prev'>
            <i className='fa fa-angle-left'></i>
          </div>
          <div className='next'>
            <i className='fa fa-angle-right'></i>
          </div>
        </div>
        <div className='owl-carousel'>
          <div className='item'>
            <div className='img'>
              <img src={Welcome1} alt='' />
            </div>
            <div className='text'>
              <h5>Project Title 1</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div className='item'>
            <div className='img'>
              <img src={Welcome2} alt='' />
            </div>
            <div className='text'>
              <h5>Project Title 2</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div className='item'>
            <div className='img'>
              <img src={Welcome3} alt='' />
            </div>
            <div className='text'>
              <h5>Project Title 3</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div className='item'>
            <div className='img'>
              <img src={Welcome4} alt='' />
            </div>
            <div className='text'>
              <h5>Project Title 4</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
          <div className='item'>
            <div className='img'>
              <img src={Welcome5} alt='' />
            </div>
            <div className='text'>
              <h5>Project Title 5</h5>
              <p>Mauris sagittis feugiat dui vel varius.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Welcome
