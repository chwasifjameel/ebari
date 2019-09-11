import React, { Component } from 'react'

import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const ImageTwoForParallax = () => (
  <section class='half-parallax padding-bottom-120'>
    <div class='parallax-image'>
      <img src={paralaxImageOne} />
    </div>
    <div class='parallax-items'>
      <div class='container'>
        <div class='row'></div>
      </div>
    </div>
  </section>
)

export default ImageTwoForParallax
