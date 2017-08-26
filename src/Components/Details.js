import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import FilterContainer from '../Containers/FilterContainer'
import Button from './Button'
import '../Assets/css/Details.css'
import '../Assets/css/common.css'

class Details extends Component {
    render(){
        return (
            <div id="DetailsPage">
                <div className="turquoise-bg">
                    <div className="container">
                        <FilterContainer />
                    </div>
                </div>
                <div className="container">
                    <div className="h20"/>
                    <div>
                            <div className ="col-sm-7 col-xs-12">
                                <span className="fs-40 bold" id="DetailsBeerName">{this.props.name}</span>
                                <div className="h10"/>
                                <span className="fs-18"><i>{this.props.style}</i></span>
                                <div className="h10"/>
                                <p className="fs-20 justify-text"><span className="bold">Description:</span> {this.props.description}</p>
                                <p className="fs-20"><span className="bold">Verification Status:</span> {this.props.statusDisplay}</p>
                                <p className="fs-20"><span className="bold">ABV:</span> {this.props.abv}</p>
                                <p className="fs-20"><span className="bold">IBU:</span> {this.props.ibu}</p>
                                <p className="fs-20"><span className="bold">Organic:</span> {this.props.organic}</p>
                                <p className="fs-20"><span className="bold">Availability:</span> {this.props.available}</p>
                                <p className="fs-20"><span className="bold">Glassware:</span> {this.props.glass}</p>
                                <p className="fs-20"><span className="bold">SRM:</span> {this.props.srm}</p>
                                <p className="fs-20"><span className="bold">Created:</span> {this.props.createDate}</p>
                            </div>

                            <div className ="col-sm-5 col-xs-12">
                                <img src={this.props.thumbnail} className="center-item full-width" alt={this.props.name} />
                            </div>
                            
                    </div>
                    
                    <div className="h20"/>

                    <div className="row">
                        <div className="col-sm-2 col-sm-offset-5 col-xs-12">
                            <div id="BackButtonDetails">
                                <Link to={'/search' + this.props.query}>
                                    <Button background="red-bg" placeholder="Back" />
                                </Link> 
                            </div>
                        </div>                            
                    </div>
                    <div className="h30"/>
                    
                </div>
            </div>
            );
    }
}

export default Details;