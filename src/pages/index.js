import React from 'react'
import handleViewport from 'react-in-viewport';

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

import OwlCarousel from 'react-owl-carousel2';

const ViewportCounterSection = handleViewport(CounterSection);

const IndexPage = () => (
  <React.Fragment>
    <Header />
    <WelcomeSection />
    <Parallex />
    <HomeSection />
    <FeaturesSection />
    <ImageTwoForParallax />
    <NewFeatures />
    {/* <CounterSection /> */}
    <ViewportCounterSection onEnterViewport={() => console.log('enter')} onLeaveViewport={() => console.log('leave')} />
    <FrequentQuestions />
    <ImageTwoForParallax />
    <OurTeam />
    <Footer />
  </React.Fragment>
)

export default IndexPage
