import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css'

class Button extends Component {
      render() {
        return (
          <input type="button" value={this.props.placeholder} className="button-comp" onClick={this.props.clickHandler} />
        );
      }
  }
    
  Button.propTypes = {
     placeholder: PropTypes.string,
     clickHandler: PropTypes.func
  };
  
  Button.defaultProps = { 
    placeholder: '',
    clickHandler: () => {}
  };
    
  export default Button;
  