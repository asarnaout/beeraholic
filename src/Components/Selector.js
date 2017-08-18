import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Selector extends Component{

    getOptions(){
        return this.props.options.map((item) => {
            return (<option value={item.id}>{item.value}</option>)
        });
    }

    render() {
        var options = this.getOptions();

        return(
            <select>{options}</select>
        );
    }
}


export default Selector;