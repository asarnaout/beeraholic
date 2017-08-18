import React, { Component } from 'react';
import './Home.css';
import '../../Assets/css/common.css';
import InputText from '../../Components/InputText'


class HomeComponent extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
        <div id="HomeContainer" className="col-xs-offset-4 col-xs-4">
            <h1 className="black-text center-text no-margin">Craving for Beer?</h1>
        </div>
        );
    }
}

export default HomeComponent;