import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Selector.css'

class Selector extends Component{

    getOptions(){
        return this.props.options.map((item) => {
            return (<option value={item.value}>{item.text}</option>)
        });
    }

    render() {
        var options = this.getOptions();

        return(
            <select className="selector fs-14">{options}</select>
        );
    }
}


export default Selector;