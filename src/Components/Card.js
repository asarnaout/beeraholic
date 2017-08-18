import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './Card.css';
import '../Assets/css/common.css';
import InputText from './InputText'
import Button from './Button'

class Card extends Component {

    getFields() {
        if(this.props.fields == []) return;
        return this.props.fields.map(field => {
            return (
                <div>
                    <div className="row">
                        <div className="col-xs-10 col-xs-offset-1">
                            <InputText placeholder={field.value} password={field.password} />
                        </div>
                    </div>
                    <div className="h10"/>
                </div>                
            );
        })
    }

    getActionButton(){
        if(this.props.actionButtonValue == '') return;

        return(
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Button placeholder={this.props.actionButtonValue} />
                    </div>
                </div>
                                
                <div className="h10"/>
            </div>            
        );
    }

    render() {
        let fields = this.getFields();
        let actionButton = this.getActionButton();
        
        return (
        <div className="card col-xs-offset-4 col-xs-4">
         
            <h1 className="black-text center-text no-margin">{this.props.header}</h1>
          
            <div className="h20" />            

            {fields}
            {actionButton}         
            {this.props.children}

        </div>
        );
    }
}

Card.propTypes = {
    header: PropTypes.string,
    fields: PropTypes.array,
    actionButtonValue: PropTypes.string
 };

 Card.defaultProps = { 
    header: '',
    fields: [],
    actionButtonValue: ''
 };
   

export default Card;