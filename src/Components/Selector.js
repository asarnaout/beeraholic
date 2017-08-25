import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../Assets/css/Selector.css'

class Selector extends Component{

    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.selectedOption = this.props.value === ''? undefined : this.props.value;
    }

    handleSelectChange(event){
        if(event === null) {
            this.props.handleSelectChange('', this.props.id);
            this.selectedOption = undefined;
            return;
        }

        this.props.handleSelectChange(event.value, this.props.id);
        this.selectedOption = event.value;
    }

    componentWillUpdate(nextProps, nextState){
        this.selectedOption = nextProps.value === ''? undefined : nextProps.value;
    }

    render() {
        return(
            <Select className="selector fs-14" onChange={this.handleSelectChange} value={this.selectedOption} placeholder={this.props.placeholder} options={this.props.options} />
        );
    }
}

export default Selector;