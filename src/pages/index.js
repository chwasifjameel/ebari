import React from 'react'
import Helmet from 'react-helmet'
import { withPrefix, Link } from 'gatsby'

import {
  Header,
  WelcomeSection,
  HomeSection,
  FeaturesSection,
  NewFeatures,
  CounterSection,
  FrequentQuestions,
  Parallex,
  OurTeam,
  ImageTwoForParallax,
  Footer,
} from '../components'
const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <script
        src={withPrefix('../static/parallex.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/imgfix.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/jquery-2.1.0.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/jquery.counterup.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/jquery.magnific-popup.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/waypoints.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/scrollreveal.min.js')}
        type='text/javascript'
      />
      <script src={withPrefix('../static/popper.js')} type='text/javascript' />
      <script
        src={withPrefix('../static/owl.carousel.min.js')}
        type='text/javascript'
      />
      <script
        src={withPrefix('../static/map-script.js')}
        type='text/javascript'
      />
      <script src={withPrefix('../static/custom.js')} type='text/javascript' />
    </Helmet>

    <Header />
    <WelcomeSection />
    <Parallex />
    <HomeSection />
    <FeaturesSection />
    <Parallex />
    <NewFeatures />
    <CounterSection />
    <FrequentQuestions />
    <ImageTwoForParallax />
    <OurTeam />
    <Footer />
  </React.Fragment>
)

export default IndexPage
