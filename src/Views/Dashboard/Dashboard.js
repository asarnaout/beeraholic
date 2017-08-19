import React, { Component } from 'react';
import BeerItem from '../../Components/BeerItem'
import Filter from '../../Components/Filter'
import Button from '../../Components/Button'
import '../../Assets/css/common.css'
import './Dashboard.css'
import axios from 'axios'
import config from '../../config.js'


class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            page: 1
        }
    }

    componentWillMount(){
        this.fetchDashboard();
    }

    fetchDashboard(){
        let result = (axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beers?p=' + this.state.page + '&key=' + config.breweryApiKey,
          })).then(response => {
              let beers = response.data.data;
                this.setState({items: beers});
          }); 
    }

    getItems(){
        return this.state.items.map((beer) => {
            let thumbnail = beer.labels == undefined? '' : beer.labels.medium;
            return (<div className="col-xs-4">
                        <BeerItem thumbnail={thumbnail} beername={beer.name} beerid={beer.id} />
                    </div>
              );
        });
    }

    nextPage(){
        let page = ++this.state.page;
        this.setState({page: page});
        this.fetchDashboard();
    }

    render() {
        let items = this.getItems();
        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                        <Filter/>
                    </div>
                </div>
                <div className="container">
                    {items}

                    <div className="row">
                        <div className="col-xs-offset-5 col-xs-2">
                            <Button placeholder="Next Page" clickHandler={this.nextPage.bind(this)}/>
                        </div> 
                    </div>
                    <div className="h20"/>
                </div>
            </div>
        );
    }

}

export default Dashboard;
