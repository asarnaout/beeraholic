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
        
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.fetchAllBeer = this.fetchAllBeer.bind(this);

        this.state = {
            items: [],
            page: this.props.page,
            ibu: this.props.ibu === undefined? '' : this.props.ibu,
            abv: this.props.abv === undefined? '' : this.props.abv,
            beername: this.props.beername === undefined? '' : this.props.beername,
            year: this.props.year === undefined? '' : this.props.year,
            sort: this.props.sort === undefined? '' : this.props.sort
        }
    }

    componentWillMount(){
        this.fetchAllBeer(this.state.page);
    }

    getYears(){
        let result = [{value: '', text: 'Year'}];
        for(let i = 2017; i >= 1900; i--) {
            let obj = {value: i, text: i};
            if(i === this.state.year ) {       
                obj.selected = true;
            }
            result.push(obj)
        }
        return result;
    }

    getSortingCriteria(){
        var criteria = [{value: "", text:"Sort By"}, 
        {value: "name", text:"Name"}, 
        {value: "abv", text:"ABV"}, 
        {value: "ibu", text:"IBU"}, 
        {value: "createDate", text:"Creation Date"}, 
        {value: "glasswareId", text:"Glassware"}, 
        {value: "availableId", text:"Availability"}, 
        {value: "isOrganic", text:"Organic"}];

        criteria.map((item) => {
            if(this.state.sort === item.value){
                item.selected = true;
            }
        });
        return criteria;
    }

    handleKeyPress(value, id){    
        let newValue = {};
        newValue[id] = value;
        this.setState(newValue);
    }

    handleSelectChange(value, id){ //Decoupling the same logic into separate functions in case different logic will be introduced later on handling differnt types of input
        let newValue = {};
        newValue[id] = value;
        this.setState(newValue);
    }

    fetchAllBeer(page){
        if(typeof(page) != 'number') {            
            page = 1;
        }
        this.props.searchHandler();
        
        let queryString = "?p=" + page + "&name=" + this.state.beername + "&ibu=" + this.state.ibu + "&abv=" + this.state.abv + "&year=" + this.state.year + "&order=" + this.state.sort
        ;(axios({
            method: 'get',
            url: config.apiEndpoint + 'beers' + queryString,
          })).then(response => {
              let beers = typeof (response.data.data) === 'undefined'? [] : response.data.data;
              let pages = response.data.numberOfPages;
              this.setState({items: beers});
              this.updateParent(beers, pages);
          }); 
    }

    updateParent(beers, pages){
        if(!(typeof(this.props.updateItems) === 'undefined')) {
            this.props.updateItems(beers, pages);
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.page != this.props.page) {
            this.setState({page: nextProps.state});
            this.fetchAllBeer(nextProps.page);
        }
    }

    render(){
        let beernamePlaceholder = this.state.beername === ''? "Name" : this.state.beername;
        let abvPlaceHolder = this.state.abv === ''? "ABV" : this.state.abv;
        let ibuPlaceHolder = this.state.ibu === ''? "IBU" : this.state.ibu;
        
        return(
            <div id="Filter">
                <h1 className="black-text bold fs-50 no-margin white-text" id="SearchHeader">
                        <Link to={'/dashboard'}>
                            <img id="BeerIcon" width={55} height={55} />
                        </Link>
                        <span>&nbsp;Keep Calm And Grab A Beer</span>                     
                </h1>
                <div className="h30"/>
                <div className="h15"/>
                <div className="row">
                    <div className="col-xs-12 col-md-2">
                        <InputText placeholder={beernamePlaceholder} id="beername"  handleKeyPress={this.handleKeyPress}/>
                    </div>
                    
                    <div className="col-xs-12 col-md-2">
                        <InputText placeholder={abvPlaceHolder} id="abv"  handleKeyPress={this.handleKeyPress} />
                    </div>

                    <div className="col-xs-12 col-md-2">
                        <InputText placeholder={ibuPlaceHolder} id="ibu"  handleKeyPress={this.handleKeyPress} />
                    </div>

                    <div className="col-xs-12 col-md-2">
                        <Selector options={this.getYears()} id="year" handleSelectChange={this.handleSelectChange} />
                    </div>

                    <div className="col-xs-12 col-md-2">
                        <Selector id="sort" options={this.getSortingCriteria()} handleSelectChange={this.handleSelectChange} />
                    </div>

                    <div className="col-xs-12 col-md-2">
                        <Link to={'/dashboard?ibu=' + this.state.ibu + "&abv=" + this.state.abv + "&beername=" + this.state.beername + "&year=" + this.state.year + "&sort="+ this.state.sort}>
                            <Button placeholder="Search" background="red-bg" clickHandler={this.fetchAllBeer}/>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }

}

export default Filter;