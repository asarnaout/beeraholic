import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Assets/css/BeerItem.css'
import '../Assets/css/common.css'
import { Link } from 'react-router-dom'
import config from '../config.js'

class BeerItem extends Component {

    constructor(props) {
        super(props);
        this.toggleFav = this.toggleFav.bind(this);
    }

    toggleFav(e) {
        this.props.toggleFav(this.props.beerid);
        e.preventDefault();
        this.forceUpdate();
    }

    render() {
        let qs = `?ibu=${this.props.filterIbu}&abv=${this.props.filterAbv}&name=${this.props.filterName}&year=${this.props.filterYear}&order=${this.props.filterOrder}&page=${this.props.filterPage}`;
        let thumbnail = this.props.thumbnail === ''? config.defaultSearchItemIconCdn : this.props.thumbnail;
        let heartClass = this.props.isFav? "glyphicon-heart full-ht" : "glyphicon-heart-empty empty-ht"
        
        return(
            <Link to={'/details/' + this.props.beerid + qs}>
                <div className="beer-item white-bg">
                    <div className="row">
                        <div className="col-xs-12">
                            <span className={"glyphicon heart " + heartClass} onClick={this.toggleFav}></span>
                            <img src={thumbnail} className="full-width" alt={this.props.beername}/>
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
   