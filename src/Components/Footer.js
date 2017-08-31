import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BeerIconImage from '../Assets/Images/beer-icon.png'

class Footer extends Component {

    render() {
        return (
            <div className="footer fs-14 white-bg">
                <div>
                    <div className="container">
                        <div className="row no-margin center-text">

                            <div className="col-xs-12 col-sm-2 footer-item">
                                <Link to={'/aboutus'}>
                                    <span className="white-text">About Us</span>
                                </Link>
                            </div>

                            <div className="col-xs-12 col-sm-2 footer-item">
                                <Link to={'/contactus'}>
                                    <span className="white-text">Contact Us</span>
                                </Link>
                            </div>

                            <div className="col-xs-12 col-sm-2 footer-item">
                                <Link to={'/privacypolicy'}>
                                    <span className="white-text">Privacy Policy</span>
                                </Link>
                            </div>
                            
                            <div className="col-xs-12 col-sm-2 footer-item">
                                <Link to={'/termsofservice'}>
                                    <span className="white-text">Terms Of Service</span>
                                </Link>
                            </div>
                            
                            <div className="col-xs-12 col-sm-2 footer-item">
                                <Link to={'/cookiepolicy'}>
                                    <span className="white-text">Cookie Policy</span>
                                </Link>
                            </div>

                            <div className="col-xs-12 col-sm-2 footer-item">
                                <img id="BeerIcon" src={BeerIconImage} width="20" alt="beer_ico" />
                                <span className="white-text tm">&nbsp;Beeraholic™</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;