import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import './BeerItem.css'
import '../Assets/css/common.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
const defaultThumbnail = 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg';

class BeerItem extends Component {

    render() {
        var thumbnail = this.props.thumbnail == ''? defaultThumbnail : this.props.thumbnail;
        return(
            <Link to={'/details/' + this.props.beerid}>
                <div className="padding-5 beer-item white-bg">
                    <div className="row">
                        <div className="col-xs-12">
                            <img src={thumbnail} width={150} height={150} className="center-item"/>
                        </div>
                    </div>

                    <div className="h10"/>

                    <div className="row">
                        <div className="col-xs-12 center-text">
                            <span className="grey-text fs-20">{this.props.beername.substring(0, 32)}</span>
                        </div>
                    </div>
                
                    <div className="h10"/>

                    <div className="row">
                        <div className="col-xs-12 center-text">
                                <span className="blue-text fs-20">More</span>
                        </div>
                </div>
            </div>
            </Link>
        );
    }
}


BeerItem.propTypes = {
    thumbnail: PropTypes.string,
    beername: PropTypes.string,
    beerid: PropTypes.string
 };
 
 BeerItem.defaultProps = { 
    thumbnail: defaultThumbnail,
    beername: ''
 };
   
 export default BeerItem;
   