import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import InputText from './InputText'
import '../Assets/css/common.css'

class Filter extends Component {

    render(){
        return(
            <div className="padding-15">
                <div className="row">
                    <div className="col-xs-2">
                        <InputText placeholder="Name" />
                    </div>
                </div>
            </div>
        );
    }

}

export default Filter;