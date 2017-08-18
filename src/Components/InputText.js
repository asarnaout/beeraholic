import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './InputText.css'

class InputText extends Component {
  
    getInputType() {
      return this.props.password? "password" : "text";
    }

    render() {
      return (
        <input type={this.getInputType()} placeholder={this.props.placeholder} className="input-text" />
      );
    }
}
  
InputText.propTypes = {
   placeholder: PropTypes.string
};

InputText.defaultProps = { 
  text: '',
  password: false
};
  
export default InputText;
  