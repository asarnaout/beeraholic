import React, { Component } from 'react';
import './Details.css'
import '../../Assets/css/common.css'
import Filter from '../../Components/Filter'
import axios from 'axios'
import config from '../../config.js'


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
        let thumbnail = beer.labels == undefined? defaultThumbnail : beer.labels.medium;
        let organic = beer.isOrganic === "N"? "No" : "Yes";
        let availability = beer.available === undefined? 'Not Available' : beer.available.description;
        let glass = beer.glass === undefined? 'No Glass Available' : beer.glass.name;
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
                        <div className="row">
                            <div>
                                <img src={thumbnail} className="center-item"/>
                                <div className="h10"/>
                                <div className="center-text">
                                    <span className="fs-40 bold">{beer.name}</span>
                                </div>
                                <div className="h10"/>
                                <p className="fs-20 justify-text"><span className="bold">Description:</span> {beer.description}</p>
                                <p className="fs-20"><span className="bold">Verification Status:</span> {beer.statusDisplay}</p>
                                <p className="fs-20"><span className="bold">ABV:</span> {beer.abv}</p>
                                <p className="fs-20"><span className="bold">IBU:</span> {beer.ibu}</p>
                                <p className="fs-20"><span className="bold">Organic:</span> {organic}</p>
                                <p className="fs-20"><span className="bold">Availability:</span> {availability}</p>
                                <p className="fs-20"><span className="bold">Glass:</span> {glass}</p>
                                <p className="fs-20"><span className="bold">SRM:</span> #{srm}</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}

export default Details;