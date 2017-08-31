import React, { Component } from 'react';
import FilterContainer from '../Containers/FilterContainer'
import InputText from './InputText'
import Button from './Button'

class ContactUs extends Component {
    render() {
        let filter = this.props.authenticated? (<div className="turquoise-bg"><div className="container"><FilterContainer /></div></div>) : <div></div>;
        
        return (<div>
            {filter}
            <div className="white-bg">
                <div className="container contact-us">
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
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default ContactUs;