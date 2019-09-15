import React, { Component } from 'react'
import { Parallax } from 'react-parallax'
import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const ImageTwoForParallax = () => (
  <Parallax
    className='parallax-image'
    bgImage={paralaxImageOne}
    strength={900}
    style={{
      height: 350,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  ></Parallax>
)

export default ImageTwoForParallax
