import React, { Component } from 'react';
import BeerItem from '../../Components/BeerItem'
import Filter from '../../Components/Filter'
import Button from '../../Components/Button'
import config from '../../config.js'
import '../../Assets/css/common.css'
import queryString from 'query-string';

class Dashboard extends Component {

    constructor(props){
        super(props);    
        
        this.updateItems = this.updateItems.bind(this);   
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.searchHandler = this.searchHandler.bind(this);

        this.state = {
            items: [],
            page: 1,
            loading: false,
            numberOfPages : 0
        }
    }

    componentWillMount(){
        document.body.style.backgroundImage = `none`;
    }

    updateItems(newItems, pages) {
        if(newItems === this.state.items) return;
        this.setState({items: newItems, loading: false, numberOfPages: pages});
    }
        
    getItems(){
        return this.state.items.map((beer) => {
            let thumbnail = beer.labels === undefined? '' : beer.labels.medium;
            let style = beer.style === undefined? 'Beer Style Not Available' : beer.style.name;
            return (<div className="col-lg-4 col-sm-6 col-xs-12">
                        <BeerItem thumbnail={thumbnail} beername={beer.name} beerid={beer.id} beerstyle={style} />
                    </div>
              );
        });
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

    getNavButtons(){
        let renderNextButton = this.state.page < this.state.numberOfPages;
        let renderPreviousButton = this.state.page > 1;

        if(renderNextButton && !renderPreviousButton) {
            return <img src={config.navArrowCdn} onClick={this.nextPage} width={40} height={40} className="center-item pointer"/>; 
        }

        if(!renderNextButton && renderPreviousButton) {
            return <img src={config.navArrowCdn} onClick={this.previousPage} width={40} height={40} className="center-item flip-Y pointer"/>; 
        }

        if(renderNextButton && renderPreviousButton) {
            return (
                <div className="center-text">
                    <img src={config.navArrowCdn} onClick={this.previousPage} width={40} height={40} className="inline flip-Y pointer margin-15"/>
                    <img src={config.navArrowCdn} onClick={this.nextPage} width={40} height={40} className="inline pointer margin-15"/>; 
                </div>
            ); 
        }
    }

    render() {
        let parsed = queryString.parse(this.props.location.search);
        let items = this.getItems();
        let results = items.length === 0? (<div className="row no-margin"><div className="h30"/><span className="fs-30 col-xs-12 center-text">No Results Found, Try Changing The Search Criteria</span></div>) : items;
        let content = this.state.loading? <div className="padding-20"><img src={config.defaultLoaderCdn} className="loading-icon center-item" height={100} width={100} /></div> : results;
        let navButtons = this.state.loading? <div></div> : this.getNavButtons();

        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                        <Filter updateItems={this.updateItems} page={this.state.page} 
                        searchHandler={this.searchHandler}
                        ibu={parsed.ibu} abv={parsed.abv} beername={parsed.beername} year={parsed.year} sort={parsed.sort}
                        />
                    </div>
                </div>
                <div className="container">
                    {content}                    
                </div>
                <div className="h10"/>
                <div className="row">
                    {navButtons}
                </div>
                <div className="h20"/>
            </div>
        );
    }

}

export default Dashboard;
