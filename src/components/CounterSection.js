import React, { Component } from 'react'

const CounterSection = () => (
  <section className='parallax-counter'>
    <div className='parallax-content'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='count-item'>
              <strong>96</strong>
              <span>
                Active
                <br />
                Customer
              </span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='count-item'>
              <strong>190</strong>
              <span>
                Specialist
                <br />
                Staff
              </span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='count-item'>
              <strong>193</strong>
              <span>
                Complated
                <br />
                Project
              </span>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12'>
            <div className='count-item'>
              <strong>12</strong>
              <span>
                Ongoing
                <br />
                Project
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default CounterSection
