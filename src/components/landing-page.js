import React, {Component} from 'react';
import MainHeader from './header-nav';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';


const LandingPage = () =>
   <div id="main-image">
        <MainHeader />
        <div className="mainbody-div">
           <button className="banner-btn">
                 <span>Learn More</span>
            </button>
        </div> 
   </div>;

export default LandingPage;