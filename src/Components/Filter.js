import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import InputText from './InputText'
import Selector from './Selector'
import { Link } from 'react-router-dom'
import '../Assets/css/common.css'
import './Filter.css'
import axios from 'axios'
import config from '../config.js'

class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            page: this.props.page,
            ibu: '',
            abv: '',
            beername: '',
            year: '',
            sort: ''
        }
    }

    componentWillMount(){
        this.fetchAllBeer(this.state.page);
    }

    getYears(){
        let result = [{value: '', text: 'Year'}];
        for(let i = 1900; i < 2017; i++) {
            result.push({value: i, text: i})
        }
        return result;
    }

    handleKeyPress(key, id){    
        let newValue = {};
        newValue[id] = this.state[id] + key;
        this.setState(newValue);
    }

    handleSelectChange(value, id){    
        let newValue = {};
        newValue[id] = value;
        this.setState(newValue);
    }

    fetchAllBeer(page){
        if(typeof(page) != 'number') {            
            page = 1;
        }
        let queryString = "?key=" + config.breweryApiKey + "&p=" + page + "&name=" + this.state.beername + "&ibu=" + this.state.ibu + "&abv=" + this.state.abv + "&year=" + this.state.year + "&order=" + this.state.sort
        ;(axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beers' + queryString,
          })).then(response => {
              let beers = typeof (response.data.data) === 'undefined'? [] : response.data.data;
              this.setState({items: beers});
              this.updateParent(beers);
          }); 
    }

    updateParent(beers){
        if(!(typeof(this.props.updateItems) === 'undefined')) {
            this.props.updateItems(beers);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.page != this.props.page) {
            this.setState({page: nextProps.state});
            this.fetchAllBeer(nextProps.page);
        }
    }

    render(){
        return(
            <div id="Filter">
                <h1 className="black-text bold fs-50 no-margin white-text" id="SearchHeader">
                        <Link to={'/dashboard'}>
                            <img id="BeerIcon" width={55} height={55} />
                        </Link>
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
                        <Selector options={this.getYears()} id="year" handleSelectChange={this.handleSelectChange.bind(this)} />
                    </div>

                    <div className="col-xs-2">
                        <Selector id="sort" options={[{value: "", text:"Sort By"}, {value: "name", text:"Name"}, {value: "abv", text:"ABV"}, {value: "ibu", text:"IBU"}, {value: "createDate", text:"Creation Date"}, {value: "glasswareId", text:"Glassware"}, {value: "availableId", text:"Availability"}, {value: "styleId", text:"Style"}, {value: "isOrganic", text:"Organic"}]} handleSelectChange={this.handleSelectChange.bind(this)} />
                    </div>

                    <div className="col-xs-2">
                        <Button placeholder="Search" background="red-bg" clickHandler={this.fetchAllBeer.bind(this)}/>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Filter;