import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Selector.css'

class Selector extends Component{

    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            options: this.getOptions()
        }         
    }
    
    getOptions(){
        return this.props.options.map((item) => {
            return (<option value={item.value} key={item.value}>{item.text}</option>)
        });
    }

    handleSelectChange(event){
        this.props.handleSelectChange(event.target.value, this.props.id);
    }

    render() {
        return(
            <select className="selector fs-14" id={this.props.id} onChange={this.handleSelectChange} value={this.selectedOption}>{this.state.options}</select>
        );
    }
}


export default Selector;