import React, { Component } from 'react';
import '../Assets/css/InputText.css'

class InputText extends Component {
    constructor(props) {
      super(props);
      this.updateInputValue = this.updateInputValue.bind(this);
    }

    getInputType() {
      return this.props.password? "password" : "text";
    }

    updateInputValue(event){
      this.props.handleKeyPress(event.target.value)
    }

    render() {
      return (
        <input type={this.getInputType()} placeholder={this.props.placeholder} value={this.props.value} className="input-text" onChange={this.updateInputValue} />
      );
    }
}
  
export default InputText;