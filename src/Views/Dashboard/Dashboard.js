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
            page: 1,
            ibu: '',
            abv: '',
            beername: ''
        }
    }

    componentWillMount(){
        this.fetchDashboard();
    }

    fetchDashboard(){
        let queryString = "?key=" + config.breweryApiKey + "&p=" + this.state.page + "&name=" + this.state.beername + "&ibu=" + this.state.ibu + "&abv=" + this.state.abv
        ;(axios({
            method: 'get',
            url: config.breweryApiEndpoint + 'beers' + queryString,
          })).then(response => {
              if(typeof(response.data.data) === 'undefined'){
                  this.setState({items: []});
                  return;
              }
              let beers = response.data.data;
              this.setState({items: beers});
          }); 
    }

    onFilterInput(key, id){
        let newValue = {};
        newValue[id] = this.state[id] + key;
        this.setState(newValue);
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
                        <Filter handleKeyPress={this.onFilterInput.bind(this)} onFilter={this.fetchDashboard.bind(this)}/>
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
