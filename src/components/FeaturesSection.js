import React from 'react'
import pic1 from '../images/photos/home/1.jpg'
import pic2 from '../images/photos/home/2.jpg'
import pic3 from '../images/photos/home/3.jpg'

const FeaturesSection = () => (
  <section className='section padding-bottom-120'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-5 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
          <div className='left-heading'>
            <h2 className='section-title dotted'>Our Expertise</h2>
          </div>
          <div className='left-text'>
            <p className='dark'>
              Etiam eu felis condimentum, lacinia lorem eget, dictum nisl.
              Vestibulum lacinia erat at.{' '}
            </p>
            <p className='margin-bottom-40'>
              To make Space Intelligence real we help organisations work out
              what they could do with Space Intelligence, and then help them to
              do it. This requires three things: the right strategy, the right
              platforms and the right skills. We help with all three.
            </p>
            <ul className='margin-bottom-40'>
              <li>Parturient montes, nascetur.</li>
              <li>Ridiculus mus. Nunc et mauris.</li>
              <li>Quis urna fringilla dapibus a at mauris.</li>
            </ul>

            <div className='row page-gallery-wrapper'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                <a
                  href='assets/images/photos/home/1.jpg'
                  className='page-gallery'
                >
                  <img src={pic1} alt='' />>
                </a>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                <a
                  href='assets/images/photos/home/2.jpg'
                  className='page-gallery'
                >
                  <img src={pic2} alt='' />>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className='offset-lg-1 col-lg-6 col-md-12 col-sm-12 align-self-center'
          data-scroll-reveal='enter right move 30px over 0.6s after 0.3s'
        >
          <img src={pic3} className='img-fluid float-right' alt='Title' />
        </div>
      </div>
    </div>
  </section>
)

export default FeaturesSection
