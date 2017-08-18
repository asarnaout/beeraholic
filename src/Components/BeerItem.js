import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import './BeerItem.css'
import '../Assets/css/common.css'
const defaultThumbnail = 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg';

class BeerItem extends Component {

    viewMore(){

    }

    render() {
        var thumbnail = this.props.thumbnail == ''? defaultThumbnail : this.props.thumbnail;
        return(
            <div className="padding-5 beer-item">
                <div className="row">
                    <div className="col-xs-12">
                        <img src={thumbnail} width={180} height={180}/>
                    </div>
                </div>

                <div className="h10"/>

                <div className="row">
                    <div className="col-xs-12 center-text">
                        <span className="blue-text fs-20">{this.props.beername.substring(0, 15)}</span>
                    </div>
                </div>
            
                <div className="h10"/>
            
                <div className="row">
                    <div className="col-xs-12">
                        <Button placeholder="More" clickHandler={this.viewMore}/>
                    </div>
                </div>
            
            </div>
        );
    }
}


BeerItem.propTypes = {
    thumbnail: PropTypes.string,
    beername: PropTypes.string
 };
 
 BeerItem.defaultProps = { 
    thumbnail: defaultThumbnail,
    beername: ''
 };
   
 export default BeerItem;
   