import React, { Component } from 'react'

import paralaxImageOne from '../images/photos/parallax/parallax-1.jpg'

const Parallex = () => (
  <section
    class='parallax-image'
    style={{
      backgroundImage: `url(${paralaxImageOne})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
    }}
  ></section>
)

export default Parallex
