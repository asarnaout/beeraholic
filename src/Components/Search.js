import React, { Component } from 'react';
import BeerItem from '../Components/BeerItem'
import FilterContainer from '../Containers/FilterContainer'
import Button from '../Components/Button'
import config from '../config'
import '../Assets/css/common.css'

class Search extends Component {

    getItems(){
        return this.props.items.map((beer) => {
            let thumbnail = beer.labels === undefined? '' : beer.labels.medium;
            let style = beer.style === undefined? 'Beer Style Not Available' : beer.style.name;
            return (<div className="col-lg-4 col-sm-6 col-xs-12" key={beer.id}>
                        <BeerItem thumbnail={thumbnail} beername={beer.name} beerid={beer.id} beerstyle={style} />
                    </div>
              );
        });
    }

    getNavButtons(){
        let renderNextButton = this.props.page < this.props.numberOfPages;
        let renderPreviousButton = this.props.page > 1;

        if(renderNextButton && !renderPreviousButton) {
            return <img src={config.navArrowCdn} onClick={this.props.nextPage} width={40} height={40} className="center-item pointer"/>; 
        }

        if(!renderNextButton && renderPreviousButton) {
            return <img src={config.navArrowCdn} onClick={this.props.previousPage} width={40} height={40} className="center-item flip-Y pointer"/>; 
        }

        if(renderNextButton && renderPreviousButton) {
            return (
                <div className="center-text">
                    <img src={config.navArrowCdn} onClick={this.props.previousPage} width={40} height={40} className="inline flip-Y pointer margin-15"/>
                    <img src={config.navArrowCdn} onClick={this.props.nextPage} width={40} height={40} className="inline pointer margin-15"/>; 
                </div>
            ); 
        }
    }

    render(){
        let items = this.getItems();
        let results = items.length === 0? (<div className="row no-margin"><div className="h30"/><span className="fs-30 col-xs-12 center-text">No Results Found, Try Changing The Search Criteria</span></div>) : items;
        let content = this.props.loading? <div className="padding-20"><img src={config.defaultLoaderCdn} className="loading-icon center-item" height={100} width={100} /></div> : results;
        let navButtons = this.props.loading? <div></div> : this.getNavButtons();

        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                        <FilterContainer updateItems={this.props.updateItems} page={this.props.page} 
                        searchHandler={this.props.searchHandler} ibu={this.props.ibu} abv={this.props.abv} beername={this.props.beername} 
                        year={this.props.year} sort={this.props.sort} />
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

export default Search;