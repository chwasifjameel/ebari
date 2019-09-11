import React, { Component } from 'react'

import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const Parallex = () => (
  <section class='half-parallax'>
    <div class='parallax-image'>
      <img
        src={paralaxImageOne}
        class='img-fluid float-right'
        alt='Title'
      ></img>
    </div>
    <div class='parallax-items'>
      <div class='container'>
        <div class='row'></div>
      </div>
    </div>
  </section>
)

export default Parallex