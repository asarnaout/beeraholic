import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../Assets/css/Selector.css'

class Selector extends Component{

    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);        
    }

    handleSelectChange(event){
        if(event === null) {
            var initial = this.props.options[0].value;
            this.props.handleSelectChange(initial, this.props.id);
            this.selectedOption = initial;
            return;
        }

        this.props.handleSelectChange(event.value, this.props.id);
        this.selectedOption = event.value;
    }

    render() {
        return(
            <Select className="selector fs-14" onChange={this.handleSelectChange} value={this.selectedOption} options={this.props.options} />
        );
    }
}


export default Selector;