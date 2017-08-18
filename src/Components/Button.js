import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css'

class Button extends Component {
      render() {
        return (
          <input type="button" value={this.props.placeholder} className="button-comp" />
        );
      }
  }
    
  Button.propTypes = {
     placeholder: PropTypes.string
  };
  
  Button.defaultProps = { 
    placeholder: ''
  };
    
  export default Button;
  