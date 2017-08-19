import React, { Component } from 'react';
import './Details.css'
import '../../Assets/css/common.css'
import Filter from '../../Components/Filter'
import axios from 'axios'
import config from '../../config.js'
import Button from '../../Components/Button'
import { Link } from 'react-router-dom'

const defaultThumbnail = 'http://cdn2.insidermonkey.com/blog/wp-content/uploads/2015/07/shutterstock_113954089-400x340.jpg';

class Details extends Component {

    constructor(props){
        super(props);
        this.state ={
            beer:{}
        };
    }

    componentWillMount(){
        var result = (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beer/' + this.props.match.params.beerId + '?key=' + config.breweryApiKey,
          })).then(response => {
              var beer = response.data.data;
               this.setState({beer: beer});
              console.log(response.data.data);
          }); 
    }

    render(){
        let beer = this.state.beer;
        let thumbnail = beer.labels == undefined? defaultThumbnail : beer.labels.large;
        let organic = beer.isOrganic === "N"? "No" : "Yes";
        let availability = beer.available === undefined? 'Not Available' : beer.available.description;
        let glass = beer.glass === undefined? 'No Glassware Available' : beer.glass.name;
        let srm = beer.srm === undefined? 'No SRM Code Provided' : beer.srm.hex;
        
        return (
                <div id="DetailsPage">

                    <div className="turquoise-bg">
                        <div className="container">
                            <Filter/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="h20"/>
                        <div>
                                <div className ="col-xs-7">
                                    <div className="h10"/>
                                    <span className="fs-40 bold">{beer.name}</span>
                                    <div className="h10"/>
                                    <p className="fs-20 justify-text"><span className="bold">Description:</span> {beer.description}</p>
                                    <p className="fs-20"><span className="bold">Verification Status:</span> {beer.statusDisplay}</p>
                                    <p className="fs-20"><span className="bold">ABV:</span> {beer.abv}</p>
                                    <p className="fs-20"><span className="bold">IBU:</span> {beer.ibu}</p>
                                    <p className="fs-20"><span className="bold">Organic:</span> {organic}</p>
                                    <p className="fs-20"><span className="bold">Availability:</span> {availability}</p>
                                    <p className="fs-20"><span className="bold">Glassware:</span> {glass}</p>
                                    <p className="fs-20"><span className="bold">SRM:</span> #{srm}</p>
                                    <p className="fs-20"><span className="bold">Created:</span> {beer.createDate}</p>
                                </div>

                                <div className ="col-xs-5">
                                    <img src={thumbnail} className="center-item full-width"/>
                                </div>
                                
                        </div>
                        <div className="h20"/>

                        <div className="row">
                            <div className="col-xs-2 col-xs-offset-5">
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