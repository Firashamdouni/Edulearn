import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import './titleCarousel.css'

class TitleCarousel extends Component {
    renderContent=()=>{
        for(let key in this.props.auth) {
            if(this.props.auth.hasOwnProperty(key)) {
                var value = this.props.auth[key];
            console.log(key,":",value);
            }
        }
       
        switch(this.props.auth){
            case null:return;
            case false: return (
                <a  href="/auth/google" class="btn btn-small btn-social btn-google w-25 ml-3">
                <span class="fa fa-google"></span> Sign in with Google
              </a>
            );
            default: return (
            <a  href='/api/logout' class="btn btn-small btn-social btn-google w-25 ml-3">
            <span class="fa fa-google"></span> Logout
          </a>);
        }
    
    }
    render() {
        return (
            <div  style={{position:"absolute",top:"10vw", left:"5vw"}}>
                <h1 className="font-weight-bold text-white testText animated  fadeInLeft" style={{fontSize:"5vw"}}>WELCOME<br/>TO OUR UNIVERSITY</h1>
                <p className="text-white font-weight-bold animated fadeInUp" style={{fontSize:"1.5vw"}}>Fusce sem dolor, interdum in efficitur at, faucibus nec lorem.Sed nec molestie justo.<br/> Nunc quis sapien in arcu pharetra
                                                volutpat.Morbi nec vulputate dolor.
                </p>
                <NavLink to="#" ><button className="btn btn-dark animated fadeInUp">READ MORE</button></NavLink>
               {this.renderContent()}
 

            </div>






        );
    }
}

function mapStateToProps({auth}){
    return {auth};
}

export default connect (mapStateToProps) (TitleCarousel) ;