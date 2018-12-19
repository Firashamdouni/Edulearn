import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import admincomponent from './admin/admincomponent';
import Dashboard from './admin/dashbord';
import Courses from './admin/course';
import Event from './admin/event';
import Parent from './admin/parents';
import Staff from './admin/staff';
import './sidebar.css';
import './style.css';



class SidebarAdmin extends Component {
    render() {
        return (

      <div style={{position:"absolute",left:"0",zIndex:"5000"}}>
          <button type="button" class="btn btn-info" data-toggle="collapse" data-target="#wrapper">  <a id="nav-expander" class="nav-expander fixed"><i class="fa fa-bars fa-lg white"></i></a></button>
          <div id="wrapper"className="wrapper">
        <nav id="sidebar">
            <div  id ="sidebar-header"class="sidebar-header">
            <img src="images/logo.png"/>
            </div>
            <ul class="list-unstyled components">
                <li>
               
                   
                      <Link to="/profile/admin"> <i class="fa fa-home"></i>Dashboard</Link> 
             
                </li>
                <li>
        
                   <Link to="/profile/admin/staff"><i class="fa fa-cog"></i>Staff</Link>
                   </li>
     
                <li>
                 
               
                    <Link to="/profile/admin/parents"><i class="fa fa-users"></i>Parent</Link>
                </li>
                <li>
                 
                    <Link to="/profile/admin/students">
                    <i class="fa fa-users"></i>Students</Link>
           
                </li>
                <li>
                   
                     <Link to="/profile/admin/courses"> <i class="fa fa-book"></i>   Courses</Link>  
                     
                 
                </li>
                <li>
                 
                 <Link to="/profile/admin/events"> <i class="fa fa-calendar"> </i> Event</Link>  
                     
            
                </li>
    
            </ul>
        </nav>

        </div> 
        </div>
  

   );
 }
}

 export default SidebarAdmin;
