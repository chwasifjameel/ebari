import React from 'react'
import handleViewport from 'react-in-viewport'

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

// Setting init for animation
const ViewportCounterSection = handleViewport(CounterSection)

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <WelcomeSection />
    <Parallex />
    <HomeSection />
    <FeaturesSection />
    <ImageTwoForParallax />
    <NewFeatures />
    {/* To create an animation for numbers */}
    <ViewportCounterSection />
    <FrequentQuestions />
    <ImageTwoForParallax />
    <OurTeam />
    <Footer />
  </React.Fragment>
)

export default IndexPage
