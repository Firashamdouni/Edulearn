import React, { Component } from 'react';
import Staff1 from "./image/team1.jpg";
import Staff2 from "./image/team2.jpg";
import Staff3 from "./image/team3.jpg";
import Staff4 from "./image/team4.jpg";
import Staff5 from "./image/team5.jpg";
import Staff6 from "./image/team6.jpg";
import StaffElement from "./staffItem";


class Staff extends Component{
    constructor(){
        super()
        this.state={

            tabStaff:[
                {
                    image:Staff1,
                    name:"ABD Rashid Khan",
                    subtitle:"Vice Chancellor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
                {
                    image:Staff2,
                    name:"Luyes Figery",
                    subtitle:"A. Professor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
                {
                    image:Staff3,
                    name:"Mr. Mahabub Alam",
                    subtitle:"Assistant Professor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
                {
                    image:Staff4,
                    name:"ABD Rashid Khan",
                    subtitle:"Vice Chancellor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
                {
                    image:Staff5,
                    name:"kelly Hamman",
                    subtitle:"Vice Chancellor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
                {
                    image:Staff6,
                    name:"Gary Cahill",
                    subtitle:"A. Professor",
                    description:"Entrusted with planning, implementation and evaluation.",

                },
            ]

        }
    }
    render(){
        return(
            <div id="rs-team" className="rs-team sec-color sec-spacer">
                <div className="container">
                    <div className="row rs-vertical-middle">
                        <div className="col-lg-6 col-md-12">
                            <div className="sec-title mb-30">
                                <h2>EXPERIENCED STAFFS</h2>
                                <p>Fusce sem dolor inter in efficitur faucibus.</p>
                            </div>
                            <p className="mobile-mb-50">
                                On the other hand, we denounce with righteous indignation and dislike men who are so
                                beguiled and demoralized
                                .
                            </p>
                        </div>



                                {this.state.tabStaff.map((el,i)=><StaffElement key={i} el={el}/>)}




                    </div>
                </div>
            </div>
        )
    }
}
export default Staff;