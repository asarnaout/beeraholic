import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import './BeerItem.css'
import '../Assets/css/common.css'

class BeerItem extends Component {

    viewMore(){

    }

    render() {
        return(
            <div className="padding-5">
                <div className="row">
                    <div className="col-xs-12">
                        <img src={this.props.thumbnail} width={185} height={185}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 center-text">
                        <span className="black-text fs-18">{this.props.beername.substring(0, 19)}</span>
                    </div>
                </div>
            
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
    thumbnail: 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg',
    beername: ''
 };
   
 export default BeerItem;
   