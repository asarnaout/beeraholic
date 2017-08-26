import React, { Component } from 'react';
import config from '../config.js'
import Details from '../Components/Details'
import AuthenticationHelpers from '../Helpers/AuthenticationHelpers'
import { getBeer } from '../Helpers/ApiHelpers'

class DetailsContainer extends Component {

    constructor(props){
        super(props);
        this.auth();
        this.searchHandler = this.searchHandler.bind(this);
        this.state = {
            organic: '',
            thumbnail: '',
            available: '',
            glass: '',
            srm: '',
            abv:'',
            ibu: '',
            name: '',
            description:'',
            statusDisplay: '',
            createDate:'',
            query: this.props.location.search
        }
    }

    async auth(){
        let authenticated = await AuthenticationHelpers.authenticateUser();
        
        if(!authenticated) {
            this.props.history.push('/home');
        }
    }
    
    async componentWillMount(){
        let response = await getBeer(this.props.match.params.beerId);
        let beer = response.data.data;

        this.setState({
            name: beer.name,
            description: beer.description || 'Description Not Available',
            statusDisplay: beer.statusDisplay || 'Verification Status Not Available',
            createDate: beer.createDate || 'Creation Date Not Available',
            abv: beer.abv ||  'ABV Not Available',
            ibu: beer.ibu ||  'IBU Not Available',
            organic: beer.isOrganic === "N"? "No" : "Yes",
            thumbnail: this.isProvided(beer.labels)? beer.labels.large : config.defaultSearchItemIconCdn,
            available: this.isProvided(beer.available)? beer.available.description : 'Not Available',
            glass: this.isProvided(beer.glass)? beer.glass.name : 'No Glassware Available',
            srm: this.isProvided(beer.srm)? '#' + beer.srm.hex : 'No SRM Code Available',
            style: this.isProvided(beer.style)? beer.style.name : 'Beer Style Not Available'
        });
    }

    searchHandler(){
        
    }

    isProvided(value) {
        return value !== undefined && value !== '' && value !== null;
    }

    render(){
        return <Details name={this.state.name} style={this.state.style} description={this.state.description}
            statusDisplay={this.state.statusDisplay} abv={this.state.abv} ibu={this.state.ibu} organic={this.state.organic}
            available={this.state.available} glass={this.state.glass} srm={this.state.srm} createDate={this.state.createDate}
            thumbnail={this.state.thumbnail} query={this.state.query} />
    }
}

export default DetailsContainer;