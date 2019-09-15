import React from 'react'
import Tabs from 'react-content-tabs'
import MissionDesign from '../images/tabs/mission-analysis.svg'
import CubeSat from '../images/tabs/payload-integration.svg'
import Launch from '../images/tabs/launch-assistance.svg'
import Space from '../images/tabs/digital-ground-station.svg'
import SpaceSkills from '../images/tabs/mission-control.svg'
import Mission from '../images/tabs/Mission-Design.png'
import EbraiSpace_CubeSat from '../images/tabs/EbraiSpace_CubeSat.svg'

const NewFeatures = () => (
    <section className='section padding-top-120'>
        <div className='container'>
            <div className='row'>
                <Tabs.Tabs>
                    <Tabs.TabBar
                        theme={{
                            base: '#fff',
                            inactive: '#000',
                        }}
                    >
                        <Tabs.Tab tabFor='MissionDesign'>
                            <div>
                                <img src={MissionDesign} width='58px' height='auto' alt='' />
                                <span className='service-title'>Mission design</span>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab tabFor='CubeSat'>
                            <div>
                                <img src={CubeSat} width='58px' height='auto' alt='' />
                                <span className='service-title'>CubeSat platforms</span>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab tabFor='Launch'>
                            <div>
                                <img src={Launch} width='58px' height='auto' alt='' />
                                <span className='service-title'>Launch assistance</span>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab tabFor='Space'>
                            <div>
                                <img src={Space} width='58px' height='auto' alt='' />
                                <span className='service-title'>Space intelligence</span>
                            </div>
                        </Tabs.Tab>
                        <Tabs.Tab tabFor='SpaceSkills'>
                            <div>
                                <img src={SpaceSkills} width='58px' height='auto' alt='' />
                                <span className='service-title'>Space skills</span>
                            </div>
                        </Tabs.Tab>
                    </Tabs.TabBar>

                    <Tabs.ContentWrapper>
                        <Tabs.Content id='MissionDesign'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
                                    <div className='left-heading'>
                                        <h2 className='section-title dotted'>
                                            Mission analysis & design
                    </h2>
                                    </div>
                                    <div className='left-text'>
                                        <p className='margin-bottom-40'>
                                            To make Space Intelligence real we help organisations work
                                            out what they could do with Space Intelligence, and then
                                            help them to do it. This requires three things: the right
                                            strategy, the right platforms and the right skills. We
                                            help with all three.
                    </p>
                                    </div>
                                </div>
                                <div className='offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center'>
                                    <img
                                        src={Mission}
                                        className='img-fluid float-right'
                                        alt='Title'
                                    />
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='CubeSat'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix'>
                                    <div className='left-heading'>
                                        <h2 className='section-title dotted'>CubeSat platforms</h2>
                                    </div>
                                    <div className='left-text'>
                                        <p className='margin-bottom-40'>
                                            To make Space Intelligence real we help organisations work
                                            out what they could do with Space Intelligence, and then
                                            help them to do it. This requires three things: the right
                                            strategy, the right platforms and the right skills. We
                                            help with all three.
                    </p>
                                        <a className='dark-btn' href='#'>
                                            <span className='show-btn'>CONTACT US</span>
                                            <span className='hide-btn'>CONTACT US</span>
                                        </a>
                                    </div>
                                </div>
                                <div className='offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center'>
                                    <img
                                        src={EbraiSpace_CubeSat}
                                        className='img-fluid float-right'
                                        alt='Title'
                                    />
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='Launch'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
                                    <div className='left-heading'>
                                        <h2 className='section-title dotted'>Launch assistance</h2>
                                    </div>
                                    <div className='left-text'>
                                        <p className='margin-bottom-40'>
                                            To make Space Intelligence real we help organisations work
                                            out what they could do with Space Intelligence, and then
                                            help them to do it. This requires three things: the right
                                            strategy, the right platforms and the right skills. We
                                            help with all three.
                    </p>
                                    </div>
                                </div>
                                <div className='offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center'>
                                    <img
                                        src={Mission}
                                        className='img-fluid float-right'
                                        alt='Title'
                                    />
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='Space'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
                                    <div className='left-heading'>
                                        <h2 className='section-title dotted'>Space intelligence</h2>
                                    </div>
                                    <div className='left-text'>
                                        <p className='margin-bottom-40'>
                                            To make Space Intelligence real we help organisations work
                                            out what they could do with Space Intelligence, and then
                                            help them to do it. This requires three things: the right
                                            strategy, the right platforms and the right skills. We
                                            help with all three.
                    </p>
                                    </div>
                                </div>
                                <div className='offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center'>
                                    <img
                                        src={Mission}
                                        className='img-fluid float-right'
                                        alt='Title'
                                    />
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='SpaceSkills'>
                            <div className='row'>
                                <div className='col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix'>
                                    <div className='left-heading'>
                                        <h2 className='section-title dotted'>Space skills</h2>
                                    </div>
                                    <div className='left-text'>
                                        <p className='margin-bottom-40'>
                                            To make Space Intelligence real we help organisations work
                                            out what they could do with Space Intelligence, and then
                                            help them to do it. This requires three things: the right
                                            strategy, the right platforms and the right skills. We
                                            help with all three.
                    </p>
                                    </div>
                                </div>
                                <div className='offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center'>
                                    <img
                                        src={Mission}
                                        className='img-fluid float-right'
                                        alt='Title'
                                    />
                                </div>
                            </div>
                        </Tabs.Content>
                    </Tabs.ContentWrapper>
                </Tabs.Tabs>
            </div>
        </div>
    </section>
)

export default NewFeatures