import React, { Component } from 'react';
import About from "./components/About";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from './components/contactcomponent/contact';
import Event from './components/eventcomponent/event';
import Course from './components/coursecomponent/course';
import { BrowserRouter as Router, Route, Link,Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './actions';
import Footer from './components/footer';
import Profile from './profilecomponent/admin/admincomponent';
import ScrollUp from "./components/scrollUp";
import Prof from './profilecomponent/prof/profcomponent';


class App extends Component {
    
   componentDidMount(){
            this.props.fetchUser();
    }
    render() {
        console.log(this.props)
        console.log(this.props)
        return (
            <Router>
            <div className="App">
                <Header/>
                <ScrollUp/>
      <Route path="/home" exact component={Home} />
      <Route path="" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog/" component={Blog} />
      <Route path="/blog-details" component={Blog} />
      <Route path="/contact" component={Contact}/>
      <Route path="/event" component={Event}/>
      <Route path="/course" component={Course}/>
      <Route  exact path="/profile"  render={() => (
  ((this.props.auth.role===2)&&(this.props.auth))? (
    <Redirect exact to="/profile/prof"/>
  ) : ((this.props.auth.role===1)&&(this.props.auth))?(
    <Redirect exact to="/profile/admin"/>
    )
    :<Redirect  exact to="/"  />
  )}/>
  <Route   path="/profile/prof" component={Prof}/>
  <Route   path="/profile" component={Profile}/>
  
      <Footer/>
            </div>
            </Router>
   );
 }
}

function mapStateToProps({auth}){
    return {auth};
}

 export default connect(mapStateToProps,actions)(App);
