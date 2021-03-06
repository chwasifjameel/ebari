import React,{useState} from 'react'


function FrequentQuestions(){
    const [isOpen1,set1]=useState(false)
    const [isOpen2,set2]=useState(false)
    const [isOpen3,set3]=useState(false)
    const [isOpen4,set4]=useState(false)
    const [isOpen5,set5]=useState(false)
    const [isOpen6,set6]=useState(false)
    const [isOpen7,set7]=useState(false)
    return(
    <section className="page">
    <div className="page-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12 col-sm-12">
                    <div className="faq-wrapper">
                        <div className="faq-header">
                            <h2>Freequently Asked Questions</h2>
                            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>

                            <div className="search">
                                <input type="text" placeholder="Search asked questions"/>
                                <button><i className="fa fa-search"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="faq" id="accordion">
                        <div className="card">
                            <div className="card-header" id="faqHeading-1">
                                <div className="mb-0">
                                    <h5 className={isOpen1?'faq-title':'collapsed faq-title'} onClick={()=>set1(!isOpen1)}>
                                        <div className="num">1</div>How does inox Internet work?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-1" className={isOpen1?'collapse show':'collapse'} aria-labelledby="faqHeading-1" data-parent="#accordion">
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-2">
                                <div className="mb-0">
                                    <h5  className={isOpen2?'faq-title':'collapsed faq-title'} onClick={()=>set2(!isOpen2)}>
                                        <div className="num">2</div>How fast is the inox Internet service?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-2" className={isOpen2?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-3">
                                <div className="mb-0">
                                    <h5  className={isOpen3?'faq-title':'collapsed faq-title'} onClick={()=>set3(!isOpen3)}>
                                        <div className="num">3</div>Can I keep my home phone number?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-3" className={isOpen3?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-4">
                                <div className="mb-0">
                                    <h5  className={isOpen4?'faq-title':'collapsed faq-title'} onClick={()=>set4(!isOpen4)}>
                                        <div className="num">4</div>How does the NBN affect my inox Internet Service?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-4" className={isOpen4?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-5">
                                <div className="mb-0">
                                    <h5 className={isOpen5?'faq-title':'collapsed faq-title'} onClick={()=>set5(!isOpen5)}>
                                        <div className="num">5</div>Iâ€™ve handed in my application. Now what happens?
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-5" className={isOpen5?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-6">
                                <div className="mb-0">
                                    <h5 className={isOpen6?'faq-title':'collapsed faq-title'} onClick={()=>set6(!isOpen6)}>
                                        <div className="num">6</div>What is involved in a standard install? 
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-6" className={isOpen6?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header" id="faqHeading-7">
                                <div className="mb-0">
                                    <h5 className={isOpen7?'faq-title':'collapsed faq-title'} onClick={()=>set7(!isOpen7)}>
                                        <div className="num">7</div>What if mapping is unsuccessful, do I have any other options? 
                                    </h5>
                                </div>
                            </div>
                            <div id="faqCollapse-7" className={isOpen7?'collapse show':'collapse'}>
                                <div className="card-body">
                                    <div className="content">
                                        <p>Aliquam erat odio, fringilla at porta a, vehicula ultricies est. Aliquam maximus turpis in dignissim pellentesque. Ut dolor quam, aliquam eget bibendum nec, luctus non metus. Morbi convallis imperdiet dolor id porttitor.</p>
                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed finibus faucibus congue. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="col-lg-4 col-md-12 col-sm-12">
                    <aside className="default-aside">
                        <div className="sidebar">
                            <ul>
                                <li><a href="#">For fellows</a></li>
                                <li><a href="#">For host companies</a></li>
                                <li><a href="#">Demo Day</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>

                            <div className="box">
                                <img src="assets/images/photos/home/1.jpg" alt=""/>
                                <div className="hovered align-self-center">
                                    <p>Applications are now open<br/>January 2020<br/>Become an intelligence analyst in the New Year</p>
                                    <a className="light-btn" href="#">
                                        <span className="show-btn">APPLY TO FELLOWSHIP</span>
                                        <span className="hide-btn">CONTACT US</span>
                                    </a>
                                </div>
                            </div>
                            <div className="box">
                                <img src="assets/images/photos/home/1.jpg" alt=""/>
                                <div className="hovered align-self-center">
                                    <p>Host a fellow - September 2019<br/> Want to tap the worldâ€™s leading space talent pipeline? Discover how an Ebrai Space fellow could transform your business or organisation.</p>
                                    <a className="light-btn" href="#">
                                        <span className="show-btn">CONTACT US</span>
                                        <span className="hide-btn">CONTACT US</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
</section>
)
}

export default FrequentQuestions