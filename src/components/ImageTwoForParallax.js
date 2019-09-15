import React, { Component } from 'react'
import { Parallax } from 'react-parallax';
import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const ImageTwoForParallax = () => (
  // <section class='half-parallax padding-bottom-120'>
  //   <div class='parallax-image'>
  //     <img src={paralaxImageOne} />
  //   </div>
  //   <div class='parallax-items'>
  //     <div class='container'>
  //       <div class='row'></div>
  //     </div>
  //   </div>
  // </section>
  <Parallax className='parallax-image' bgImage={paralaxImageOne} strength={900}
    style={{
      height: 350,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}>
  </Parallax>
)

export default ImageTwoForParallax
