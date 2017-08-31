import React, { Component } from 'react';
import FilterContainer from '../Containers/FilterContainer'
import InputText from './InputText'
import Button from './Button'

class ContactUs extends Component {
    render() {
        return (
        <div>
            <div className="turquoise-bg"><div className="container"><FilterContainer /></div></div>
            <div className="white-bg">
                <div className="container contact-us">
                    <div className="col-xs-12"><h4 className="no-margin blue-text bold">Contact Us</h4></div>
                    <div className="col-xs-12 contactus-item"><span className="bold">We'd love to hear your opinion</span></div>
                    
                    <div className="col-xs-12 col-sm-8">
                        <textarea placeholder="Enter Your Inquiry Here..." value={this.props.message} className="full-width" rows={15} onChange={this.props.onMessageChange}/>
                    </div>
                    <div className="col-xs-12 col-sm-4">
                        <div className="row">
                            <div className="col-xs-12">
                                <InputText placeholder="Full Name" value={this.props.contactusFullName} handleKeyPress={this.props.onNameChange}/>
                            </div>
                        </div>

                        <div className="row contactus-item">
                            <div className="col-xs-12">
                                <InputText placeholder="Email Address" value={this.props.contactusEmail} handleKeyPress={this.props.onEmailChange}/>
                            </div>
                        </div>
                        
                        <div className="row contactus-item">
                            <div className="col-xs-12">
                                <Button placeholder="Submit" background="red-bg" clickHandler={this.props.onContactUsSubmit}/>
                            </div>
                        </div>

                        <div className="row contactus-item">
                            <div className="col-xs-12">
                                <span className="red-text">{this.props.statusMessage}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default ContactUs;