import React, { Component } from 'react';
import axios from 'axios'
import config from '../config.js'
import Filter from '../Components/Filter'

class FilterContainer extends Component {

    constructor(props){
        super(props);
        
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.fetchAllBeer = this.fetchAllBeer.bind(this);
        this.toggleFilter = this.toggleFilter.bind(this);

        this.state = {
            items: [],
            page: this.props.page,
            ibu: this.props.ibu === undefined? '' : this.props.ibu,
            abv: this.props.abv === undefined? '' : this.props.abv,
            beername: this.props.beername === undefined? '' : this.props.beername,
            year: this.props.year === undefined? '' : this.props.year,
            sort: this.props.sort === undefined? '' : this.props.sort,
            filterCollapsed: true
        }
    }

    componentWillMount(){
        this.setState({
            abvPlaceHolder: this.state.abv === ''? "ABV" : this.state.abv,
            ibuPlaceHolder: this.state.ibu === ''? "IBU" : this.state.ibu,
            beernamePlaceholder: this.state.beername === ''? "Name" : this.state.beername
        });
        this.fetchAllBeer(this.state.page);
    }

    getYears(){
        let result = [];
        for(let i = 2017; i >= 1900; i--) {
            let obj = {value: i, label: i};
            result.push(obj)
        }
        return result;
    }

    getSortingCriteria(){
        let criteria = [{value: "name", label:"Name"}, 
        {value: "abv", label:"ABV"}, 
        {value: "ibu", label:"IBU"}, 
        {value: "createDate", label:"Creation Date"}, 
        {value: "glasswareId", label:"Glassware"}, 
        {value: "availableId", label:"Availability"}, 
        {value: "isOrganic", label:"Organic"}];

        criteria.map((item) => {
            if(this.state.sort === item.value){
                item.selected = true;
            }
            return item;
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
        if(typeof(page) !== 'number') {            
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
        if(nextProps.page !== this.props.page) {
            this.setState({page: nextProps.state});
            this.fetchAllBeer(nextProps.page);
        }
    }

    toggleFilter() {
        this.setState({filterCollapsed: !this.state.filterCollapsed})
    }

    render(){
        return <Filter beernamePlaceholder={this.state.beernamePlaceholder} abvPlaceHolder={this.state.abvPlaceHolder} ibuPlaceHolder={this.state.ibuPlaceHolder}
            handleKeyPress={this.handleKeyPress} handleSelectChange={this.handleSelectChange} yearOptions={this.getYears()}
            sortOptions={this.getSortingCriteria()} ibu={this.state.ibu} abv={this.state.abv} beername={this.state.beername} 
            year={this.state.year} sort={this.state.sort} searchBeers={this.fetchAllBeer} toggleFilter={this.toggleFilter} filterCollapsed={this.state.filterCollapsed}  />
    }
}

export default FilterContainer;