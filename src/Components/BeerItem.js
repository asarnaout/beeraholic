import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BeerItem extends Component {

    viewMore(){

    }

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <img src={this.props.thumbnail}/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12">
                        <span>{this.props.beername}</span>
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
    thumbnail: PropTypes.string
 };
 
 BeerItem.defaultProps = { 
    thumbnail: 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg',
 };
   
 export default BeerItem;
   