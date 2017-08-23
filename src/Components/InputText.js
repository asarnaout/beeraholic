import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../Assets/css/InputText.css'

class InputText extends Component {
  
    constructor(props){
      super(props);
      this.updateInputValue = this.updateInputValue.bind(this);
    }

    getInputType() {
      return this.props.password? "password" : "text";
    }

    updateInputValue(event){
      this.props.handleKeyPress(event.target.value, this.props.id)
    }

    render() {
      return (
        <input type={this.getInputType()} placeholder={this.props.placeholder} className="input-text" id={this.props.id} onChange={this.updateInputValue} />
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
  