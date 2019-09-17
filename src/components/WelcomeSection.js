import React, { useState } from 'react'
import Carousel from 'nuka-carousel'
import Welcome1 from '../images/photos/welcome/1.jpg'
import Welcome2 from '../images/photos/welcome/2.jpg'
import Welcome3 from '../images/photos/welcome/3.jpg'
import Welcome4 from '../images/photos/welcome/4.jpg'
import Welcome5 from '../images/photos/welcome/5.jpg'

function Welcome() {
  const [currentIndex, setIndex] = useState(0)
  // All images with title and description
  const carouselData = [
    {
      img: Welcome1,
      title: 'Project Title 1',
      description: 'Mauris sagittis feugiat dui vel varius.',
    },
    {
      img: Welcome2,
      title: 'Project Title 2',
      description: 'Mauris sagittis feugiat dui vel varius.',
    },
    {
      img: Welcome3,
      title: 'Project Title 3',
      description: 'Mauris sagittis feugiat dui vel varius.',
    },
    {
      img: Welcome4,
      title: 'Project Title 4',
      description: 'Mauris sagittis feugiat dui vel varius.',
    },
    {
      img: Welcome5,
      title: 'Project Title 5',
      description: 'Mauris sagittis feugiat dui vel varius.',
    },
  ]
  return (
    <div className='welcome' style={{ height: '789px' }}>
      <div className='welcome-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-sm-12'>
              <div className='welcome-text'>
                <h1>Making space intelligence real</h1>
                <p>
                  New Space data and imagery is the most powerful intelligence
                  of our age. But it is valuable only when it is applied in the
                  real world – enhancing products, improving services and saving
                  lives.
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
        <div
          className='slider-wrapper'
          style={{
            left: 499.5,
            width: 849.5,
            height: '100%',
            position: 'absolute',
          }}
        >
          <div className='base'>
            <h5>{carouselData[currentIndex].title}</h5>
            <p>{carouselData[currentIndex].description}</p>
          </div>
          {/* Actual Carousel */}
          <Carousel
            slidesToShow={2}
            wrapAround={true}
            afterSlide={currentIndex => setIndex(currentIndex)}
            // Custom button left
            renderBottomLeftControls={({ previousSlide }) => (
              <button onClick={previousSlide}>
                <div className='prev'>
                  <i className='fa fa-angle-left'></i>
                </div>
              </button>
            )}
            // Custom button right
            renderBottomRightControls={({ nextSlide }) => (
              <button onClick={nextSlide}>
                <div className='next'>
                  <i className='fa fa-angle-right'></i>
                </div>
              </button>
            )}
          >
            {/* Atual images for carousel */}
            {carouselData.map(({ img }, index) => (
              <img key={index} src={img} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Welcome
