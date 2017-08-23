import React, { Component } from 'react';
import queryString from 'query-string';
import Search from '../Components/Search'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

class SearchContainer extends Component {

    constructor(props){
        super(props);    
        this.auth();
        this.updateItems = this.updateItems.bind(this);   
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.searchHandler = this.searchHandler.bind(this);

        this.state = {
            items: [],
            page: 1,
            loading: false,
            numberOfPages : 0,
            parsedQueryString: queryString.parse(this.props.location.search)
        }
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();

        if(!authenticated) {
            this.props.history.push('/home');
        }
    }

    componentWillMount(){
        document.body.style.backgroundImage = `none`;
    }

    updateItems(newItems, pages) {
        if(newItems === this.state.items) return;
        this.setState({items: newItems, loading: false, numberOfPages: pages});
    }
        
    nextPage(){
        this.searchHandler();
        let page = ++this.state.page;
        this.setState({page: page});
        this.forceUpdate();
    }

    previousPage(){ //Nearly same logic decoupled to different methods to allow later introduction of different logic on handling the next/previous buttons
        this.searchHandler();
        let page = --this.state.page;
        this.setState({page: page});
        this.forceUpdate();
    }

    searchHandler(){
        this.setState({
            loading: true
        });
    }

    render() {
        return (<Search items={this.state.items} page={this.state.page} loading={this.state.loading} nextPage={this.nextPage} numberOfPages={this.state.numberOfPages}
            previousPage={this.previousPage} updateItems={this.updateItems} searchHandler={this.searchHandler} 
            ibu={this.state.parsedQueryString.ibu} abv={this.state.parsedQueryString.abv} beername={this.state.parsedQueryString.beername} 
            year={this.state.parsedQueryString.year} sort={this.state.parsedQueryString.sort} />);
    }

}

export default SearchContainer;