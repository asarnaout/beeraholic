import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import InputText from './InputText'
import Button from './Button'
import Selector from './Selector'
import '../Assets/css/common.css'
import '../Assets/css/Filter.css'
import BeerIconImage from '../Assets/Images/beer-icon.png'

class Filter extends Component{

    render(){
        let filterVisibilityClass = this.props.filterCollapsed? " hidden-xs " : "";

        return (<div id="Filter">
                    <h1 className="black-text bold no-margin white-text">
                        <Link to={'/search'}>
                            <img id="BeerIcon" src={BeerIconImage} width={55} alt="beer_ico" onClick={this.props.searchBeers} />
                        </Link>
                        <span className="white-text" id="SearchHeader">&nbsp;Keep Calm And Grab A Beer</span>
                    </h1>

                    <div className="visible-xs padding-5 center-text" id="Filter-Toggle" onClick={this.props.toggleFilter}>
                        <span className="white-text">Search Your Favorite Beer &nbsp;</span>
                        <span className="glyphicon glyphicon-search fs-12 white-text" />                   
                    </div>

                    <div className="h30 hidden-xs" />
                    <div className="h15 hidden-xs" />
                    <div className={"row" + filterVisibilityClass} >
                        <div className="col-xs-12 col-md-2">
                            <InputText placeholder={this.props.beernamePlaceholder} id="beername" handleKeyPress={this.props.handleKeyPress}/>
                        </div>
                        
                        <div className="col-xs-12 col-md-2">
                            <InputText placeholder={this.props.abvPlaceHolder} id="abv" handleKeyPress={this.props.handleKeyPress} />
                        </div>

                        <div className="col-xs-12 col-md-2">
                            <InputText placeholder={this.props.ibuPlaceHolder} id="ibu"  handleKeyPress={this.props.handleKeyPress} />
                        </div>

                        <div className="col-xs-12 col-md-2">
                            <Selector placeholder="Year" options={this.props.yearOptions} id="year" handleSelectChange={this.props.handleSelectChange} value={this.props.year} />
                        </div>

                        <div className="col-xs-12 col-md-2">
                            <Selector id="sort" placeholder="Sort" options={this.props.sortOptions} handleSelectChange={this.props.handleSelectChange} value={this.props.sort}/>
                        </div>

                        <div className="col-xs-12 col-md-2">
                            <Link to={'/search?ibu=' + this.props.ibu + "&abv=" + this.props.abv + "&beername=" + this.props.beername + "&year=" + this.props.year + "&sort="+ this.props.sort}>
                                <Button placeholder="Search" background="red-bg" clickHandler={this.props.searchBeers}/>
                            </Link>
                        </div>
                    </div>
                </div>);
    }
}

export default Filter;