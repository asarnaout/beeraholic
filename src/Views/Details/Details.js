import React, { Component } from 'react';
import './Details.css'
import '../../Assets/css/common.css'
import Filter from '../../Components/Filter'
import axios from 'axios'
import config from '../../config.js'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'

class Details extends Component {

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
                  thumbnail: this.isProvided(beer.labels)? beer.labels.large : config.defaultDashboardIconCdn,
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
        return (
                <div id="DetailsPage">
                    <div className="turquoise-bg">
                        <div className="container">
                            <Filter searchHandler={this.searchHandler}/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="h20"/>
                        <div>
                                <div className ="col-sm-7 col-xs-12">
                                    <span className="fs-40 bold">{this.state.name}</span>
                                    <div className="h10"/>
                                    <span className="fs-18"><i>{this.state.style}</i></span>
                                    <div className="h10"/>
                                    <p className="fs-20 justify-text"><span className="bold">Description:</span> {this.state.description}</p>
                                    <p className="fs-20"><span className="bold">Verification Status:</span> {this.state.statusDisplay}</p>
                                    <p className="fs-20"><span className="bold">ABV:</span> {this.state.abv}</p>
                                    <p className="fs-20"><span className="bold">IBU:</span> {this.state.ibu}</p>
                                    <p className="fs-20"><span className="bold">Organic:</span> {this.state.organic}</p>
                                    <p className="fs-20"><span className="bold">Availability:</span> {this.state.available}</p>
                                    <p className="fs-20"><span className="bold">Glassware:</span> {this.state.glass}</p>
                                    <p className="fs-20"><span className="bold">SRM:</span> {this.state.srm}</p>
                                    <p className="fs-20"><span className="bold">Created:</span> {this.state.createDate}</p>
                                </div>

                                <div className ="col-sm-5 col-xs-12">
                                    <img src={this.state.thumbnail} className="center-item full-width"/>
                                </div>
                                
                        </div>
                        <div className="h20"/>

                        <div className="row">
                            <div className="col-sm-2 col-sm-offset-5 col-xs-12">
                                <Link to={'/dashboard'}>
                                    <Button background="red-bg" placeholder="Back" />
                                </Link> 
                            </div>                            
                        </div>
                        <div className="h30"/>
                        
                    </div>
                </div>
                );
    }
}

export default Details;