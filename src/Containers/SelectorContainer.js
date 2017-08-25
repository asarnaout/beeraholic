import React, { Component } from 'react';
import Selector from '../Components/Selector'

class SelectorContainer extends Component{
    
    constructor(props){
        super(props);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.state = {
            selectedOption: this.props.value === ''? undefined : this.props.value
        }
    }

    handleSelectChange(event){
        if(event === null) {
            this.props.handleSelectChange('', this.props.id);
            this.setState({selectedOption: undefined});
            return;
        }

        this.props.handleSelectChange(event.value, this.props.id);
        this.setState({selectedOption: event.value});
    }

    shouldComponentUpdate(nextProps, nextState){
        return !((nextProps.value === ''? undefined : nextProps.value) === this.state.selectedOption);
    }

    componentWillUpdate(nextProps, nextState){
        this.setState({selectedOption: nextProps.value === ''? undefined : nextProps.value});
    }

    render() {
        return <Selector handleSelectChange={this.handleSelectChange} selectedOption={this.state.selectedOption} placeholder={this.props.placeholder} options={this.props.options}/>        
    }
}

export default SelectorContainer;