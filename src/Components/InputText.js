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

    getValue(){
      return this.state.value;
    }

    handleKeyPress = (event) => {
      this.props.handleKeyPress(event.key, this.props.id)
    }

    render() {
      return (
        <input type={this.getInputType()} placeholder={this.props.placeholder} className="input-text" id={this.props.id} onKeyPress={this.handleKeyPress} />
      );
    }
}
  
InputText.propTypes = {
   placeholder: PropTypes.string
};

InputText.defaultProps = { 
  placeholder: '',
  password: false
};
  
export default InputText;
  