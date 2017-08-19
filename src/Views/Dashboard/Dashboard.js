import React, { Component } from 'react';
import BeerItem from '../../Components/BeerItem'
import Filter from '../../Components/Filter'
import Button from '../../Components/Button'
import config from '../../config.js'
import '../../Assets/css/common.css'
import './Dashboard.css'

class Dashboard extends Component {

    constructor(props){
        super(props);
        this.state = {
            items: [],
            page: 1,
            loading: false
        }
    }

    updateItems(newItems) {
        if(newItems === this.state.items) return;
        this.setState({items: newItems, loading: false});
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
        this.searchHandler();
        let page = ++this.state.page;
        this.setState({page: page});
        this.forceUpdate();
    }

    searchHandler(){
        this.setState({
            loading: true
        });
    }

    render() {
        let items = this.getItems();
        let content = this.state.loading? <div className="padding-20"><img src={config.defaultLoaderCdn} className="loading-icon center-item" height={100} width={100} /></div> : items;
        
        return (
            <div>
                <div className="turquoise-bg">
                    <div className="container">
                        <Filter updateItems={this.updateItems.bind(this)} page={this.state.page} searchHandler={this.searchHandler.bind(this)}/>
                    </div>
                </div>
                <div className="container">
                    {content}                    
                </div>
                <div className="h10"/>
                <div className="row">
                    <div className="col-xs-offset-5 col-xs-2">
                        <Button placeholder="Next Page" background="red-bg" clickHandler={this.nextPage.bind(this)}/>
                    </div> 
                </div>
                <div className="h20"/>
            </div>
        );
    }

}

export default Dashboard;
