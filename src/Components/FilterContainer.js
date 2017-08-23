import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import config from '../config.js'
import Filter from './Filter'

class FilterContainer extends Component {

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
        
        return <Filter beernamePlaceholder={beernamePlaceholder} abvPlaceHolder={abvPlaceHolder} ibuPlaceHolder={ibuPlaceHolder}
            handleKeyPress={this.handleKeyPress} handleSelectChange={this.handleSelectChange} yearOptions={this.getYears()}
            sortOptions={this.getSortingCriteria()} ibu={this.state.ibu} abv={this.state.abv} beername={this.state.beername} 
            year={this.state.year} sort={this.state.sort} searchBeers={this.fetchAllBeer} />
    }
}

export default FilterContainer;