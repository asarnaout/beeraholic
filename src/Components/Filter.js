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
        return (<div id="Filter">
                    <h1 className="black-text bold fs-50 no-margin white-text" id="SearchHeader">
                            <Link to={'/search'}>
                                <img id="BeerIcon" src={BeerIconImage} width={55} height={55} />
                            </Link>
                            <span className="white-text">&nbsp;Keep Calm And Grab A Beer</span>                     
                    </h1>
                    <div className="h30"/>
                    <div className="h15"/>
                    <div className="row">
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
                            <Selector options={this.props.yearOptions} id="year" handleSelectChange={this.props.handleSelectChange} value={this.props.year} />
                        </div>

                        <div className="col-xs-12 col-md-2">
                            <Selector id="sort" options={this.props.sortOptions} handleSelectChange={this.props.handleSelectChange} value={this.props.sort}/>
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