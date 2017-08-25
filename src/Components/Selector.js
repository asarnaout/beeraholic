import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../Assets/css/Selector.css'

class Selector extends Component{

    render() {
        return <Select className="selector fs-14" onChange={this.props.handleSelectChange} value={this.props.selectedOption} placeholder={this.props.placeholder} options={this.props.options} />
    }

}

export default Selector;