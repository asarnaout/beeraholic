import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import '../Assets/css/BeerItem.css'
import '../Assets/css/common.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import config from '../config.js'

class BeerItem extends Component {

    render() {
        var thumbnail = this.props.thumbnail === ''? config.defaultSearchItemIconCdn : this.props.thumbnail;
        return(
            <Link to={'/details/' + this.props.beerid}>
                <div className="beer-item white-bg">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className="glyphicon glyphicon-heart-empty empty-ht"></span>
                            <img src={thumbnail} className="full-width"/>
                        </div>
                    </div>

                    <div className="h10"/>

                    <div className="row">
                        <div className="col-xs-10">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="full-width beer-name-parent"><span className="grey-text fs-16">{this.props.beername}</span></div>
                                </div>
                            </div>

                            <div className="h10"/>

                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="full-width beer-name-parent"><i className="grey-text fs-14">{this.props.beerstyle}</i></div>
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-xs-2">
                            <span className="glyphicon glyphicon-menu-right fs-20 bold more grey-text"/>
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
    thumbnail: config.defaultSearchItemIconCdn,
    beername: ''
 };
   
 export default BeerItem;
   