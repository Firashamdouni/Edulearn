import React,{Component} from "react";
import {Carousel} from "react-responsive-carousel";
import {NavLink} from "react-router-dom";



class LatestNews extends Component{
    render(){
        return(
            <div id="rs-latest-news" className="rs-latest-news sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-4 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>LASTEST NEWS</h2>
                                <p>Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                                .
                            </p>
                        </div>
                        <span className="col-lg-3"></span>
            <Carousel className="col-lg-5 carousel"  autoPlay={true} showThumbs={false} infiniteLoop={true} emulateTouch={true} showStatus={false} >

                    <div className="news-normal-block">
                        <div className="news-img">
                            <NavLink to="#">
                                <img src="images/blog/1.jpg" alt=""/>
                            </NavLink>
                        </div>
                        <div className="news-date text-white">
                            <i className="fa fa-calendar-check-o"></i>
                            <span>June  28,  2017</span>
                        </div>
                        <h4 className="news-title"><NavLink to="blog-details.html">Those Other
                            College Expenses You Aren't Thinking About</NavLink></h4>
                        <div className="news-desc">
                            <p>
                                Blandit rutrum, erat et egestas ultricies, dolor tortor egestas
                                enim, quiste rhoncus sem the purus eu sapien curabitur.Lorem
                                Ipsum is therefore always free from repetitionetc.
                            </p>
                        </div>
                        <div className="news-btn">
                            <NavLink to="#">Read More</NavLink>
                        </div>
                    </div>




            <div className="news-normal-block" >
            <div className="news-img">
            <NavLink to="#">
            <img src="images/blog/5.jpg" alt=""/>
            </NavLink>
    </div>
    <div className="news-date">
            <i className="fa fa-calendar-check-o"></i>
        <span>June  28,  2017</span>
        </div>
        <h4 className="news-title"><NavLink to="blog-details.html">Those Other
            College Expenses You Aren't Thinking About</NavLink></h4>
        <div className="news-desc">
            <p>
            Blandit rutrum, erat et egestas ultricies, dolor tortor egestas
        enim, quiste rhoncus sem the purus eu sapien curabitur.Lorem
        Ipsum is therefore always free from repetitionetc.
    </p>
    </div>
        <div className="news-btn">
            <NavLink to="#">Read More</NavLink>
        </div>
        </div>



        <div className="news-normal-block">
            <div className="news-img">
            <NavLink to="#">
            <img src="images/blog/6.jpg" alt=""/>
            </NavLink>
    </div>
    <div className="news-date">
            <i className="fa fa-calendar-check-o"></i>
        <span>June  28,  2017</span>
        </div>
        <h4 className="news-title"><NavLink to="blog-details.html">Those Other
            College Expenses You Aren't Thinking About</NavLink></h4>
        <div className="news-desc">
            <p>
            Blandit rutrum, erat et egestas ultricies, dolor tortor egestas
        enim, quiste rhoncus sem the purus eu sapien curabitur.Lorem
        Ipsum is therefore always free from repetitionetc.
    </p>
    </div>
        <div className="news-btn">
            <NavLink to="#">Read More</NavLink>
        </div>
        </div>


            </Carousel>


</div>
                </div>
            </div>






        )
    }
}
export default LatestNews;