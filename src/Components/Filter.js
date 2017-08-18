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

    render(){
        
        return(
            <div id="Filter">
                <div className="row">
                    <div className="col-xs-2">
                        <InputText placeholder="Name" />
                    </div>
                    
                    <div className="col-xs-2">
                        <InputText placeholder="ABV" />
                    </div>

                    <div className="col-xs-2">
                        <InputText placeholder="IBU" />
                    </div>

                    <div className="col-xs-2">
                        <Selector options={this.getYears()} />
                    </div>

                    <div className="col-xs-2">
                        <Selector options={[{value: "", text:"Sort By"}, {value: "name", text:"Name"}, {value: "abv", text:"ABV"}, {value: "ibu", text:"IBU"}, {value: "createDate", text:"Creation Date"}, {value: "glasswareId", text:"Glassware"}, {value: "availableId", text:"Availability"}, {value: "styleId", text:"Style"}, {value: "isOrganic", text:"Organic"}]} />
                    </div>

                    <div className="col-xs-2">
                        <Button placeholder="Search" />
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Filter;