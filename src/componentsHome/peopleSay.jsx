import React,{Component} from "react";


class PeopleSay extends Component{
    render(){

        return(
            <div id="rs-testimonial" className="rs-testimonial bg5 sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="sec-title mb-30">
                                <h2 className="white-color">WHAT PEOPLE SAYS</h2>
                                <p className="white-color">Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="white-color mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                            </p>
                        </div>

                        <div className="testimonial-item col-lg-3 m-4 col-md-12">
                            <div className="testi-img">
                                <img src="images/testimonial/4.jpg" alt="Jhon Smith"/>
                            </div>
                            <div className="testi-desc">
                                <h4 className="testi-name">Aliana D’suza</h4>
                                <p>
                                    Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut
                                    malesuada. Phasellus dictum est sed libero posuere dignissim.
                                </p>
                            </div>
                        </div>

    <div className="testimonial-item col-lg-3 m-4 col-md-12 ">
        <div className="testi-img">
            <img src="images/testimonial/5.jpg" alt="Jhon Smith"/>
        </div>
        <div className="testi-desc">
            <h4 className="testi-name">Aliana D’suza</h4>
            <p>
                Tempor non elit nec augue nec gravida et sed velit. Aliquam tempus eget lorem ut malesuada. Phasellus
                dictum est sed libero posuere dignissim.
            </p>
        </div>
    </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default PeopleSay
