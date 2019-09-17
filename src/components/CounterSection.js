import React from 'react'
import { Parallax } from 'react-parallax'
import backImage from '../images/photos/parallax/parallax-2.jpg'
import CountUp from 'react-countup'
let isVisited = false
const CounterSection = ({ inViewport: isVisible, forwardedRef }) => {
  isVisited = isVisited ? isVisited : isVisible
  let shouldRender = isVisible || isVisited
  return (
    <Parallax
      ref={forwardedRef}
      className='parallax-counter parallax-image'
      bgImage={backImage}
      strength={900}
      style={{
        height: 300,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='parallax-content'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='count-item'>
                <strong>
                  {/* conditional rendering for count */}
                  {shouldRender && (
                    <CountUp start={0} end={96} duration={5}></CountUp>
                  )}
                </strong>
                <span>
                  Active
                  <br />
                  Customers
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='count-item'>
                <strong>
                  {shouldRender && (
                    <CountUp start={0} end={190} duration={5}></CountUp>
                  )}
                </strong>
                <span>
                  Specialist
                  <br />
                  Staff
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='count-item'>
                <strong>
                  {shouldRender && (
                    <CountUp start={0} end={193} duration={5}></CountUp>
                  )}
                </strong>
                <span>
                  Completed
                  <br />
                  Projects
                </span>
              </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12'>
              <div className='count-item'>
                <strong>
                  {shouldRender && (
                    <CountUp start={0} end={12} duration={5}></CountUp>
                  )}
                </strong>
                <span>
                  Ongoing
                  <br />
                  Projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  )
}

export default CounterSection
