import React, { Component } from 'react';
import BeerItem from '../Components/BeerItem'
import FilterContainer from '../Containers/FilterContainer'
import config from '../config'
import '../Assets/css/common.css'
import { Link } from 'react-router-dom'
import queryString from 'query-string';
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'

class Search extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        window.onpopstate = this.onBackButtonEvent;
    }

    async componentWillMount(){
        let qs = queryString.parse(this.props.location.search);
        this.props.setFilter(qs);
        let authenticated = await AuthenticationHelpers.authenticateUser();
        if(!authenticated) {
            this.props.history.push('/home');
        } else {
            document.body.style.backgroundImage = "none";
        }
    }

    async nextPage() {
        await this.props.nextPage(this.props.page + 1, this.props.beername, this.props.ibu, this.props.abv, this.props.year, this.props.order)
    }

    async previousPage() {
        await this.props.previousPage(this.props.page - 1, this.props.beername, this.props.ibu, this.props.abv, this.props.year, this.props.order)
    }

    getItems(){
        return this.props.items.map((beer) => {
            let thumbnail = beer.labels === undefined? '' : beer.labels.medium;
            let style = beer.style === undefined? 'Beer Style Not Available' : beer.style.name;

            return (<div className="col-lg-4 col-sm-6 col-xs-12" key={beer.id}>
                        <BeerItem thumbnail={thumbnail} beername={beer.name} beerid={beer.id} beerstyle={style} isFav={beer.isFav}
                            filterName={this.props.beername} filterAbv={this.props.abv} filterIbu={this.props.ibu}
                            filterYear={this.props.year} filterOrder={this.props.order} filterPage={this.props.page} toggleFav={this.props.toggleFav} />
                    </div>
              );
        });
    }

    getNavButtons(){
        let renderNextButton = this.props.page < this.props.numberOfPages;
        let renderPreviousButton = this.props.page > 1;
        let queryString = `?ibu=${this.props.ibu}&abv=${this.props.abv}&name=${this.props.beername}&year=${this.props.year}&order=${this.props.order}`;

        if(renderNextButton && !renderPreviousButton) {
            return <Link to={'/search' + queryString + `&page=${this.props.page + 1}`}><img src={config.navArrowCdn} onClick={this.nextPage} width={40} height={40} className="center-item pointer" alt="next_page"/></Link>
        }

        if(!renderNextButton && renderPreviousButton) {
            return <Link to={'/search' + queryString + `&page=${this.props.page - 1}`}><img src={config.navArrowCdn} onClick={this.previousPage} width={40} height={40} className="center-item flip-Y pointer" alt="previous_page"/></Link>
        }

        if(renderNextButton && renderPreviousButton) {
            return (
                <div className="center-text">
                    <Link to={'/search' + queryString + `&page=${this.props.page - 1}`}><img src={config.navArrowCdn} onClick={this.previousPage} width={40} height={40} className="inline flip-Y pointer margin-15" alt="previous_page"/></Link>
                    <Link to={'/search' + queryString + `&page=${this.props.page + 1}`}><img src={config.navArrowCdn} onClick={this.nextPage} width={40} height={40} className="inline pointer margin-15" alt="next_page"/></Link>
                </div>
            ); 
        }
    }

    render(){
        let items = this.getItems();
        let results = items.length === 0? (<div className="row no-margin"><div className="h30"/><span className="fs-30 col-xs-12 center-text">No Results Found, Try Changing The Search Criteria</span></div>) : items;
        let content = this.props.loading? <div className="padding-20"><img src={config.defaultLoaderCdn} className="loading-icon center-item" height={100} width={100} alt="loading" /></div> : results;
        let navButtons = this.props.loading? <div></div> : this.getNavButtons();

        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                        <FilterContainer />
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