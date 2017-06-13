import React, {Component} from 'react';

const MainHeader = () =>
            <header>
                <div className="left-side">
                    <div className="menu-button">
                        <button className="hamburger1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                    <div className="collapse menu-item" id="collapseExample">
                        <li className="well">
                            How It Works
                        </li>
                        <li className="well">
                            Discover
                        </li>
                        <li className="well">
                            Contact Us
                        </li>   
                    </div>
                </div>
                <div className="right-side">
                        <button type="button" className="btn btn-success"><span className="glyphicon glyphicon-log-in"></span>Log In</button>
                        <button type="button" className="btn btn-danger"><span className="glyphicon glyphicon-user"></span>Sign Up</button>
                </div>
            </header>;
 
export default MainHeader;