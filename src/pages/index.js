import React from 'react'

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
