import React from 'react';
import pic1 from '../images/tabs/mission-analysis.svg'
import pic2 from '../images/tabs/payload-integration.svg'
import pic3 from '../images/tabs/launch-assistance.svg'
import pic4 from '../images/tabs/digital-ground-station.svg'
import pic5 from '../images/tabs/mission-control.svg'
import pic6 from '../images/tabs/Mission-Design.png'
import pic7 from '../images/tabs/EbraiSpace_CubeSat.svg'


const NewFeatures=()=>(
    <section className="section padding-top-120">
    <div className="container">
        <div className="row">
            <h4 style={{marginTop:100}}>PLACE HERE 5 TABS SECTION</h4>
        </div>
        <div className="row">
            <div id="tabs" >
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-1-tab" data-toggle="tab" href="#nav-1" role="tab" aria-controls="nav-home" aria-selected="true">
                            <img src={pic1} width="58px" height="auto" alt=""/>
                            <span className="service-title">Mission design</span>
                        </a>
                        <a className="nav-item nav-link" id="nav-2-tab" data-toggle="tab" href="#nav-2" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <img src={pic2}  width="58px" height="auto" alt=""/>
                            <span className="service-title">CubeSat platforms</span>
                        </a>
                        <a className="nav-item nav-link" id="nav-3-tab" data-toggle="tab" href="#nav-3" role="tab" aria-controls="nav-contact" aria-selected="false">
                            <img src={pic1}  width="58px" height="auto" alt=""/>
                            <span className="service-title">Launch assistance</span>
                        </a>
                        <a className="nav-item nav-link" id="nav-4-tab" data-toggle="tab" href="#nav-4" role="tab" aria-controls="nav-profile" aria-selected="false">
                            <img src={pic1} width="58px" height="auto" alt=""/>
                            <span className="service-title">Space intelligence</span>
                        </a>
                        <a className="nav-item nav-link" id="nav-5-tab" data-toggle="tab" href="#nav-5" role="tab" aria-controls="nav-contact" aria-selected="false">
                            <img src={pic1}  width="58px" height="auto" alt=""/>
                            <span className="service-title">Space skills</span>
                        </a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    
                    <div className="tab-pane  show active" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title dotted">Mission analysis & design</h2>
                                </div>
                                <div className="left-text">
                                    <p className="margin-bottom-40">To make Space Intelligence real we help organisations work out what they could do with Space Intelligence, and then help them to do it. This requires three things: the right strategy, the right platforms and the right skills. We help with all three.</p>
                                </div>
                            </div>
                            <div className="offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center">
                                <img src={pic1} className="img-fluid float-right" alt="Title"/>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane margin-top-40" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title dotted">CubeSat platforms</h2>
                                </div>
                                <div className="left-text">
                                    <p className="margin-bottom-40">To make Space Intelligence real we help organisations work out what they could do with Space Intelligence, and then help them to do it. This requires three things: the right strategy, the right platforms and the right skills. We help with all three.</p>
                                    <a className="dark-btn" href="#">
                                        <span className="show-btn">CONTACT US</span>
                                        <span className="hide-btn">CONTACT US</span>
                                    </a>
                                </div>

                            </div> 
                            <div className="offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center">
                                <img src={pic1} className="img-fluid float-right" alt="Title"/>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="nav-3" role="tabpanel" aria-labelledby="nav-3-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title dotted">Launch assistance</h2>
                                </div>
                                <div className="left-text">
                                    <p className="margin-bottom-40">To make Space Intelligence real we help organisations work out what they could do with Space Intelligence, and then help them to do it. This requires three things: the right strategy, the right platforms and the right skills. We help with all three.</p>
                                </div>
                            </div>
                            <div className="offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center">
                                <img src={pic1} className="img-fluid float-right" alt="Title"/>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="nav-4" role="tabpanel" aria-labelledby="nav-4-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title dotted">Space intelligence</h2>
                                </div>
                                <div className="left-text">
                                    <p className="margin-bottom-40">To make Space Intelligence real we help organisations work out what they could do with Space Intelligence, and then help them to do it. This requires three things: the right strategy, the right platforms and the right skills. We help with all three.</p>
                                </div>
                            </div>
                            <div className="offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center">
                                <img src={pic1} className="img-fluid float-right" alt="Title"/>
                            </div>
                        </div>
                    </div>

                    <div className="tab-pane" id="nav-5" role="tabpanel" aria-labelledby="nav-5-tab">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-sm-12 align-self-center mobile-bottom-fix">
                                <div className="left-heading">
                                    <h2 className="section-title dotted">Space skills</h2>
                                </div>
                                <div className="left-text">
                                    <p className="margin-bottom-40">To make Space Intelligence real we help organisations work out what they could do with Space Intelligence, and then help them to do it. This requires three things: the right strategy, the right platforms and the right skills. We help with all three.</p>
                                </div>
                            </div>
                            <div className="offset-lg-0 col-lg-6 col-md-12 col-sm-12 align-self-center">
                                <img src={pic1} className="img-fluid float-right" alt="Title"/>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
            
        </div>
    </div>
</section>
)

export default NewFeatures;