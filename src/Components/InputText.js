import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InputText.css'

class InputText extends Component {
  
    constructor(props){
      super(props)
    }

    getInputType() {
      return this.props.password? "password" : "text";
    }

    updateInputValue(event){
      this.props.handleKeyPress(event.target.value, this.props.id)
    }

    render() {
      return (
        <input type={this.getInputType()} placeholder={this.props.placeholder} className="input-text" id={this.props.id} onChange={this.updateInputValue.bind(this)} />
      );
    }
}
  
InputText.propTypes = {
   placeholder: PropTypes.string,
   password: PropTypes.bool
};

InputText.defaultProps = { 
  placeholder: '',
  password: false
};
  
export default InputText;
  