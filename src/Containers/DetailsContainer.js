import React, { Component } from 'react';
import axios from 'axios'
import config from '../config.js'
import Details from '../Components/Details'

class DetailsContainer extends Component {

    constructor(props){
        super(props);
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
            createDate:''
        }
    }

    componentWillMount(){
        (axios({
            method: 'get',
            url: config.apiEndpoint + 'beer?id=' + this.props.match.params.beerId,
          })).then(response => {
              let beer = response.data.data;
              this.setState({
                  name: beer.name,
                  description: this.isProvided(beer.description)? beer.description : 'Description Not Available',
                  statusDisplay: this.isProvided(beer.statusDisplay)? beer.statusDisplay:'Verification Status Not Available',
                  createDate: this.isProvided(beer.createDate)? beer.createDate : 'Creation Date Not Available',
                  organic: beer.isOrganic === "N"? "No" : "Yes",
                  thumbnail: this.isProvided(beer.labels)? beer.labels.large : config.defaultSearchItemIconCdn,
                  available: this.isProvided(beer.available)? beer.available.description : 'Not Available',
                  glass: this.isProvided(beer.glass)? beer.glass.name : 'No Glassware Available',
                  srm: this.isProvided(beer.srm)? '#' + beer.srm.hex : 'No SRM Code Available',
                  abv: this.isProvided(beer.abv)? beer.abv :  'ABV Not Available',
                  ibu: this.isProvided(beer.ibu)? beer.ibu :  'IBU Not Available',
                  style: this.isProvided(beer.style)? beer.style.name : 'Beer Style Not Available'
              });
        }); 
    }

    searchHandler(){
        
    }

    isProvided(value) {
        return value !== undefined && value != '' && value != null;
    }

    render(){
        return <Details searchHandler={this.searchHandler} name={this.state.name} style={this.state.style} description={this.state.description}
            statusDisplay={this.state.statusDisplay} abv={this.state.abv} ibu={this.state.ibu} organic={this.state.organic}
            available={this.state.available} glass={this.state.glass} srm={this.state.srm} createDate={this.state.createDate}
            thumbnail={this.state.thumbnail}/>
    }
}

export default DetailsContainer;