import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import InputText from './InputText'
import Selector from './Selector'
import '../Assets/css/common.css'
import './Filter.css'

class Filter extends Component {

    getYears(){
        let result = [{value: -1, text: 'Year'}];
        for(let i = 1900; i < 2017; i++) {
            result.push({value: i, text: i})
        }
        return result;
    }

    handleKeyPress(key, id){    
        this.props.handleKeyPress(key, id);
    }

    render(){
        return(
            <div id="Filter">
                <h1 className="black-text bold fs-50 no-margin white-text" id="SearchHeader">
                        <img id="BeerIcon" width={55} height={55} />
                        <span>&nbsp;Search Our Huge Beer Inventory</span>                     
                </h1>
                <div className="h30"/>
                <div className="row">
                    <div className="col-xs-2">
                        <InputText placeholder="Name" id="beername"  handleKeyPress={this.handleKeyPress.bind(this)}/>
                    </div>
                    
                    <div className="col-xs-2">
                        <InputText placeholder="ABV" id="abv"  handleKeyPress={this.handleKeyPress.bind(this)} />
                    </div>

                    <div className="col-xs-2">
                        <InputText placeholder="IBU" id="ibu"  handleKeyPress={this.handleKeyPress.bind(this)} />
                    </div>

                    <div className="col-xs-2">
                        <Selector options={this.getYears()} />
                    </div>

                    <div className="col-xs-2">
                        <Selector options={[{value: "", text:"Sort By"}, {value: "name", text:"Name"}, {value: "abv", text:"ABV"}, {value: "ibu", text:"IBU"}, {value: "createDate", text:"Creation Date"}, {value: "glasswareId", text:"Glassware"}, {value: "availableId", text:"Availability"}, {value: "styleId", text:"Style"}, {value: "isOrganic", text:"Organic"}]} />
                    </div>

                    <div className="col-xs-2">
                        <Button placeholder="Search" background="red-bg" clickHandler={this.props.onFilter}/>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Filter;