import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Prof from '../prof/profcomponent'
import CoursesHome from '../../componentsHome/coursesHome';
import Home from '../../components/Home';
import SidebarAdmin from '../sidebar';
import Dashboard from  './dashbord';
import Parent from './parents';
import Course from './course';
import Event from './event';
import'../style.css';
import Staff from './staff';
import Student from './students';
class Profile extends Component {
    render() {

        return (
            <div className="containera container" style={{ marginTop:"100px" }}>
                <div className="row  d-flex m-5 ">
				<SidebarAdmin/>
				<div className="col-lg-12">
                <Route exact path="/profile/admin" component={Dashboard}/>
				<Route path="/profile/admin/staff" component={Staff}/>
				<Route path="/profile/admin/parents" component={Parent}/>
				<Route path="/profile/admin/courses" component={Course}/>
				<Route path="/profile/admin/events" component={Event}/>
                <Route path="/profile/admin/students" component={Student}/>
             
				</div>
				</div>
                            </div>
                   
                     
		
        );

    }

}


function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Profile);

